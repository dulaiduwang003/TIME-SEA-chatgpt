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
      <input type="text" maxlength="8" placeholder="兑换码" v-model="code"/>
    </view>
    <view class="button-style">
      <van-button type="primary" block color="#8b5fde" loading-type="spinner" loading-text="正在检查兑换码"
                  @click="submitExchangeCode"
                  :loading="isLoading">兑换
      </van-button>
    </view>
    <view class="fixed">
      有问题请咨询微信小程序客服
    </view>
  </view>
</template>

<script>

import {useExchangeCode} from "@/api/inspirit";

export default {

  data() {
    return {
      code: '',
      isLoading: false
    };
  },
  methods: {
    /**
     * 提交代码
     * @returns {Promise<void>}
     */
    submitExchangeCode: async function () {
      if (this.code.length !== 8) {
        uni.showToast({
          title: '兑换码格式不正确',
          icon: 'none',
          duration: 2000
        });
        return
      }
      try {
        this.isLoading = true

        let promise = await useExchangeCode(this.code.toLocaleUpperCase());
        uni.showToast({
          title: '兑换成功',
          icon: 'none',
          duration: 2000
        });
        uni.$emit('master_userInfo');
      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        });
      } finally {
        this.isLoading = false
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
