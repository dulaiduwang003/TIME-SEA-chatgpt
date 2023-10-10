<template>
  <view>
    <scroll-view scroll-y class="scroll-view-container">
      <view class="padding-container">
        <view class="center-container">
          <image src="/static/assets/super.svg" class="image-container" />
        </view>
        <view class="text-container">
          欢迎来到 WOO CLOUD
        </view>
        <mp-html class="html-container"
                 :copy-link="true"
                 :tagStyle="md"
                 :container-style="md"
                 :markdown="true"
                 :lazy-load="true"
                 :selectable="true"
                 :content="camouflage.content"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
import camouflage from "@/static/data/camouflage";
import md from "@/static/css/md";
import mpHtml from "@/wxcomponents/mp-html/mp-html.vue";
export default {
  computed: {
    md() {
      return md.tagStyle
    },
    camouflage() {
      return camouflage
    }
  },
  components: {
    mpHtml,
  },
  data() {
    return {};
  }
}
</script>

<style lang="scss">
.scroll-view-container {
  height: 100vh;
}

.padding-container {
  padding: 0 50rpx;
  padding-bottom: 200rpx;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
}

.image-container {
  width: 140rpx;
  height: 140rpx;
}

.text-container {
  padding-bottom: 30rpx;
  text-align: center;
  color: white;
  padding-top: 40rpx;
  font-weight: 550;
  font-size: 35rpx;
}

</style>
