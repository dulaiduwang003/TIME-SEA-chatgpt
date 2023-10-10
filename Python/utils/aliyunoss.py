'''
FilePath: aliyunoss.py
Author: yun.huang <1594909346@qq.com>
Date: 2023-08-29 22:08:55
LastEditors: yun.huang <1594909346@qq.com>
LastEditTime: 2023-08-29 22:09:09
Version: 1.0.1
Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
Descripttion: 愿你开心每一天~
'''
import oss2
import logging

from config import ENDPOINT, ACCESSKEY, SECREKEY, BUCKENAME, DOMAIN

logger = logging.getLogger(__name__)

def aliyunossuploads(project, file, file_name):
    """
    实例化一个认证对象，入参需要传入阿里云账户 SecretId 和 SecretKey，此处还需注意密钥对的保密
    代码泄露可能会导致 SecretId 和 SecretKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议采用更安全的方式来使用密钥
    """
    try:
        # 创建Bucket对象，所有Object相关的接口都可以通过Bucket对象来进行
        bucket = oss2.Bucket(oss2.Auth(ACCESSKEY, SECREKEY), ENDPOINT, BUCKENAME)
        bucket_folder = f'{project}/'
        oss_file_path = bucket_folder + file_name
        # 文件上传至oss
        with open(file, 'rb') as file_data:
            bucket.put_object(oss_file_path, file_data)
        file_url = f"{DOMAIN}/{bucket_folder}{file_name}"
        logger.info("OSS上传成功，路径为:%s" % (file_url))
        return file_url
    except Exception as e:
        logger.error(f"阿里云OSS上传异常错误:{e}")
        return 'error'
