# -*- coding: utf-8 -*-
import os
import uuid
import json
import base64
import logging
import requests
import datetime
import traceback

from utils.jsonResponse import SuccessResponse, ErrorResponse, DetailResponse
from utils.aliyunoss import aliyunossuploads
from rest_framework.views import APIView
from system.views import UserTokenCheckView
from system.models import Drawing, TSdControlNet
from config import IS_DELETE, API_TOKEN, API_URL, CODE_TOOL_URL
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
                    'text': f"{item.type_name}({item.text})",
                    'is_selected': item.is_selected
                }
                for item in data_list
            ]
            return DetailResponse(data=list(resdata))
        except Exception as e:
            logger.error("cn绘图类型获取数据异常:%s" % (str(e)))
            return ErrorResponse(code=2004)


class SdTextControlNetDraught(APIView):
    """
    SD文字内嵌图
    """
    authentication_classes = []

    def text_to_image(text, image_width, image_height):
        # 创建一个空白图片，模式为RGBA，背景颜色为黑色
        image = Image.new(
            'RGBA', (int(image_width), int(image_height)), (0, 0, 0))
        draw = ImageDraw.Draw(image)

        current_path = os.path.dirname(__file__)
        font_file = os.path.join(current_path, "SIMHEI.TTF")

        # 根据文本和图片宽度动态调整字体大小
        font_size = int(image_width) // max(len(line)
                                            for line in text.split('\n'))
        font = ImageFont.truetype(font_file, font_size)

        text_lines = [line.strip('\r') for line in text.split('\n')]
        y_text = (image.height - sum(draw.textsize(line, font=font)
                  [1] for line in text_lines)) / 2

        for i, line in enumerate(text_lines):
            # 计算文字长度并调整位置
            width, height = draw.textsize(line, font=font, stroke_width=2)
            text_x = (image.width - width) / 2
            text_y = y_text

            # 绘制背景色的矩形
            draw.rectangle(
                (0, text_y, image.width, text_y + height), fill=(0, 0, 0))

            # 在画布上写字，起始位置，字体颜色为白色，边框颜色同背景色
            draw.text((text_x, text_y), line, font=font, fill=(
                255, 255, 255), stroke_width=2, stroke_fill="black")

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
        if not file.content_type.startswith('image/'):
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
        data_list = TSdControlNet.objects.filter(type=parameter_dic.get('controlNetType')).values(
            'guidance_start', 'guidance_end', 'model', 'module', 'weight')
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
            payload['alwayson_scripts']['controlnet']['args'][0]["input_image"] = SdTextControlNetDraught.inmemoryuploadedfile_to_base64(
                images)
        elif entryText:
            payload['alwayson_scripts']['controlnet']['args'][0]["input_image"] = SdTextControlNetDraught.text_to_image(
                entryText, parameter_dic.get('width'), parameter_dic.get('height'))

        try:
            response = requests.post(url, headers=headers, json=payload)

            # 获取图片base64并转换成png
            img_base64 = response.json()['images']

            # 声明两个变量来保存垫图和实图的URL
            original_url, generate_url = None, None

            for index, image in enumerate(img_base64):
                file_path, generate_name = SdTextControlNetDraught.process_image(
                    image)

                try:
                    # 上传到阿里云OSS
                    image_url = aliyunossuploads(
                        "painting", file_path, generate_name)
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
            drawing_instance = Drawing.objects.create(user_id=payloads, prompt=parameter_dic.get(
                'prompt'), original_url=original_url, generate_url=generate_url, is_public=0, created_time=now_time, update_time=now_time, env=parameter_dic.get('env'))

            # 构建返回字段
            resdata = {
                'drawingId': drawing_instance.drawing_id,
                'location': 0
            }

            return DetailResponse(data=resdata)
        except (requests.exceptions.RequestException, KeyError) as e:
            logger.error("sd绘图数据异常:%s" % (str(e)))
            return ErrorResponse(code=2004)


