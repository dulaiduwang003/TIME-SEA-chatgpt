<template>
  <view class="container">
    <view class="model">
      <view class="btn_model slide-animation" v-for="(item,index) in layout" :key="index"
            @click="toFunction(item.path)"
            v-if="type==='ADMIN'||item.type=== type">
        <view class="btn_icon">{{ item.icon }}</view>
        <view class="btn_title">{{ item.title }}</view>
        <view class="btn_introduce">{{ item.introduce }}</view>
      </view>
      <view class="btn_model slide-animation" @click="logout">
        <view class="btn_icon">📲</view>
        <view class="btn_title">退出登录</view>
        <view class="btn_introduce">退出登录状态</view>
      </view>
      <view class="btn_model slide-animation" @click="toAbout">
        <view class="btn_icon">🎉</view>
        <view class="btn_title">关于</view>
        <view class="btn_introduce">关于本小程序</view>
      </view>
    </view>
  </view>
</template>

<script>
import layout from "@/static/data/layout";
import {getUser, removeToken, removeUser} from "@/utils/utils";
import {wechatLoginOut} from "@/api/auth";

export default {
  computed: {
    layout() {
      return layout.menu
    }
  },
  created() {
    let user = getUser();

    if (user != null) {
      this.type = user.type
    }
  },

  data() {
    return {
      type: 'USER',
    };
  },
  methods: {
    /**
     * 跳转关于页面
     */
    toAbout:function () {
      uni.navigateTo({
        url:'/pages/layout/view/aboutView'
      })
    },

    /**
     * 退出登录
     */
    logout: async function () {
      uni.showModal({
        title: '提示',
        content: '确定要退出吗?',
        success: async function (res) {
          if (res.confirm) {
            try {
              let logout = await wechatLoginOut();
              removeUser()
              removeToken()
              uni.reLaunch({
                url: '/pages/master/master?swiperIndex=1'
              })
            }catch (e) {

            }
          }
        }
      });
    },

    /**
     * 跳转指定功能
     */
    toFunction: async function (path) {
      if (path) {
        uni.navigateTo({
          url: path
        })
      } else {
        try {
          uni.showLoading({
            title: '正在退出 ing~',
            mask: true
          });
          await wechatLoginOut();
          removeToken();
          removeUser();
          uni.hideLoading()
          uni.reLaunch({
            url: '/pages/master/master?currentPage=1'
          })
        } catch (e) {
          console.log(e)
          uni.showToast({
            title: '退出登录失败~',
            icon: 'none',
            duration: 4000
          })
        }
      }

    },
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  padding: 20rpx;
  justify-content: center;
}

.slide-animation {
  animation: slideEase 0.5s ease-in-out forwards;
}

@keyframes slideEase {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
}

.model {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.btn_model {
  font-size: 28rpx;
  color: #858585;
  background-color: #1e1e1e;
  width: 287rpx;
  height: 220rpx;
  border-radius: 20rpx;
  margin: 15rpx;
  padding: 20rpx;
  text-align: center
}

.btn_icon {
  font-size: 80rpx;
  padding-bottom: 30rpx
}

.btn_title {
  font-weight: 550
}

.btn_introduce {
  font-size: 23rpx;
  color: #606060
}

</style>
