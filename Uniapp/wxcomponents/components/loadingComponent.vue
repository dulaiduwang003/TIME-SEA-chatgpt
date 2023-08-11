<template>
  <view>
    <uni-popup ref="loading" :mask-click="false">
      <view class="loading-container" :style="'background-color: rgba(16, 16, 16, ' + degree + ');'">
        <view>
          <view class="loading-model">
            <view class="loader"></view>
          </view>
          <view class="introduce-mode" v-if="msg">
            {{ msg }}
          </view>
        </view>
      </view>
    </uni-popup>
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
    degree: {
      type: Number,
      default: () => {
      }
    }
  },
  methods: {
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
.loading-container {
  width: 750rpx;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
}
.loader {
  width: 88rpx;
  height: 88rpx;
  position: relative;
}



.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader:before {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #c2a5ff;
  animation: preloader_4_before 1.5s infinite ease-in-out;
}

.loader:after {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #f15757;
  left: 22rpx;
  animation: preloader_4_after 1.5s infinite ease-in-out;
}

@keyframes preloader_4_before {
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

@keyframes preloader_4_after {
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

.introduce-mode {
  padding-top: 30rpx;
  font-size: 30rpx;
  color: #8d8d8d
}

</style>
