<template>
  <view class="slide-animation">
    <scroll-view scroll-y class="home-scroll" enable-flex>
      <view class="main_menu">
        <view class="model">
          <!--          原生功能-->
          <view class="btn_model slide-animation" v-for="(item,index) in menu" :key="index"
                @click="toFunctionPage(item.path)">
            <view>
              <image class="btn_icon" :src="item.icon"/>
            </view>
            <view class="btn_title">{{ item.title }}</view>
            <view class="btn_introduce">{{ item.introduce }}</view>
          </view>
          <!--          自定义功能-->
          <view class="btn_model slide-animation" v-for="(item,index) in env.multidimensional" :key="index"
                @click="toCustomPage(item)">
            <view class="icon_size">
              {{ item.icon }}
            </view>
            <view class="btn_title">{{ item.title }}</view>
            <view class="btn_introduce">{{ item.introduce }}</view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>

</template>

<script>

import env from "@/utils/env";


import fun from "@/static/data/fun";
import {getToken, setChat} from "@/utils/utils";


export default {
  computed: {
    menu() {
      return fun.menu
    },
    env() {
      return env
    }
  },
  methods: {
    /**
     * 跳转功能
     */
    toFunctionPage: function (path) {
      if (!getToken()) {
        uni.reLaunch({
          url: '/pages/master/master?swiperIndex=1'
        })
        return
      }
      uni.navigateTo({
        url: path
      })
    },
    /**
     * 跳转预设
     */
    toCustomPage: function (item) {
      if (!getToken()) {
        uni.reLaunch({
          url: '/pages/master/master?swiperIndex=1'
        })
        return
      }
      setChat(item)
      uni.navigateTo({
        url: '/pages/dialogue/customDialogueView'
      })
    }
  }
}
</script>

<style lang="scss">

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


.home-scroll {

  height: 100vh;
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
  height: 240rpx;
  border-radius: 20rpx;
  margin: 15rpx;
  padding: 50rpx 20rpx;
  text-align: center
}

.icon_size {
  font-size: 100rpx;
}

.btn_icon {
  width: 120rpx;
  height: 120rpx;
}

.btn_title {
  font-weight: 550
}

.main_menu {

  display: flex;
  padding: 20rpx;
  padding-top: 80rpx;
  justify-content: center;
  padding-bottom: 120rpx;
}

.btn_introduce {
  font-size: 23rpx;
  padding-top: 20rpx;
  color: #606060
}

</style>
