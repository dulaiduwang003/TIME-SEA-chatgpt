# TIME-SEA-PLUS
基于SpringBoot3开发的GPT绘图流量主小程序 

[![GitHub release](https://img.shields.io/static/v1?label=release&message=v2.4&color=blue)]([https://www.github.com/novicezk/midjourney-proxy](https://github.com/dulaiduwang003/TIME-SEA-PLUS))
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

主要功能以及特性

- GPT流对话(支持3.5 4.0)
- 对话功能收藏功能 以及 收藏对话回溯场景
- 支持GPT自定义敏感词拦截 以及 微信铭感词拦截
- SD MJ 文生图 图生图
- 支持用户自定义头像昵称
- 支持自定义GPT预设词功能版块(无限制定义)
- 项目工件模块化
- Ai币兑换码 (也可通过观看广告获得)
- 创意广场(允许将优秀个人作品展示至鉴赏 所有用户可视)
- 支持GPT对话暂停输出以及继续输出
- 内置后台管理 (用户管理 绘图管理 服务器管理 兑换码管理)
- 接入百度翻译API
- 绘图类API 列队处理
- 微信作品制作通知
- 数据懒异步处理


## 小程序效果展示

<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/7d95d76c-effa-4d75-8196-2fee39930f1b" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/281c7a04-89cd-4a23-be0b-ae601d973750" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/b474878b-90d6-4496-8157-90a00a319b11" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/13132b2e-cf57-4112-92f0-ec3e6240fad7" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/ab596339-1931-4955-b99a-e976486eed7d" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/5f23b25b-29ff-42b3-a525-c704cd5310b1" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/c6a7d27f-7e73-4f91-8276-a23e0a600b48" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/a513af6a-b39a-4c18-8462-eaa3c0fb54c7" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/1e560fc8-0af5-4bd5-93a2-f97fe72ea004" style="width:300px;height:600px">

## 部署环境
`百度翻译`
`阿里OSS`
`微信开发者平台APPID及密钥`
`JDK17`
`SD API`
`MJ API`
`Redis 7`
`MySQL 8`


后端yml配置参考

```yaml

server:
  #   SSL证书
  ssl:
    key-store: classpath:anchwngb.cn.pfx
    key-store-password: g15xrx4u57
    key-store-type: PKCS12

spring:
  data:
    # redis配置
    redis:
      database: 1
      host: 127.0.0.1
      port: 6379
  # mysql配置
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/super_bot?useUnicode=true&serverTimezone=Asia/Shanghai&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&autoReconnect=true&allowMultiQueries=true&useSSL=true
    username: root
    password: 123


# 管理员 多个使用，隔开
admin: ooskO5McQ18QR1J4-DMJp2M67F2o,

#是否开启文本拦截 (防止GPT乱说话) ，触发敏感词时中断回复并提示
isSensitive: true

#过滤哪些敏感字(需开启文本拦截才生效)
sensitive: "(CHAT|GPT|OPENAI)"

# 是否开启GPT-4 如果关闭 则前端的选择模型将无效 最终都会指向GPT-3.5 (如果当前KEY不支持GPT-4 请不要开启 否则用户选择GPT-4则会报错)
enable-gpt: false

# 微信
we-chat:
  # APPID
  appId: 'wx28a155bea9da7e'
  # 密钥
  secret: 'c82fb9368ecf76dbbdd8affAbae'
  # 通知模板
  template: '1I4cl8Qk9JlOysMoavLS-xu9t1QuT5Irezvaw'

# 百度翻译
baidu-translation:
  # 百度翻译Appid
  appid: '202209290013618'
  # 百度翻译密码要
  secret: '2WibA9sYnubh1IDPTB'

# 阿里OSS
ali-oss:
  endpoint: 'oss-cn-shanghai.aliyuncs.com'
  accessKey: 'LTALMX9wK5coPBoonh48n'
  secretKey: 'm4nK6wqqH27o61iWoZUMUt'
  bucketName: 'sea'
  domain: 'https://sea.oss-cn-shanghai.aliyuncs.com'


# 初始化配置(只加载一次)

config:
  # OPEN AI API
  openAiUrl: 'https://chatgpt1.nextweb.fun/api/proxy/v1/chat/completions'
  # SD API
  sdUrl: 'http://127.0.0.1:7860'
  # MJ API
  mjUrl: 'http://127.0.0.1:7860'
  # OpenKey
  openKey: 'sk-nNsDRBTCnzoY86ncT3BlbkFJRykdEucYaNX1aek01FAS'
  # 用户第一次登录奖励次数
  incentiveFrequency: 10
  # 观看视频奖励次数
  videoFrequency: 1
  # SD图生图消耗次数
  sdImage2Frequency: 5
  # SD文生图消耗次数
  sdTextImageFrequency: 5
  # MJ文生图消耗次数
  mjTextImageFrequency: 5
  # MJ图生图消耗次数
  mjImage2Frequency: 5
  #GPT消耗次数
  gptFrequency: 1
  # 观看视频奖励次数
  signInFrequency: 1


```

