<template>
  <view class="empty-container" :style="{'height': height + 'vh'}">
    <view>
      <image src="/static/assets/disconnect.svg" class="empty-image"/>
      <view class="empty-title">似乎与服务器断开了连接</view>
      <button class="connect-btn" @click="reconnect">{{ msg }}</button>
    </view>
  </view>
</template>

<script>
export default {
  props: {

    height: {
      type: Number,
      default: () => {
      }
    }
  },
  data() {
    return {
      msg: '重新连接'
    };
  },
  methods: {
    /**
     * 重新连接
     */
    reconnect: async function () {
      this.msg = '正在尝试连接'
      await this.$parent.loadingPersonal();
      setTimeout(()=>{
        this.msg = '重新连接'
      },500)
    }
  }
}
</script>

<style lang="scss">
.empty-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeIn 0.7s ease-in-out forwards;
}

.connect-btn {
  font-size: 25rpx;
  background-color: #1d1d1d;
  color: #828282
}

.empty-image {
  width: 120rpx;
  height: 120rpx
}

.empty-title {
  padding-top: 80rpx;
  padding-bottom: 50rpx;
  color: #787878;
  font-size: 28rpx;
}

</style>
