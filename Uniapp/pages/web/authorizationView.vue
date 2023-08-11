<template>
  <view class="slide-animation">
    <view style="display: flex;justify-content: center;align-items: center;padding-top: 20vh">
      <view>
        <image src="/static/assets/loginHead.svg" style="width: 200rpx;height: 200rpx"/>
      </view>
    </view>
    <view style="display: flex;justify-content: center;align-items: center;padding-bottom: 50rpx;color: whitesmoke">
      <view style="width: 500rpx;text-align: left">
        <view style="font-size: 35rpx;font-weight: 550;margin-top: 120rpx">
          申请获取以下权限
        </view>
        <view style="font-size: 28rpx;color: #5d5d5d;padding-top: 20rpx">
          获取你的公开信息(昵称 头像)
        </view>
        <view style="font-size: 28rpx;color: #5d5d5d;padding-top: 20rpx">
          获取你的登录状态信息以及个人作品
        </view>
      </view>
    </view>
    <view style="padding: 10rpx 100rpx">
      <van-button type="primary" size="large" :loading="btnLoading" color="rgb(16,20,40)" round
                  loading-text="正在进行授权..." @click="handleLogin">
        授权网页登录
      </van-button>
    </view>
  </view>
</template>

<script>
import {wechatAuthQrCodeLogin} from "@/api/auth";

export default {
  onLoad(query) {
    const scene = decodeURIComponent(query.scene);
    if (scene !== "undefined" && scene.length > 4) {
      this.verifyCode = scene
    } else {
      console.log("没有启动参数");
    }
  },
  data() {
    return {
      //请求CODE
      verifyCode: '',
      btnLoading: false
    };
  }, methods: {
    //登录
    handleLogin: function () {
      const _this = this;
      //手机触碰震动
      uni.vibrateShort()
      this.btnLoading = true
      uni.login({
        async success(res) {
          try {
            let promise = await wechatAuthQrCodeLogin({
              code: res.code,
              verifyCode: _this.verifyCode
            });
            uni.showToast({
              icon: 'none',
              duration: 1500,
              title: '授权登录成功'
            });
            setTimeout(()=>{
              uni.reLaunch({
                url: '/pages/master/master?swiperIndex=1'
              })
            },3000)
          } catch (e) {
            uni.showToast({
              icon: 'none',
              duration: 6000,
              title: e
            });
          } finally {
            _this.btnLoading = false
          }
        }
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


page {
  background-color: #000000;
}

</style>
