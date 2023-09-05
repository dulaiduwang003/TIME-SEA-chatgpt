import {createRouter, createWebHashHistory} from 'vue-router'
import {cancelArr} from "@/utils/BSideRequest";

const routes = [{
    path: '/',
    name: 'Index',
    component: () => import('../views/DialogueView.vue'),
    meta: {
        title: '智能问答', // TODO 浏览器标题
        isHeadNavigation: true, // TODO 是否显示tab
        keepAlive: true
    }
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import('../views/Create/CreateView.vue'),
        meta: {
            title: '灵感创作',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: "/personality_view",
        name: "PersonalityView",
        component: () => import('../views/PersonalityView.vue'),
        meta: {
            title: 'PERSONALITY GPT',
            isHeadNavigation: true,
            keepAlive: true
        }
    },
    {
        path: "/create_edit",
        name: "CreateEdit",
        component: () => import('../views/Create/CreateEditView.vue'),
        meta: {
            title: '创作编辑',
            isHeadNavigation: true,
            keepAlive: false
        },
    },
    {
        path: "/create_detail",
        name: "CreateDetail",
        component: () => import('../views/Create/CreateDetailView.vue'),
        meta: {
            title: '创作结果',
            isHeadNavigation: true,
            keepAlive: false
        },
    },
    {
        path: '/purchase',
        name: 'Purchase',
        component: () => import('../views/PurchaseView.vue'),
        meta: {
            title: '购买',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/OrdersView.vue'),
        meta: {
            title: '打赏记录',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () => import('../views/CollectionView.vue'),
        meta: {
            title: '我的收藏',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: "/exchange",
        name: "Exchange",
        component: () => import('../views/ExchangeView.vue'),
        meta: {
            title: '兑换中心',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: "/custom",
        name: "Custom",
        component: () => import('../views/CustomView.vue'),
        meta: {
            title: '自定义对话',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: "/bing_view",
        name: "BingView",
        component: () => import('../views/BingView.vue'),
        meta: {
            title: '必应对话',
            isHeadNavigation: true,
            keepAlive: true
        }
    }, {
        path: "/claude_view",
        name: "ClaudeView",
        component: () => import('../views/ClaudeView.vue'),
        meta: {
            title: 'Claude对话',
            isHeadNavigation: true,
            keepAlive: true
        }
    },

    {
        path: "/preset_character",
        name: "PresetCharacter",
        component: () => import('../views/PresetCharacterView.vue'),
        meta: {
            title: '预设角色',
            isHeadNavigation: true,
            keepAlive: false
        }
    },
    {
        path: "/laboratory",
        name: "Laboratory",
        component: () => import('../views/LaboratoryView.vue'),
        meta: {
            title: '超级实验室',
            isHeadNavigation: true,
            keepAlive: false
        }
    }
    , {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin/AdminView.vue'),
        meta: {
            title: '管理控制台',
            isHeadNavigation: true,
            keepAlive: true
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// TODO 全局前置守卫
router.beforeEach(async (to) => {
    // TODO 页面切换中断所有请求
    cancelArr.forEach((cancel, index) => {
        cancel()
        cancelArr.splice(index, 1)
    })

    // TODO 设置浏览器Title
    document.title = (to.meta.title ? to.meta.title : '') + ' - TIME SEA PLUS'
})

export default router
