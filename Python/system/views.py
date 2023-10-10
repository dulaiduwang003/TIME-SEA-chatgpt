# -*- coding: utf-8 -*-
import logging

from django_redis import get_redis_connection

logger = logging.getLogger(__name__)

class UserTokenCheckView:
    """
    通用token解析返回auth
    """
    @staticmethod
    def token_check(request):
        # 获取token
        token = request.headers.get('Authorization')
        # 从第七个字符开始截取到末尾
        if token.startswith('Bearer '):
            token = token[7:]
        if token != "null":
            redis_conn = get_redis_connection('session')
            try:
                # 验证签名是否匹配
                payload = redis_conn.get('token:login:token:%s' % token).decode()
            except Exception as e:
                logger.error("redis连接异常错误:%s" % (str(e)))
                # 如果验证失败，则 token 无效
                raise ValueError('token校验失败，请不要模拟接口使用')

            return payload
