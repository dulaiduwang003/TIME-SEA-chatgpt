<template>
  <view class="flushed" >
    <van-loading/>
    <view>正在努力获取中...</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },

}
</script>

<style lang="scss">
.flushed {

  display: flex;
  justify-content: center;
  align-items: center;
  color: #a2a2a2;
  padding-top: 40rpx;
  padding-bottom: 30rpx
}

.flushed view {
  padding-left: 20rpx;
  font-size: 28rpx
}
</style>