class SdImageControlNetDraught(APIView):
    """
    SD图片内嵌图
    """
    authentication_classes = []

    def decode_qr_code(images):
        """
        二维码解码
        """
        url = API_URL + '/api/qrdecode'

        headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer %s' % API_TOKEN
        }

        payload = {
            'qr_image': 'https://img.2weima.com/qr_template/2021/6/26/8857784941a0f2d2a024044f414c69f9.jpg',
            'qr_base64': 'data:image/jpg;base64,' + images,
            'qr_detype': 'jie2weima',
            'qr_multi': 'one'
        }

        response = requests.post(url, headers=headers, data=payload)

        return response.json()['qr_content']
    
    def rebuild_qr_code(qr_content):
        """
        重绘二维码
        """
        url = CODE_TOOL_URL + 'qrcode?url=' + qr_content

        headers = {
            'Content-Type': 'application/json',
        }

        response = requests.get(url, headers=headers)

        return response.text

    def post(self, request, *args, **kwargs):
        # 获取当前时间
        now_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")

        payloads = UserTokenCheckView.token_check(request)
        if not payloads:
            return ErrorResponse(msg='token校验失败，请不要模拟接口使用')

        parameter_dic = get_parameter_dic(request)

        # 根据type类型获取CN模型数据
        data_list = TSdControlNet.objects.filter(type=parameter_dic.get('controlNetType')).values(
            'guidance_start', 'guidance_end', 'model', 'module', 'weight')
        # 临时数据，后续删除
        temp_list = TSdControlNet.objects.filter(type=0).values(
            'guidance_start', 'guidance_end', 'model', 'module', 'weight')
        for temp in temp_list:
            temp_guidance_start =  round(float(temp['guidance_start']), 2)
            temp_guidance_end = round(float(temp['guidance_end']), 2)
            temp_model = temp['model']
            temp_module = temp['module']
            temp_weight = round(float(temp['weight']), 2)
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
                            "enabled": True,
                            "guidance_end": temp_guidance_end,
                            "guidance_start": temp_guidance_start,
                            "model": temp_model,
                            "module": temp_module,
                            "pixel_perfect": True,
                            "weight": temp_weight,
                        },
                        {
                            "enabled": True,
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

        # 获取用户传入的二维码
        images = SdTextControlNetDraught.inmemoryuploadedfile_to_base64(
                parameter_dic.get('images', None))

        try:
            # 先进行解码
            qr_content = SdImageControlNetDraught.decode_qr_code(images)

            # 将解码的url传入重绘api
            image_base64 = SdImageControlNetDraught.rebuild_qr_code(qr_content).split(',')[1]

            payload['alwayson_scripts']['controlnet']['args'][0]["input_image"] = image_base64
            payload['alwayson_scripts']['controlnet']['args'][1]["input_image"] = image_base64

            response = requests.post(url, headers=headers, json=payload)
            
            # 获取图片base64并转换成png
            img_base64 = response.json()['images']
            
            for index, image in enumerate(img_base64):
                file_path, generate_name = SdTextControlNetDraught.process_image(
                    image)
                try:
                    # 上传到阿里云OSS
                    image_url = aliyunossuploads(
                        "painting", file_path, generate_name)
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
            drawing_instance = Drawing.objects.create(user_id=payloads, prompt=parameter_dic.get(
                'prompt'), original_url=original_url, generate_url=generate_url, is_public=0, created_time=now_time, update_time=now_time, env=parameter_dic.get('env'))

            # 构建返回字段
            resdata = {
                'drawingId': drawing_instance.drawing_id,
                'location': 0
            }

            return DetailResponse(data=resdata)

        except Exception as e:
            traceback_info = traceback.format_exc()
            logger.error(traceback_info)
            logger.error("二维码生成失败，原因为：%s" % (str(e)))
            return ErrorResponse(code=2004)
