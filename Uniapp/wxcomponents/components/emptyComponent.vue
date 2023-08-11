<template>
  <view class="empty-container" :style="{'height': height + 'vh'}">
    <view>
      <image src="/static/assets/empty.svg" class="empty-image"/>
      <view class="empty-title">{{ msg ? msg : '这里空空如也' }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: () => {
      }
    },
    height: {
      type: Number,
      default: () => {
      }
    }
  },
  data() {
    return {};
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

.empty-image {
  width: 200rpx;
  height: 200rpx
}

.empty-title {
  padding-top: 20rpx;
  color: white;
  font-size: 25rpx;
}

</style>
