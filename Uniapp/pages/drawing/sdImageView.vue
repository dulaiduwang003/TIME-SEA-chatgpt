<template>
  <view class="container">
    <loading-component ref="loadingRef" :msg="msg" :degree="0.8"/>
    <generate-loading-component ref="generateLoadingRef" :location="location"/>
    <scroll-view class="main-scroll" scroll-y>
      <!--  上传文件框框-->
      <view class="title">
        <view>
          上传参考图
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

      <view class="title" v-if="form.images">
        <view>图片类型选择</view>
        <view style="display: flex;flex-wrap: wrap;padding-top: 30rpx">
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in controlNet"
                :key="index" @click="handleControlNet(index)">
            {{ item.typeName }}
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
        <view>反向提示词</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.negative_prompt"
                  placeholder-class="placeholder-class" placeholder="请输入绘画描述词汇">

      </textarea>
      </view>

      <!--  描述词-->
      <view class="title" v-if="!form.images">
        <view>隐藏文字(可选,注意如果是竖排，请手动换行)</view>
        <textarea :show-confirm-bar="false" :auto-height="true" maxlength="2000" confirm-type="done"
                  v-model="form.entryText"
                  placeholder-class="placeholder-class" placeholder="请输入隐藏文字，注意如果是竖排，请手动换行"/>
      </view>

      <!--  参数配置-->
      <view class="title">
        <view>图片大小</view>
        <view class="size-container">
          <view :class="item.isSelected?'size-model-selected':'size-model'" v-for="(item,index) in size" :key="index"
                @click="handleSize(index)">
            <div>
              <div class="size-logo">
                <image :src="'/static/assets/'+item.image" alt=""/>
              </div>
              <div class="size-proportion">
                {{ item.proportion }}
              </div>
              <div class="size-text">{{ item.text }}</div>
            </div>
          </view>
        </view>
      </view>
      <view class="title">
        <view>模型选择</view>
        <view style="display: flex;flex-wrap: wrap;padding-top: 30rpx">
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in model"
                :key="index" @click="handleModel(index)">
            {{ item.textName }}
          </view>
        </view>
      </view>

      <view class="title">
        <view>迭代次数</view>
        <view style="display: flex;flex-wrap: wrap;padding-top: 30rpx">
          <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in steps"
                :key="index" @click="handleSteps(index)">
            {{ item.value }}
          </view>
        </view>
      </view>
<!--      <view class="title">-->
<!--        <view>采样方法</view>-->
<!--        <scroll-view scroll-x>-->
<!--          <view style="display: flex;padding-top: 30rpx">-->
<!--            <view :class="item.isSelected?'model_choose_selected':'model_choose'" v-for="(item,index) in sampler"-->
<!--                  :key="index" @click="handleSampler(index)">-->
<!--              {{ item.value }}-->
<!--            </view>-->
<!--          </view>-->
<!--        </scroll-view>-->

<!--      </view>-->
    </scroll-view>
    <view class="levitation">
      <button @click="submit" class="sub_btn">立即生成</button>
    </view>
  </view>
</template>

