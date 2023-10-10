'''
FilePath: config_ex.py
Author: yun.huang <1594909346@qq.com>
Date: 2023-08-23 17:47:28
LastEditors: yun.huang <1594909346@qq.com>
LastEditTime: 2023-08-23 17:47:43
Version: 1.0.1
Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
Descripttion: 愿你开心每一天~
'''
import os
from super_python.settings import BASE_DIR

# ================================================= #
# ************** mysql数据库 配置  ************** #
# ================================================= #
# 数据库地址
DATABASE_ENGINE = "django.db.backends.mysql"
# 数据库地址
DATABASE_HOST = "super-mysql"
# 数据库端口
DATABASE_PORT = 3306
# 数据库用户名
DATABASE_USER = "root"
# 数据库密码
DATABASE_PASSWORD = "root"
# 数据库名
DATABASE_NAME = "super_bot"
#数据库编码
DATABASE_CHARSET = "utf8mb4"
# 数据库长连接时间（默认为0，单位秒）即每次请求都重新连接,debug模式下该值应该写为0 ，mysql默认长连接超时时间为8小时
# 推荐120（2分钟），使用 None 则是无限的持久连接（不推荐）。
DATABASE_CONN_MAX_AGE = 120

# ================================================= #
# ************** redis 配置  ************** #
# ================================================= #

REDIS_PASSWORD = 'redis'
REDIS_HOST = 'super-redis'
REDIS_PORT = '6379'
REDIS_URL = f'redis://:{REDIS_PASSWORD or ""}@{REDIS_HOST}:{REDIS_PORT}'

# ================================================= #
# ************** 阿里云OSS 配置  ************** #
# ================================================= #
ENDPOINT = "oss-cn-shenzhen.aliyuncs.com"
ACCESSKEY = "123456"
SECREKEY = "123456"
BUCKENAME = "bot"
DOMAIN = "https://bot.oss-cn-shenzhen.aliyuncs.com"
# 是否删除本地图片
IS_DELETE = True

# ================================================= #
# ************** 服务器基本 配置  ************** #
# ================================================= #
# 是否调试模式
DEBUG = True
# 是否演示模式（演示模式只能查看无法保存、编辑、删除、新增）
IS_DEMO = False
# 是否只允许单用户单一地点登录(只有一个人在线上)(默认多地点登录),只针对后台用户生效
IS_SINGLE_TOKEN = True
# 是否关闭前端API访问
ALLOW_FRONTEND = True
# api白名单
FRONTEND_API_LIST = ['/api/app/']
# 前端接口前缀
DOMAIN_HOST = "https://www.baidu.com:8626"
EXEC_LOG_PATH =  os.path.join(BASE_DIR, 'logs','super_python.log')
TEMP_EXEC_PATH =  os.path.join(BASE_DIR, 'logs')
