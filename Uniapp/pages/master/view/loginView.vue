<template>
  <view class="container">
    <view class="login-image-box">
      <image src="@/static/assets/loginHead.svg"
             mode="widthFix"></image>
    </view>
    <div class="welcome-words-container">
      <view class="first-line">
        TRY SUPER AI
      </view>
      <view class="middle-line"></view>
      <view class="second-line">
        welcome to super
      </view>
      <view class="login-btn-container">
        <van-button type="primary" size="large" color="rgb(16,20,40)" round @click="handleLogin" loading-text="正在验证身份..." :loading="btnLoading">
          微信授权登录
        </van-button>
      </view>
    </div>
  </view>
</template>

<script>
import {wechatLogin} from "@/api/auth";
import {setToken} from "@/utils/utils";

export default {
  data() {
    return {
      //是否显示按钮加载状态
      btnLoading: false
    };
  },
  methods: {
    //登录
    handleLogin: function () {
      const _this = this
      //手机触碰震动
      uni.vibrateShort()
      _this.btnLoading = true
      uni.login({
        async success(res) {
          try {
            let promise = await wechatLogin({
              code: res.code
            });
            //设置TOKEN
            setToken(promise)
            //更改登录状态
            _this.$parent.isLogin = true
            setTimeout(() => {
              _this.$parent.loadingPersonal()
            },10)

          } catch (e) {
            console.log(e)
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

<style lang="scss" scoped>
.container {
  margin-top: 30vh;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.login-image-box {
  margin-left: 270rpx;
  margin-bottom: 50rpx;
  border-radius: 100%;
  overflow: hidden;
  width: 200rpx;
  height: 200rpx;
}

.login-image-box image {
  width: 100%;
  height: 100%;
}

.welcome-words-container {
  text-align: left;
}

.first-line {
  padding-bottom: 20rpx;
  color: white;
  font-size: 50rpx;
  font-weight: 600;
  padding-left: 60rpx;
  padding-top: 100rpx;
}

.middle-line {
  margin-left: 60rpx;
  background: linear-gradient(to right, rgb(247, 147, 79), black);
  width: 200rpx;
  height: 10rpx;
}

.second-line {
  padding-left: 60rpx;
  color: rgb(255, 255, 255);
  padding-bottom: 60rpx;
  font-size: 25rpx;
  padding-top: 20rpx
}

.login-btn-container {
  padding: 0 60rpx;
}

</style>
