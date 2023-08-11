<template>
  <view class="container">
    <generate-loading-component ref="generateLoadingRef" :location="form.location"/>
    <scroll-view class="main-scroll" scroll-y>
      <!--  描述词-->
      <view class="title">
        <view>提示词</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.prompt"
                  placeholder-class="placeholder-class" placeholder="请输入绘画描述词汇"/>
      </view>
      <!--  参数配置-->
      <view class="title">
        <view>图片大小</view>
        <scroll-view class="scroll-x" :scroll-with-animation="true" :scroll-bar="false" enable-flex scroll-x>
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in size"
                :key="index"
                @click="handleSize(index)">
            {{ item.text }}
          </view>
        </scroll-view>
      </view>
    </scroll-view>
    <view class="levitation">
      <button @click="submit" class="sub_btn">立即生成</button>
    </view>
  </view>
</template>

<script>


import env from "@/utils/env";
import {addGptDrawingTextTaskQueue, isDrawingSucceed} from "@/api/drawing";
import GenerateLoadingComponent from "@/pages/drawing/components/generateLoadingComponent.vue";

export default {
  components: { GenerateLoadingComponent},
  data() {
    return {
      form: {
        prompt: '',
        size: '512x512',
        location: 0,
      },
      //图片大小
      size: [
        {
          size: '512x512',
          isSelected: true,
          text: "标准分辨率"
        },
        {
          size: '1024x1024',
          isSelected: false,
          text: "高分辨率"
        }
      ],
      timer: undefined
    };
  },
  methods: {
    /**
     * 处理大小
     * @param index
     */
    handleSize: function (index) {
      this.size.forEach(s => s.isSelected = false)
      this.size[index].isSelected = true
      this.form.size = this.size[index].size
    }
    ,
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
        return
      }
      const _this = this
      const tmplIds = env.tmplIds
      let generateLoadingRef = _this.$refs.generateLoadingRef;
      uni.requestSubscribeMessage({
        tmplIds: tmplIds,
        success: async function (res) {
          if (res[tmplIds[0]] === 'accept') {
            uni.showLoading({
              title: '正在加入队列...',
              mask: true
            });
            try {
              let data = await addGptDrawingTextTaskQueue(_this.form);
              uni.showToast({
                title: '提交成功',
                icon: 'none',
                duration: 2000
              });
              _this.form.location = data.location
              generateLoadingRef.openShow()
              _this.timer = setInterval(() => {
                _this.isDrawingSucceed(data.drawingId)
              }, 5000);
            } catch (e) {
              uni.hideLoading()
              uni.showToast({
                title: e,
                icon: 'none',
                duration: 2000
              });
            }
          } else {
            uni.showModal({
              title: '订阅消息',
              content: '您当前拒绝接收作品消息通知，是否去开启?',
              confirmText: '开启授权',
              confirmColor: '#345391',
              cancelText: '仍然拒绝',
              cancelColor: '#999999',
              success: res => {
                if (res.confirm) {
                  uni.openSetting({
                    success(res) {
                      console.log(res)
                    },
                  })
                }
              }
            })
          }

        }
      })


    }
    ,
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
     *  检查绘图是否成功
     */
    isDrawingSucceed: async function (id) {
      const _this = this
      let generateLoadingRef = this.$refs.generateLoadingRef;
      try {
        let promise = await isDrawingSucceed(id);
        if (promise) {
          //跳转
          generateLoadingRef.closeShow();
          _this.stopTimer()
          uni.navigateTo({
            url: '/pages/drawing/drawingResultView?drawingId=' + id
          })

        }
      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        })
        this.stopTimer()
        setTimeout(() => {
          uni.navigateBack();
        }, 3000)
      }
    }
  },
  //刷新次数
  onUnload() {
    clearInterval(this.timer);
    uni.$emit('master_userInfo')
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
