"use strict";

//原生功能
export default {
    menu: [
        {
            icon: '/static/assets/super.svg',
            title: 'Super',
            path: '/pages/dialogue/gptDialogueView',
            introduce: '根据您的需求提供个性化的建议和回答'
        },
        {
            icon: '/static/assets/code.svg',
            title: 'SD Visualize',
            path: '/pages/drawing/sdImage2imageView',
            introduce: '抽象艺术到写实插图,SD图生图满足各种创作需求'
        },
        {
            icon: '/static/assets/drawing.svg',
            title: 'SD Drawing',
            path: '/pages/drawing/sdTextImageView',
            introduce: '根据提示词让SD绘制丰富多彩的插画'
        },
        {
            icon: '/static/assets/bing.svg',
            title: 'New Bing',
            path: '/pages/dialogue/bingDialogueView',
            introduce: '免费使用 无需消耗Ai币(可能回复失败)'
        },
        {
            icon: '/static/assets/claude.svg',
            title: 'Claude',
            path: '/pages/dialogue/claudeDialogueView',
            introduce: '免费使用 无需消耗Ai币(可能回复失败)'
        },
        {
            icon: '/static/assets/star.svg',
            title: 'MJ Drawing',
            path: '/pages/drawing/mjTextImageView',
            introduce: '根据提示词让MJ绘制丰富多彩的插画'
        },
        {
            icon: '/static/assets/road.svg',
            title: 'MJ Visualize',
            path: '/pages/drawing/mjImage2imageView',
            introduce: '抽象艺术到写实插图,MJ图生图满足各种创作需求'
        }
    ]
}
