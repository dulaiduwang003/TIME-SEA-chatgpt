"use strict";

export default {
    menu: [
        {
            icon: '🤳',
            title: '用户管理',
            path: '/pages/layout/view/userPanelView',
            type: 'ADMIN',
            introduce: '用户操作管理'
        },
        {
            icon: '🥘',
            title: '兑换管理',
            path: '/pages/layout/view/codePanelView',
            type: 'ADMIN',
            introduce: '生成 删除兑换码'
        },{
            icon: '🖥️',
            title: '服务器配置',
            path: '/pages/layout/view/serverPanelView',
            type: 'ADMIN',
            introduce: '管理我的服务器'
        },{
            icon: '🏞️️',
            title: '我的作品',
            path: '/pages/layout/view/userDrawingView',
            type: 'USER',
            introduce: '管理我的作品'
        },
        {
            icon: '🧁',
            title: '绘图管理',
            path: '/pages/layout/view/drawingPanelView',
            type: 'ADMIN',
            introduce: '管理绘图内容'
        },
        {
            icon: '🐦',
            title: '兑换中心',
            path: '/pages/layout/view/exchangeCodeView',
            type: 'USER',
            introduce: '兑换次数'
        },
        {
            icon: '🥩',
            title: '打赏名单',
            path: '/pages/layout/view/ordersPanelView',
            type: 'ADMIN',
            introduce: '赞赏数据名单'
        },
        {
            icon: '🛰️',
            title: '卡片管理',
            path: '/pages/layout/view/productPanelView',
            type: 'ADMIN',
            introduce: '赞赏数据名单'
        },
        {
            icon: '📢',
            title: '发布公告',
            path: '/pages/layout/view/announcementPanelView',
            type: 'ADMIN',
            introduce: '发布小程序公告'
        },
        {
            icon: '🌟',
            title: '收藏笔记',
            path: '/pages/layout/view/starView',
            type: 'USER',
            introduce: '我的收藏日记'
        },
        {
            icon: '🍭',
            title: '绑定邮箱',
            path: '/pages/layout/view/emailView',
            type: 'USER',
            introduce: '同步账号数据'
        }
    ]
}
