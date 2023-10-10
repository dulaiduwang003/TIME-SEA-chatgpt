'''
FilePath: textmoderation.py
Author: yun.huang <1594909346@qq.com>
Date: 2023-08-29 22:08:55
LastEditors: yun.huang <1594909346@qq.com>
LastEditTime: 2023-08-29 22:09:09
Version: 1.0.1
Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
Descripttion: 愿你开心每一天~
'''
import json
import logging

from config import TENCENT_TEXT_SECRETID, TENCENT_TEXT_SECRETKEY, TENCENT_TEXT_REGION, TENCENT_TEXT_BIZTYPE

from tencentcloud.common import credential
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.common.profile.http_profile import HttpProfile
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
from tencentcloud.tms.v20201229 import tms_client, models

logger = logging.getLogger(__name__)

def textmoderation(content, userid, ip):
    """
    实例化一个认证对象，入参需要传入腾讯云账户 SecretId 和 SecretKey，此处还需注意密钥对的保密
    代码泄露可能会导致 SecretId 和 SecretKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议采用更安全的方式来使用密钥，请参见：https://cloud.tencent.com/document/product/1278/85305
    密钥可前往官网控制台 https://console.cloud.tencent.com/cam/capi 进行获取
    """
    try:
        cred = credential.Credential(TENCENT_TEXT_SECRETID, TENCENT_TEXT_SECRETKEY)
        # 实例化一个http选项，可选的，没有特殊需求可以跳过
        httpProfile = HttpProfile()
        httpProfile.endpoint = "tms.tencentcloudapi.com"
        # 实例化一个client选项，可选的，没有特殊需求可以跳过
        clientProfile = ClientProfile()
        clientProfile.httpProfile = httpProfile
        # 实例化要请求产品的client对象,clientProfile是可选的
        client = tms_client.TmsClient(cred, TENCENT_TEXT_REGION, clientProfile)
        # 实例化一个请求对象,每个接口都会对应一个request对象
        req = models.TextModerationRequest()
        params = {
            "Content": content,
            "BizType": TENCENT_TEXT_BIZTYPE,
            "User": {
                "UserId": userid,
                "Nickname": userid,
                "AccountType": 7,
                "Level": 1
            },
            "Device": {
                "IP": ip
            }
        }
        req.from_json_string(json.dumps(params))
        # 返回的resp是一个TextModerationResponse的实例，与请求对象对应
        resq = client.TextModeration(req)
        response = resq.to_json_string()
        logger.info("腾讯云文本校验返回信息:%s" % (response))
        # 输出json格式的字符串回包
        return response
    except TencentCloudSDKException as err:
        logger.error("腾讯云文本校验异常错误:%s" % (err))
        return 'error'
