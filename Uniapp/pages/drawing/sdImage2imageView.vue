<template>
  <view class="container">
    <loading-component ref="loadingRef" :msg="msg" :degree="0.8"/>
    <generate-loading-component ref="generateLoadingRef" :location="location"/>
    <scroll-view class="main-scroll" scroll-y>
      <!--  上传文件框框-->
      <view class="title">
        <view>
          上传原图(必填)
        </view>
        <view class="uploader_container">
          <view v-if="!form.images">
            <van-uploader @after-read="imageCacheCallback" use-before-read :deletable="false" @before-read="beforeRead">
              <van-icon name="plus" size="60rpx" color="#868585"/>
            </van-uploader>
            <view class="uploader_subassembly">
              <view class="uploader_prompt">
                点击上传(参考图)
              </view>
              <view>
                图片格式支持 JPG、JPEG、PNG 不超过2MB
              </view>
              <view>
                请勿上传违反微信社区相关条例内容
              </view>
            </view>
          </view>
          <view v-else>
            <image :src="form.images" class="preview_image"
                   @click="previewImage(form.images)"/>
            <view class="preview_model">
              <van-uploader @after-read="imageCacheCallback" :deletable="false">
                <button class="preview_choose">重新选择
                </button>
              </van-uploader>
              <button class="preview_deleted" @click="deleted">删除</button>
            </view>
          </view>
        </view>
      </view>
      <!--  描述词-->
      <view class="title">
        <view>正向提示词(必填)</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.prompt"
                  placeholder-class="placeholder-class" placeholder="请输入绘画描述词汇">

      </textarea>
      </view>
      <!--  描述词-->
      <view class="title">
        <view>反向提示词(可选)</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.negative_prompt"
                  placeholder-class="placeholder-class" placeholder="请输入绘画描述词汇">

      </textarea>
      </view>
      <!--  参数配置-->
      <view class="title">
        <view>图片大小</view>
        <view style="display: flex;flex-wrap: wrap;padding-top: 30rpx">
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in size"
                :key="index"
                @click="handleSize(index)">
            {{ item.text }}
          </view>
        </view>
      </view>
      <view class="title">
        <view>模型选择</view>
        <view style="display: flex;flex-wrap: wrap;padding-top: 30rpx">
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in model"
                :key="index" @click="handleModel(index)">
            {{ item.text }}
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="levitation">
      <button @click="submit" class="sub_btn">立即生成</button>
    </view>
  </view>
</template>

<script>
import GenerateLoadingComponent from "@/pages/drawing/components/generateLoadingComponent.vue";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import {isDrawingSucceed, sdConnectivity} from "@/api/drawing";
import env from "@/utils/env";
import {getToken} from "@/utils/utils";

export default {
  components: {LoadingComponent, GenerateLoadingComponent},
  data() {
    return {
      form: {
        images: '',
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
     * 处理模型
     * @param index
     */
    handleModel: function (index) {
      this.model.forEach(s => s.isSelected = false)
      this.model[index].isSelected = true
      this.form.modelName = this.model[index].modelName
    },
    beforeRead: function (e) {
      const {file, callback} = e.detail;
      try {
        if (file.size > 2 * 1024 * 1024) { // 判断图片大小是否超过2MB
          uni.showToast({
            title: '图片超过了2MB,请重新选择',
            icon: 'none',
            duration: 4000
          })
        } else {
          callback(true); // 设置callback为true
        }
      } catch (e) {
        this.form.images = undefined
      }
    },
    /**
     * 返回上一页
     */
    previousPage: function () {
      uni.navigateBack()
    },
    /**
     * 遥测SD状态
     * @returns
     */
    examineServer: async function () {
      let loadingRef = this.$refs.loadingRef;
      try {
        loadingRef.openShow()
        let res = await sdConnectivity(1);
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
    },
    /**
     * 关闭定时器
     */
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
      const {images, prompt} = this.form;
      if (!images) {
        uni.showToast({
          title: '请上传参考图',
          icon: 'none',
          duration: 4000
        })
        return
      }
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
      const baseUrl = env.baseUrl;
      uni.requestSubscribeMessage({
        tmplIds: tmplIds,
        success: async function (res) {
          let s = baseUrl + '/drawing/sd/image2image';
          if (res[tmplIds[0]] === 'accept') {
            let generateLoadingRef = _this.$refs.generateLoadingRef;
            uni.showLoading({
              title: '正在加入队列~',
              mask: true
            });
            wx.uploadFile({
              url: s,
              filePath: _this.form.images,
              name: 'images',
              header: {
                'token': getToken()
              },
              formData: {
                'width': _this.form.width,
                'prompt': _this.form.prompt,
                'height': _this.form.height,
                'seed': _this.form.seed,
                'restore_faces': _this.form.restore_faces,
                "modelName": _this.form.modelName,
                "negative_prompt": _this.form.negative_prompt
              },
              async success(res) {
                let parse = JSON.parse(res.data);
                if (parse.code === 200) {
                  let data = parse.data;
                  this.location = data.location
                  uni.showToast({
                    title: '操作成功',
                    icon: 'none',
                    duration: 2000
                  })
                  generateLoadingRef.openShow()
                  _this.timer = setInterval(() => {
                    _this.isDrawingSucceed(data.drawingId)
                  }, 5000);
                } else {
                  _this.stopTimer()
                  uni.showToast({
                    title: parse.msg,
                    icon: 'none',
                    duration: 2000
                  })
                  uni.hideLoading()
                }

              },
              fail(res) {
                console.log(res)
                console.log('错误')
                uni.showToast({
                  title: '服务貌似被关闭了',
                  icon: 'none',
                  duration: 1000
                })
                uni.hideLoading()
                setTimeout(() => {
                  uni.navigateBack();
                }, 2000)
              }
            })

          }
        }
      })
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
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  onLoad() {

    this.examineServer()
  },
  //刷新次数
  onUnload() {
    uni.$emit('master_userInfo')
  },

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
  padding: 10rpx 30rpx;
  margin-bottom: 20rpx;
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
  padding: 10rpx 30rpx;
  margin-bottom: 20rpx;
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
