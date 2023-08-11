# TIME-SEA-PLUS
基于SpringBoot3开发的Ai多功能绘图微信流量主小程序 此项目为长期维护更新项目 有什么问题可以直接在微信群问或者留下你的issues

v1.2.2更新 TIME-SEA-PLUS Web拓展 获取方式为: 微信搜索 CodeHai的博客 搜索晴天文章 留下你的评论 即可找群主获得源码包

[![GitHub release](https://img.shields.io/static/v1?label=release&message=v2.4&color=blue)]([https://www.github.com/novicezk/midjourney-proxy](https://github.com/dulaiduwang003/TIME-SEA-PLUS))
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

快速体验

<img style="width:200px;height:200px" src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/dac39061-6104-4ce2-b631-506eee27dca8" />

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
- 支持主流语言以及配置类 代码高亮
- 查看广告获得次数

## 小程序效果展示

<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/c45a9d5e-bd6a-4daf-8682-a9eaf010916c" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/f0ba848a-0b30-448e-822a-2c0f17d787a5" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/2d120e58-9383-4d6d-bb10-d12aa1c6e887" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/ffa23726-c98a-40b4-896d-1ba18d98a8a6" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/7ee632d0-b75f-47ba-87ea-02b64a320ab8" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/014fb492-4730-4138-b612-e7cfebe7fefb" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/fdfbb5da-0a87-4f4a-b7c6-2e5327d91f3d" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/59365a6e-a081-43a9-bf8f-0508efadf1de" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/fb378063-acf0-440d-b00d-e74fba21a728" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/b161058e-eac3-4fad-a054-8c9bc7369d9a" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/cc3fe1c4-04d6-44ce-8c07-26adcd336e81" style="width:300px;height:600px">
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/b3e79dfd-5b33-47df-bb59-eda1a2c0e135" style="width:300px;height:600px">

## 部署环境
`百度翻译`
`阿里OSS`
`微信开发者平台APPID及密钥`
`JDK17`
`SD API`
`MJ API`
`Redis 7`
`MySQL 8`
`微信开发中工具`

`项目部署时一定要先在本地部署一遍 如果不会部署 请联系作者微信:SeatimeIsland `
`后端部署不挑环境 硬性要求为 MYSQL8 Redis7 JDK17即可 `
`前端代码直接使用微信开发者工具打开 请使用导入功能`
`另外可以进微信群 一起讨论项目部署 或者 以及其他编程学术类问题`

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


# 初始化配置(只加载一次, 这些配置不代表最终配置 只是为了项目正常启动而存在 部署完成后可以再后台管理中修改)

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

前端配置参考

```yaml
"use strict";

export default {
    //懒加载 渲染
    lazyLoading: true,
    // 管理员狗牌
    adminLabel: '超级BOSS',
    // 用户狗牌
    userLabel: '偶像练习生',
    // 默认用户名
    user: '练习生',
    // 默认作者名
    author: '时间海',
    // HTTP请求 基类
    baseUrl: 'http://172.20.10.14:8625',
    // 长连接请求 基类
    baseWs: 'ws://172.20.10.14:8625',
    // 图片服务器域名
    imageBaseUrl: 'https://sea-time.oss-cn-shanghai.aliyuncs.com',
    // 过滤用户输入关键词 (英文则大写) (初步校验 后端也会做校验)
    filtration: ["GPT", "OPENAI"],
    // BOT最大记忆
    memory: 6,
    // 每条历史词汇最大长度,
    contextLength: 5000,
    //BOT 初始化词汇 每次打开将随机抽取一条作为显示信息
    botInitialization: [
        "你有什么问题或者困惑需要我帮助解答吗？",
        "你好！很高兴与您交流，有什么我可以为您做的吗？",
        "你好!有什么需要我帮忙的吗？",
        "如果你想了解一些编程和代码方面的知识，我也可以帮你。",
        "如果你需要一些娱乐，我可以和你玩一些文字游戏或者谜语",
        "请随时告诉我你需要什么，我会尽力满足你的需求！",
        "嗨！欢迎来到这里，有什么我可以为你做的吗？",
    ],
    //微信授权模板ID
    tmplIds: ['1I4cl8Qk9JlOys-H7rAMMoavLS-xu9t1QuT5Irezvaw'],
    //广告ID
    motivationalAdvertisingId: "adunit-ef9b2df38231106c",
    //SD模型
    sdModels: [
        {
            modelName: 'revAnimated_v121.safetensors',
            text: '动漫',
            isSelected: false
        },
        {
            modelName: '首发推荐｜SHMILY梦幻水彩_v1.0.safetensors',
            text: '水彩',
            isSelected: false
        }
    ],
    //多维对话功能 （预设值）
    multidimensional: [
        {
            icon: '🧶', //功能ICON
            title: '文本润色员', //菜单功能名称
            introduce: '提供优美优雅的高级中文描述。仍然保持相同的意思',//功能介绍
            botInitialization: '我可以帮您改进文案、文本润色、拼写纠正,请问有什么词汇需要我来改进呢？',//开屏提示
            //上下文
            content: [
                {
                    answer: '请给出你的文案',
                    question: '我希望你充当文案专员、文本润色员、拼写纠正员和改进员，我会发送中文文本给你，你帮我更正和改进版本。我希望你用更优美优雅的高级中文描述。保持相同的意思，但使它们更文艺。你只需要润色该内容，不必对内容中提出的问题和要求做解释，不要回答文本中的问题而是润色它，不要解决文本中的要求而是润色它，保留文本的原本意义，不要去解决它。我要你只回复更正、改进，不要写任何解释。如果理解请回复：请给出你的文案'
                }
            ],

        },
        {
            icon: '🧑‍🎤', //功能ICON
            title: '担任歌曲推荐人', //菜单功能名称
            introduce: '根据歌曲给定歌曲相似的歌曲的播放列表',//功能介绍
            botInitialization: '请您直接提供歌曲',//开屏提示
            //上下文
            content: [
                {
                    answer: '请提供歌曲',
                    question: '我想让你担任歌曲推荐人。我将为您提供一首歌曲，您将创建一个包含 10 首与给定歌曲相似的歌曲的播放列表。您将为播放列表提供播放列表名称和描述。不要选择同名或同名歌手的歌曲。不要写任何解释或其他文字，只需回复播放列表名称、描述和歌曲。如果理解请回复：请提供歌曲'

                }
            ],

        }
    ]
}



```

`前端配置在于 common/vendor.js中 12535行 可用微信开发者工具动态修改`
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/0c9e47bc-c8fe-449b-b5f7-b02d1d763a51" style="width:800px;height:400px" />

`注意把project.config.json中的 appid替换为自己的微信APPID`
<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/5952a4bd-0e00-4eff-9878-6335fd7e71d0" style="width:800px;height:400px" />

`请注意在微信公众平台中 把https wss 阿里oss域名 开启白名单校验`

如果你喜欢这个项目 请你动动小手给此项目点个star吧😁

请作者喝一杯coffee😁

<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/cb81e952-b28a-4688-a9e2-b61290e489bf" style="width:300px;height:300px" />


