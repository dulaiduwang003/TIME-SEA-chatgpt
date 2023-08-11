<template>
  <view class="container">
    <loading-component ref="loadingRef" :msg="msg" :degree="0.8"/>
    <generate-loading-component ref="generateLoadingRef" :location="form.location"/>
    <scroll-view class="main-scroll" scroll-y>
      <!--  描述词-->
      <view class="title">
        <view>绘图描述词</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.prompt"
                  placeholder-class="placeholder-class" placeholder="请输入绘画描述词汇"/>
      </view>
    </scroll-view>
    <view class="levitation">
      <button @click="submit" class="sub_btn">立即生成</button>
    </view>
  </view>
</template>

<script>

import {isDrawingSucceed, mjConnectivity} from "@/api/drawing";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import GenerateLoadingComponent from "@/pages/drawing/components/generateLoadingComponent.vue";

export default {
  components: {LoadingComponent, GenerateLoadingComponent},
  data() {
    return {
      form: {
        prompt: '',
      },
      msg: '正在检查绘图服务运行状态',
    };
  },
  methods: {
    /**
     * 返回上一页
     */
    previousPage: function () {
      uni.navigateBack()
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    /**
     * 提交
     */
    submit: async function () {
      const {prompt} = this.form;
      if (!prompt) {
        uni.showToast({
          title: '请填写描述',
          icon: 'none',
          duration: 4000

        })
      }
    },
    /**
     * 预览图片
     * @param url
     */
    previewImage(url) {
      uni.previewImage({
        urls: [url]
      });
    },
    /**
     * 检查MJ运行状态 初步验证用户是否有足够次数
     * @returns {Promise<void>}
     */
    examineServer: async function () {
      let loadingRef = this.$refs.loadingRef;
      try {
        loadingRef.openShow()
        let res = await mjConnectivity(0);
        if (!res) {
          this.msg = '请联系小程序管理员开启绘图服务'
          setTimeout(() => {
            uni.navigateBack();
          }, 3000)
          return
        }
        loadingRef.closeShow()
      } catch (e) {
        this.msg = e
        setTimeout(() => {
          uni.navigateBack();
        }, 3000)
      }
    },
    /**
     *  检查绘图是否成功
     */
    isDrawingSucceed: async function (id) {
      const _this = this
      let generateLoadingRef = this.$refs.generateLoadingRef;
      let promise = await isDrawingSucceed(id);
      if (promise) {
        //跳转
        generateLoadingRef.closeShow();
        _this.stopTimer()
        uni.navigateTo({
          url: '/pages/drawing/drawingResultView?drawingId=' + id
        })

      }
    }
  },
  //刷新次数
  onUnload() {
    uni.$emit('master_userInfo')
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  onLoad() {
    this.examineServer()
  }

}
</script>

<style lang="scss">

.container {
  animation: fadeIn 0.5s ease-in-out forwards;
  padding: 20rpx;
  color: white;
}

.main-scroll {
  height: 85vh
}

.title {
  padding-top: 30rpx;
  font-size: 28rpx
}

.model_choose {
  font-size: 25rpx;
  background-color: rgb(138, 117, 255);
  flex-shrink: 0;
  border-radius: 10rpx;
  padding: 5rpx 30rpx;
  margin-right: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center
}

.model_choose_selected {
  font-size: 25rpx;
  background-color: rgb(92, 72, 204);
  flex-shrink: 0;
  border-radius: 10rpx;
  padding: 5rpx 30rpx;
  margin-right: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center
}

.preview_model {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20rpx
}

.placeholder-class {
  font-size: 25rpx;
}

.scroll-x {
  height: 60rpx;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 20rpx;
}

textarea {
  font-size: 25rpx;
  margin-top: 20rpx;
  color: #dadada;
  background-color: #1e1e1e;
  padding: 10rpx;
  width: 695rpx;
  border-radius: 15rpx;
  max-height: 500rpx;
  min-height: 130rpx;
}

.preview_choose {
  background-color: rgb(138, 117, 255);
  color: #ffffff;
  font-size: 24rpx;
  margin: 0 10rpx
}

.preview_deleted {
  background-color: #f43030;
  color: #ffffff;
  font-size: 24rpx;
  margin: 0 10rpx
}

.uploader_subassembly {
  text-align: center;
  font-size: 23rpx;
  color: #868585;
}

.levitation {
  position: fixed;
  z-index: 2;
  left: 120rpx;
  bottom: 5vh;
}

.sub_btn {
  background-color: rgb(138, 117, 255);
  color: white;
  width: 500rpx;
  font-size: 30rpx
}

.uploader_prompt {
  font-size: 26rpx;
  color: #e3e3e3;
  padding-bottom: 30rpx;
  padding-top: 10rpx
}

.uploader_container {
  background-color: #1e1e1e;
  margin-top: 20rpx;
  border-radius: 20rpx;
  height: 400rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center
}

.preview_image {
  width: 240rpx;
  height: 240rpx;
  border-radius: 20rpx
}


</style>
