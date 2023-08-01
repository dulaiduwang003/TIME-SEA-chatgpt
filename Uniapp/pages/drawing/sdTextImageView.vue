<template>
  <view class="container">
    <loading-component ref="loadingRef" :msg="msg" :degree="0.8"/>
    <generate-loading-component ref="generateLoadingRef" :location="form.location"/>
    <scroll-view class="main-scroll" scroll-y>
      <!--  描述词-->
      <view class="title">
        <view>正向提示词</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.prompt"
                  placeholder-class="placeholder-class" placeholder="请输入绘画描述词汇"/>
      </view>
      <!--  描述词-->
      <view class="title">
        <view>反向提示词(可选)</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.negative_prompt"
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
      <!--      <view class="title">-->
      <!--        <view>继续包含人脸特征</view>-->
      <!--        <scroll-view class="scroll-x" :scroll-with-animation="true" :scroll-bar="false" enable-flex scroll-x>-->
      <!--          <view :class="form.restore_faces?'model_choose_selected':'model_choose'" @click="form.restore_faces=1">-->
      <!--            是-->
      <!--          </view>-->
      <!--          <view :class="form.restore_faces?'model_choose':'model_choose_selected'" @click="form.restore_faces=0">-->
      <!--            否-->
      <!--          </view>-->
      <!--        </scroll-view>-->
      <!--      </view>-->
      <!--      <view class="title">-->
      <!--        <view>随机性</view>-->
      <!--        <scroll-view class="scroll-x" :scroll-with-animation="true" :scroll-bar="false" enable-flex scroll-x>-->
      <!--          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in random"-->
      <!--                :key="index" @click="handleRandom(index)">-->
      <!--            {{ item.text }}-->
      <!--          </view>-->
      <!--        </scroll-view>-->
      <!--      </view>-->
      <view class="title">
        <view>模型选择</view>
        <scroll-view class="scroll-x" :scroll-with-animation="true" :scroll-bar="false" enable-flex scroll-x>
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in model"
                :key="index" @click="handleModel(index)">
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
import {addSdDrawingTextTaskQueue, isDrawingSucceed, sdConnectivity} from "@/api/drawing";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import GenerateLoadingComponent from "@/pages/drawing/components/generateLoadingComponent.vue";

export default {
  components: {LoadingComponent, GenerateLoadingComponent},
  data() {
    return {
      form: {
        prompt: '',
        width: 512,
        height: 512,
        seed: 0,
        restore_faces: 0,
        modelName: '',
        location: 0,
        negative_prompt: ''
      },
      msg: '正在检查绘图服务运行状态',
      //图片大小
      size: [
        {
          width: 512,
          height: 512,
          isSelected: true,
          text: "标准分辨率"
        },
        {
          width: 1024,
          height: 1024,
          isSelected: false,
          text: "高分辨率"
        }
      ],
      //随机性
      random: [
        {
          seed: 0,
          isSelected: false,
          text: "不随机"
        },
        {
          seed: 50,
          isSelected: false,
          text: "随机"
        },
        {
          seed: 123,
          isSelected: true,
          text: "任意"
        },
      ],
      //模型
      model: []
    };
  },
  created() {
    this.model = env.sdModels
    this.model.forEach(m => {
      if (m.isSelected) {
        this.form.modelName = m.modelName
      }
    })
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
     * 清除图片
     */
    deleted: function () {
      this.form.images = ''
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
              let data = await addSdDrawingTextTaskQueue(_this.form);
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
                title: '操作繁忙 请稍后试试',
                icon: 'none',
                duration: 2000
              });
            }
          } else {
            console.log('放弃绘图')
          }

        }
      })


    }
    ,
    /**
     * 处理随机性
     * @param index
     */
    handleRandom: function (index) {
      this.random.forEach(s => s.isSelected = false)
      this.random[index].isSelected = true
      this.form.seed = this.random[index].seed
    }
    ,
    /**
     * 处理大小
     * @param index
     */
    handleSize: function (index) {
      this.size.forEach(s => s.isSelected = false)
      this.size[index].isSelected = true
      this.form.height = this.size[index].height
      this.form.width = this.size[index].width
    }
    ,
    /**
     * 处理模型
     * @param index
     */
    handleModel: function (index) {
      this.model.forEach(s => s.isSelected = false)
      this.model[index].isSelected = true
      this.form.modelName = this.model[index].modelName
    },
    /**
     * 解析用户选择的图片
     * @param e
     */
    imageCacheCallback: function (e) {
      const {file} = e.detail;
      this.form.images = file.url
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
     * 检查SD运行状态 初步验证用户是否有足够次数
     * @returns {Promise<void>}
     */
    examineServer: async function () {
      let loadingRef = this.$refs.loadingRef;
      try {
        loadingRef.openShow()
        let res = await sdConnectivity(0);
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