<script>
import GenerateLoadingComponent from "@/pages/drawing/components/generateLoadingComponent.vue";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import {addSdtDrawingTask, getSdModelList, isDrawingSucceed, sdConnectivity, getSdControlNetType} from "@/api/drawing";
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
        steps: 20,
        modelName: '',
        sampler_index: "Euler a",
        negative_prompt: '',
        controlNetType: '',
        entryText: '',
      },
      msg: '正在检查绘图服务运行状态',
      size: [
        {
          proportion: '1:1',
          text: '头像',
          image: 'size-1-1.f9b344b9.svg',
          isSelected: true,
          width: 512,
          height: 512
        },
        {
          proportion: '1:2',
          text: '手机壁纸',
          image: 'size-1-2.62c2da58.svg',
          isSelected: false,
          width: 1080,
          height: 2160
        },
        {
          proportion: '3:4',
          text: '文案图',
          image: 'size-3-4.ba364264.svg',
          isSelected: false,
          width: 384,
          height: 512
        },
        {
          proportion: '4:3',
          text: '小红书',
          image: 'size-4-3.a0ec2a1c.svg',
          isSelected: false,
          width: 512,
          height: 384
        },
        {
          proportion: '9:16',
          text: '海报',
          image: 'size-9-16.498b0472.svg',
          isSelected: false,
          width: 768,
          height: 1365
        },
        {
          proportion: '16:9',
          text: '电脑壁纸',
          image: 'size-4-3.a0ec2a1c.svg',
          isSelected: false,
          width: 1980,
          height: 1080
        }
      ],
      model: [],
      controlNet:[],
      sampler: [
        {
          value: "Euler a",
          isSelected: true
        }, {
          value: "Euler",
          isSelected: false
        }, {
          value: "LMS",
          isSelected: false
        }, {
          value: "Heun",
          isSelected: false
        }, {
          value: "DPM2",
          isSelected: false
        }, {
          value: "DPM2 a",
          isSelected: false
        }, {
          value: "DPM++ 2S a",
          isSelected: false
        }, {
          value: "DPM++ 2M",
          isSelected: false
        }, {
          value: "DPM++ SDE",
          isSelected: false
        }, {
          value: "DPM fast",
          isSelected: false
        }, {
          value: "DPM adaptive",
          isSelected: false
        }, {
          value: "LMS Karras",
          isSelected: false
        }, {
          value: "DPM2 Karras",
          isSelected: false
        }, {
          value: "DPM2 a Karras",
          isSelected: false
        }, {
          value: "DPM++ 2S a Karras",
          isSelected: false
        }, {
          value: "DPM++ 2M Karras",
          isSelected: false
        }, {
          value: "DPM++ SDE Karras",
          isSelected: false
        }, {
          value: "DDIM",
          isSelected: false
        },
      ],
      location: 0,
      steps: [
        {
          value: 20,
          isSelected: true
        }, {
          value: 40,
          isSelected: false
        }, {
          value: 60,
          isSelected: false
        }, {
          value: 80,
          isSelected: false
        }, {
          value: 100,
          isSelected: false
        }
      ],
    };
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
    handleControlNet: function (index) {
      this.controlNet.forEach(s => s.isSelected = false)
      this.controlNet[index].isSelected = true
      this.form.controlNetType = this.controlNet[index].type
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
     * 获取模型列表
     */
    getModelList: async function () {
      try {
        const sdModelList = await getSdModelList();
        if (sdModelList.length > 0) {
          sdModelList.forEach((a) => {
            this.model.push({
              modelName: a.modelName,
              textName: a.textName,
              isSelected: false
            })
          })
          this.model[0].isSelected = true
          this.form.modelName = this.model[0].modelName
        }
      } catch (e) {
        console.log(e)
      }

    },
    getControlNetList: async function () {
      try {
        const sdControlNetList = await getSdControlNetType();
        if (sdControlNetList.length > 0) {
          console.log(sdControlNetList);
          sdControlNetList.forEach((a) => {
            this.controlNet.push({
              type: a.type,
              typeName: a.typeName
            })
          })
          this.controlNet[0].isSelected = true
          this.form.controlNetType = this.controlNet[0].type
        }
      } catch (e) {
        console.log(e)
      }

    },
    /**
     * 遥测SD状态
     * @returns
     */
    examineServer: async function () {
      let loadingRef = this.$refs.loadingRef;
      try {
        loadingRef.openShow()
        let res = await sdConnectivity();
        if (!res) {
          this.msg = '请联系小程序管理员开启绘图服务'
          setTimeout(() => {
            uni.navigateBack();
          }, 3000)
          return
        }
        loadingRef.closeShow()
      } catch (e) {
        console.log(e)
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
      const baseUrl = env.baseUrl;
      uni.requestSubscribeMessage({
        tmplIds: tmplIds,
        success: async function (res) {
          if (res[tmplIds[0]] === 'accept') {
            let generateLoadingRef = _this.$refs.generateLoadingRef;
            uni.showLoading({
              title: '正在加入队列~',
              mask: true
            });

            const requestData = {
              'width': _this.form.width,
              'prompt': _this.form.prompt,
              'height': _this.form.height,
              'steps': _this.form.steps,
              'sampler_index': _this.form.sampler_index,
              "modelName": _this.form.modelName,
              "negative_prompt": _this.form.negative_prompt,
              "controlNetType": _this.form.controlNetType,
              "entryText":  _this.form.entryText,
              "env": 1
            };
            if (_this.form.images) {
              wx.uploadFile({
                url: baseUrl + '/drawing/sd/drawing/image',
                filePath: _this.form.images,
                name: 'images',
                header: {
                  'token': getToken()
                },
                formData: requestData,
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
            } else {
              try {
                let newVar = await addSdtDrawingTask(requestData);
                this.location = newVar.location
                uni.showToast({
                  title: '操作成功',
                  icon: 'none',
                  duration: 2000
                })
                generateLoadingRef.openShow()
                _this.timer = setInterval(() => {
                  _this.isDrawingSucceed(newVar.drawingId)
                }, 5000);
              } catch (e) {
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

            }

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
      this.form.width = this.size[index].width
      this.form.height = this.size[index].height
    },
    /**
     * 处理采样率
     * @param index
     */
    handleSampler: function (index) {
      this.sampler.forEach(s => s.isSelected = false)
      this.sampler[index].isSelected = true
      this.form.sampler_index = this.sampler[index].value
    },
    /**
     * 处理迭代次数
     * @param index
     */
    handleSteps: function (index) {
      this.steps.forEach(s => s.isSelected = false)
      this.steps[index].isSelected = true
      this.form.steps = this.steps[index].value
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
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  onLoad() {
    this.examineServer()
    this.getModelList()
    this.getControlNetList()
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

.size-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20rpx
}

.size-model {
  border-radius: 15rpx;
  margin: 10rpx auto;
  width: 210rpx;
  height: 200rpx;
  background-color: #2a2a2a;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rpx solid #2a2a2a;
}

.size-model-selected {
  border-radius: 15rpx;
  margin: 10rpx auto;
  width: 210rpx;
  height: 200rpx;
  background-color: #271f31;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rpx solid #8166E7FF;
}

.size-logo {
  padding-bottom: 15rpx
}

.size-logo image {
  width: 70rpx;
  height: 70rpx
}

.size-proportion {
  padding-bottom: 10rpx
}

.size-text {
  font-size: 20rpx;
  font-weight: 500;
  color: #636363
}

</style>
