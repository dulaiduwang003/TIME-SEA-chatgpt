# -*- coding: utf-8 -*-
import os
import uuid
import json
import base64
import logging
import requests
import datetime

from utils.jsonResponse import SuccessResponse, ErrorResponse, DetailResponse
from utils.aliyunoss import aliyunossuploads
from rest_framework.views import APIView
from system.views import UserTokenCheckView
from system.models import Drawing, TSdControlNet
from config import IS_DELETE
from utils.common import get_parameter_dic

from django.db.models import F
from django_redis import get_redis_connection
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO

logger = logging.getLogger(__name__)

class GetSdControlNetType(APIView):
    """
    查询cn绘图的类型
    """
    authentication_classes = []

    def get(self, request, *args, **kwargs):

        payload = UserTokenCheckView.token_check(request)
        if not payload:
            return ErrorResponse(msg='token校验失败，请不要模拟接口使用')

        resdata = []

        try:
            # 数据不多暂时直接获取全部了
            data_list = TSdControlNet.objects.all()
            resdata = [
                {
                    'type': item.type,
                    'text': f"{item.type_name}({item.text})"
                }
                for item in data_list
            ]
            return DetailResponse(data=list(resdata))
        except Exception as e:
            logger.error("cn绘图类型获取数据异常:%s" % (str(e)))
            return ErrorResponse(code=2004)


class SdControlNetDraught(APIView):
    """
    SD文字内嵌图
    """
    authentication_classes = []

    def text_to_image(text, image_width, image_height):
        # 创建一个空白图片，模式为RGBA，背景颜色为黑色
        image = Image.new('RGBA', (int(image_width), int(image_height)), (0, 0, 0))
        draw = ImageDraw.Draw(image)

        # 当前文件的路径
        current_path = os.path.dirname(__file__)
        # 字体文件的路径
        font_file = os.path.join(current_path, "SIMHEI.TTF")
        # 字体设置，字体大小可适当调整
        font = ImageFont.truetype(font_file, 200)
        
        # 将字符串按行分割
        text_lines = text.split('\n')

        # 初始化Y轴偏移量
        y_text = 0 
        line_heights = []

        for line in text_lines:
            # 计算各行文字的大小并存储行高
            _, height = draw.textsize(line, font=font)
            line_heights.append(height)

        # 计算总行高
        total_height = sum(line_heights)

        # 计算开始的Y轴位置以实现垂直居中
        y_text = (image.height - total_height) / 2 

        for line in text_lines:
            # 计算文字长度并调整位置
            width, height = draw.textsize(line, font=font)
            text_x = (image.width - width) / 2
            text_y = y_text

            # 在画布上写字，起始位置，字体颜色为白色
            draw.text((text_x, text_y), line, font=font, fill=(255, 255, 255))
            y_text += height

        output_buffer = BytesIO()
        # 保存为PNG格式的图片
        image.save(output_buffer, format='PNG')
        byte_data = output_buffer.getvalue()
        # 转为base64
        base64_str = base64.b64encode(byte_data).decode('utf-8')

        return base64_str
    
    def inmemoryuploadedfile_to_base64(file: InMemoryUploadedFile):
        # 确认文件是PNG格式
        if file.content_type != 'image/png':
            raise ValueError('传入图片格式不正确.')

        # 获取二进制数据
        img_data = file.read()

        # 转化为Base64
        base64_str = base64.b64encode(img_data).decode()

        return base64_str

    def process_image(image, file_dir=".", prefix="media"):
        img_data = base64.b64decode(image)
        img = Image.open(BytesIO(img_data))

        # 生成文件名
        generate_name = f'{uuid.uuid4()}.png'
        file_path = os.path.join(file_dir, prefix, generate_name)

        # 保存图片到本地media文件夹
        img.save(file_path)

        return file_path, generate_name

    def post(self, request, *args, **kwargs):
        # 获取当前时间
        now_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")

        payloads = UserTokenCheckView.token_check(request)
        if not payloads:
            return ErrorResponse(msg='token校验失败，请不要模拟接口使用')

        parameter_dic = get_parameter_dic(request)

        # 根据type类型获取CN模型数据
        data_list = TSdControlNet.objects.filter(type=parameter_dic.get('controlNetType')).values('guidance_start', 'guidance_end', 'model', 'module', 'weight')
        for item in data_list:
            guidance_start = round(float(item['guidance_start']), 2)
            guidance_end = round(float(item['guidance_end']), 2)
            model = item['model']
            module = item['module']
            weight = round(float(item['weight']), 2)

        redis_conn = get_redis_connection('session')
        url = json.loads(redis_conn.get('SD_CONFIG').decode(
            'utf-8'))[1]['sdUrl'] + '/sdapi/v1/txt2img'

        headers = {
            'Content-Type': 'application/json',
        }

        payload = {
            "alwayson_scripts": {
                "controlnet": {
                    "args": [
                        {
                            "guidance_end": guidance_end,
                            "guidance_start": guidance_start,
                            "model": model,
                            "module": module,
                            "pixel_perfect": True,
                            "weight": weight,
                        },
                    ],
                },
            },
            "batch_size": 1,
            "cfg_scale": 7,
            "height": parameter_dic.get('height'),
            "negative_prompt": parameter_dic.get('negative_prompt'),
            "prompt": parameter_dic.get('prompt'),
            "sampler_index": parameter_dic.get('sampler_index'),
            "steps": parameter_dic.get('steps'),
            "width": parameter_dic.get('width'),
            "sd_model_name": parameter_dic.get('modelName')
        }

        images = parameter_dic.get('images', None)
        entryText = parameter_dic.get('entryText', None)

        if images:
            payload['alwayson_scripts']['controlnet']['args'][0]["input_image"] = SdControlNetDraught.inmemoryuploadedfile_to_base64(images)
        elif entryText:
            payload['alwayson_scripts']['controlnet']['args'][0]["input_image"] = SdControlNetDraught.text_to_image(entryText, parameter_dic.get('width'), parameter_dic.get('height'))

        try:
            response = requests.post(url, headers=headers, json=payload)

            # 获取图片base64并转换成png
            img_base64 = response.json()['images']

            # 声明两个变量来保存垫图和实图的URL
            original_url, generate_url = None, None

            for index, image in enumerate(img_base64):
                file_path, generate_name = SdControlNetDraught.process_image(image)

                try:
                    # 上传到阿里云OSS
                    image_url = aliyunossuploads("painting", file_path, generate_name)
                    image_url = '/' + '/'.join(image_url.split('/')[-2:])
                     # 根据图片的顺序，分别写入到original_url和generate_url字段
                    if index == 0:
                        generate_url = image_url
                    elif index == 1:
                        original_url = image_url

                except Exception as e:
                    logger.error("阿里云OSS上传数据异常:%s" % (str(e)))
                    return ErrorResponse(code=2004)

                finally:
                    if IS_DELETE:
                        # 删除本地文件（可选操作）
                        os.remove(file_path)
            
            # 记录数据到数据库
            drawing_instance = Drawing.objects.create(user_id=payloads, prompt=parameter_dic.get('prompt'), original_url=original_url, generate_url=generate_url, is_public=0, created_time=now_time, update_time=now_time, env=parameter_dic.get('env'))

            # 构建返回字段
            resdata = {
                'drawingId': drawing_instance.drawing_id,
                'location': 0
            }

            return DetailResponse(data=resdata)
        except (requests.exceptions.RequestException, KeyError) as e:
            logger.error("sd绘图数据异常:%s" % (str(e)))
            return ErrorResponse(code=2004)
