<template>
  <view>
    <view class="icon_container">
      <view>
        <image src="/static/assets/icon.svg"/>
        <view class="icon_txt">
          TRYING BDTH
        </view>
      </view>
    </view>
    <view class="input-code">
      <input type="text" maxlength="-1" placeholder="请输入邮箱" v-model="form.email"/>
    </view>
    <view class="input-code">
      <input type="text" maxlength="-1" placeholder="请输入密码" v-model="form.password"/>
    </view>
    <view class="button-style">
      <van-button type="primary" block color="#8b5fde" loading-type="spinner" loading-text="正在操作"
                  @click="submit"
                  :loading="isLoading">绑定
      </van-button>
    </view>
    <view class="fixed">
      有问题请咨询微信小程序客服
    </view>
  </view>
</template>

<script>

import {wechatBindEmail} from "@/api/user";

export default {

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      isLoading: false
    };
  },
  methods: {
    /**
     * 提交代码
     * @returns {Promise<void>}
     */
    submit: async function () {
      const {email, password} = this.form;
      if (!email) {
        uni.showToast({
          title: '请输入邮箱',
          icon: 'none',
          duration: 2000
        });
        return
      }
      if (!password) {
        uni.showToast({
          title: '请输入密码',
          icon: 'none',
          duration: 2000
        });
        return
      }
      if (!this.isLoading) {
        this.isLoading = true
        try {
          await wechatBindEmail(this.form);
          this.isLoading = false
          uni.showToast({
            title: '绑定成功',
            icon: 'none',
            duration: 2000
          });
        } catch (e) {
          uni.showToast({
            title: e,
            icon: 'none',
            duration: 2000
          });
          this.isLoading = false
        }
      }

    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #000000;

}

image {
  width: 280rpx;
  height: 280rpx;
  margin-left: 20rpx;
}

.icon_container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15vh
}

.icon_txt {
  font-size: 45rpx;
  font-weight: 550;
  color: whitesmoke;

  margin-bottom: 20rpx;
}


.input-code {
  display: flex;
  align-items: center;
  justify-content: center
}

input {
  background-color: #313131;
  color: #929292;
  width: 500rpx;
  border-radius: 10rpx;
  font-size: 32rpx;
  font-weight: 550;
  text-align: center;
  padding: 20rpx;
  margin-top: 40rpx
}

.button-style {
  margin: 0 100rpx;
  margin-top: 50rpx;
  border-radius: 15rpx;
  overflow-x: hidden
}

.fixed {
  position: fixed;
  bottom: 80rpx;
  color: #747474;
  font-size: 24rpx;
  left: 220rpx
}

</style>
