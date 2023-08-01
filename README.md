# TIME-SEA-PLUS
基于SpringBoot3开发的GPT绘图流量主小程序 此项目为长期维护更新项目 有什么问题可以直接在微信群问或者再次留下你的issues

[![GitHub release](https://img.shields.io/static/v1?label=release&message=v2.4&color=blue)]([https://www.github.com/novicezk/midjourney-proxy](https://github.com/dulaiduwang003/TIME-SEA-PLUS))
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

快速体验

<img style="width:200px;height:200px" src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/238ecc44-cbfb-4317-a18d-8d414d7c1276" />

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

`项目部署时一定要先在本地部署一遍 如果不会部署 请联系作者微信:SeatimeIsland`
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

前端env.js参考

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
            modelName: 'lofi_V2.safetensors',
            text: '真实',
            isSelected: true //默认选中
        },
        {
            modelName: 'deliberate_v2.safetensors',
            text: '写实',
            isSelected: false
        },
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

        },
        {
            icon: '🎑', //功能ICON
            title: '语言检测器', //菜单功能名称
            introduce: '根据输入的文字回复所属语言',//功能介绍
            botInitialization: '您好!请提供内容以便我查找所属语言',//开屏提示
            //上下文
            content: [
                {
                    answer: '请提供文字',
                    question: '我希望你充当语言检测器。我会用任何语言输入一个句子，你会回答我，我写的句子在你是用哪种语言写的。不要写任何解释或其他文字，只需回复语言名称即可。如果理解请回复：请提供文字'

                }
            ],

        }, {
            icon: '🥓', //功能ICON
            title: '担任SVG设计师', //菜单功能名称
            introduce: '根据输入内容创建就SVG图像代码',//功能介绍
            botInitialization: '您好!请直接提供内容以便我为您提供SVG代码',//开屏提示
            //上下文
            content: [
                {
                    answer: '请提供描述',
                    question: '我希望你担任 SVG 设计师。我会要求你创建图像，你会为图像提供 SVG 代码，将代码转换为 base64 数据 url，然后给我一个仅包含引用该数据 url 的降价图像标签的响应。不要将 markdown 放在代码块中。只发送降价，所以没有文本。如果理解请回复：请提供描述'

                }
            ],

        },{
            icon: '👩‍⚕️', //功能ICON
            title: 'Ai医生', //菜单功能名称
            introduce: '虚拟Ai医生',//功能介绍
            botInitialization: '我是虚拟Ai医生,请您直接提供您的症状',//开屏提示
            //上下文
            content: [
                {
                    answer: '请提供症状',
                    question: '我想让你扮演虚拟医生。我会描述我的症状，你会提供诊断和治疗方案。只回复你的诊疗方案，其他不回复。不要写解释。如果理解请回复：请提供症状'

                }
            ],

        },
    ]
}


```

如果你喜欢这个项目 请你动动小手给此项目点个star吧😁

请作者喝一杯coffee😁

<img src="https://github.com/dulaiduwang003/TIME-SEA-PLUS/assets/87460202/cebb4995-6e7a-4907-8002-a3ce6f010ccf" style="width:300px;height:300px"/>


