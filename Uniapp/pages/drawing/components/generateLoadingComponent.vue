<template>
  <view>
    <uni-popup ref="loading">
      <view class="loading-container">
        <view>
          <view class="loading-model">
            <view class="loader"></view>
          </view>
          <view class="loading_title">正在绘制中</view>
          <view class="prompt">
            <view>离开当前页面绘画进程不会收到任何影响</view>
            <view style="padding-top: 10rpx">当前排在 {{ location + 1 }}位</view>
            <view class="queue">也可以持续等待</view>
          </view>
          <view class="btn_back">
            <button class="back" @click="this.$parent.previousPage">返回</button>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>

export default {
  props: {
    location: {
      type: Number,
      default: () => {
      }
    }
  },
  data() {
    return {};
  }, methods: {
    /**
     * 显示遮罩
     */
    openShow: function () {
      this.$refs.loading.open('center');
    },
    /**
     * 关闭遮罩层
     */
    closeShow: function () {
      this.$refs.loading.close()
    }
  }
}
</script>

<style lang="scss">
.back {
  background-color: rgb(138, 117, 255);
  color: white;
  width: 500rpx;
  font-size: 30rpx
}

.loader {
  width: 100rpx;
  height: 100rpx;
  position: relative;
  animation: preloader_custom 3s infinite ease-in-out;
}

.loading_title {
  color: white;
  padding-top: 100rpx;
  text-align: center
}

.prompt {
  color: #797979;
  font-size: 24rpx;
  text-align: center;
  padding-top: 30rpx
}

.queue {
  padding-top: 10rpx;
  color: #a8a6ad;
}

.btn_back {
  padding: 20rpx 300rpx;
  margin-top: 30rpx
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loading-container {
  background-color: rgb(16, 16, 16);
  width: 730rpx;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
}

.loader:before {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #c2a5ff;
  animation: preloader_custom_before 1.5s infinite ease-in-out;
}

.loader:after {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #f15757;
  left: 22rpx;
  animation: preloader_custom_after 1.5s infinite ease-in-out;
}

@keyframes preloader_custom {
  0% {
    transform: translateX(0rpx) rotate(0deg);
  }
  50% {
    transform: translateX(50rpx) scale(1.2) rotate(260deg);
    background: #b16ef1;
    border-radius: 0rpx;
  }
  100% {
    transform: translateX(0rpx) rotate(0deg);
  }
}

@keyframes preloader_custom_before {
  0% {
    transform: translateX(0rpx);
  }
  50% {
    transform: translateX(-50rpx) scale(1.2) rotate(-260deg);
    background: #6ea3d2;
    border-radius: 0rpx;
  }
  100% {
    transform: translateX(0rpx);
  }
}

.loading-model {
  display: flex;
  align-items: center;
  justify-content: center
}

@keyframes preloader_custom_after {
  0% {
    transform: translateX(0rpx);
  }
  50% {
    transform: translateX(-50rpx) scale(1.2) rotate(-260deg);
    background: #6ea3d2;
    border-radius: 0rpx;
  }
  100% {
    transform: translateX(0rpx);
  }
}

</style>
