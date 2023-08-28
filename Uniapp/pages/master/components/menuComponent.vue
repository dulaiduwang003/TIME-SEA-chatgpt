<template>
  <view>
    <!-- 底部导航栏样式-->
    <view class="tab">
      <view class="tab-line">
        <view class="tab-line-item">
          <canvas id="lottie_home" type="2d" class="canvas" @click="handleMenu(0)"/>
        </view>
        <view class="midline">
          <view class="tab-center-view"></view>
        </view>
        <view class="tab-line-item">
          <canvas id="lottie_personal" type="2d" class="canvas" @click="handleMenu(1)"/>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import lottie from 'lottie-miniprogram';

let ani = null;
export default {
  created() {
    // 渲染 lottie动画
    this.renderLottie("#lottie_home", "Windy.json")
    this.renderLottie("#lottie_personal", "Tornado.json")
  },
  methods: {
    /**
     * 切换菜单
     * @param index
     */
    handleMenu: function (index) {
      this.$parent.swiperIndex = index;
    },
    /**
     * 渲染 数据
     * @param id
     * @param path
     */
    renderLottie: function (id, path) {
      this.createSelectorQuery()
          .select(id)
          .node(res => {
            const canvas = res.node;
            const context = canvas.getContext('2d');
            canvas.width = 300;
            canvas.height = 300;
            lottie.setup(canvas);
            ani = lottie.loadAnimation({
              loop: true,
              autoplay: true,
              animationData: require("@/static/json/" + path),
              rendererSettings: {
                context
              },
            });
          }).exec();
    }
  }
};
</script>

<style>
.tab {
  z-index: 10;
  position: fixed;
  bottom: 0;
  margin-left: 200rpx
}

.tab-line {
  background-color: rgb(16, 20, 40);
  width: 350rpx;
  height: 100rpx;
  margin-bottom: 20%;

  border-radius: 60rpx;
  box-shadow: 2rpx 2rpx 4rpx 3rpx rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.tab-line-item {
  padding-left: 12%;
  padding-top: 2%;
}

.canvas {
  width: 90rpx;
  height: 90rpx
}

.midline {
  padding-left: 13%;
  padding-top: 2%;
}

.tab-center-view {
  background-color: rgb(206, 206, 206);
  width: 1px;
  height: 50rpx;
}

</style>
