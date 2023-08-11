<template>
  <view class="detailed_container">
    <CompareImage
        :beforeImageUrl="originalImage"
        :afterImageUrl="generateImage" v-if="!isShow"/>
    <view v-else>
      <image :src="generateImage" class="left_image" mode="widthFix"/>
    </view>
    <view class="under_container" @click="copyPromptData">
      <scroll-view class="scroll-x" :scroll-with-animation="true" :scroll-bar="false" enable-flex scroll-x>
        <view class="model_choose" v-for="(item,index) in prompt" :key="index">
          {{ item }}
        </view>
      </scroll-view>
      <view class="author_info">
        <view class="author_avatar">
          <image :src=" avatar? conversionImage(avatar):'/static/images/individual/defaultAvatar.jpg'"/>
        </view>
        <view class="right_info">
          <view class="name">{{ userName ? userName : env.user }}</view>
          <view class="time">绘制于 {{ conversionTime(createdTime) }}</view>
        </view>
      </view>
      <view class="prompt">
        <view>小贴士</view>
        <view>优质作品有机会被收录为公共鉴赏哟</view>
      </view>
    </view>
    <view class="float">
      <view class="btn_style">
        <van-button icon="down" type="primary" color="#8A75FFFF" block
                    @click="save(generateImage)">下载原图
        </van-button>
      </view>
    </view>
    <loading-component ref="loadingRef" :degree="1"/>
  </view>
</template>

<script>
import CompareImage from "@/wxcomponents/jason-compareimage/CompareImage.vue";
import {getDrawingResult} from "@/api/drawing";
import env from "@/utils/env";
import {conversionTime} from "@/utils/date";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import {conversionImage} from "@/utils/image";

export default {
  computed: {
    env() {
      return env
    }
  },
  components: {LoadingComponent, CompareImage},
  data() {
    return {
      originalImage: '/static/images/individual/twilight.jpeg',
      generateImage: '/static/images/individual/twilight.jpeg',
      avatar: '',
      userName: '',
      prompt: [],
      negativePrompt: [],
      createdTime: undefined,
      isShow: false,
      copyPrompt: ''
    };
  },
  onLoad(option) {
    this.init(option.drawingId)
  },
  methods: {
    conversionImage,
    conversionTime,
    /**
     * 复制提示词
     */
    copyPromptData: function () {
      uni.setClipboardData({
        data: this.copyPrompt,
        success: function () {
          uni.showToast({
            title: '复制成功',
            icon: 'success'
          });
        }
      });
    },
    init: async function (drawingId) {
      let loadingRef = this.$refs.loadingRef;
      try {
        const imageBaseUrl = env.imageBaseUrl;
        loadingRef.openShow()
        let res = await getDrawingResult(drawingId);
        if (res) {
          this.copyPrompt = JSON.stringify(res.prompt)
          this.prompt = res.prompt.split(/[,，]/);
          this.userName = res.userName
          this.avatar = res.avatar
          this.createdTime = res.createdTime
          if ('drawingImage' in res) {
            this.originalImage = imageBaseUrl + res.drawingImage.originalImage
            this.generateImage = imageBaseUrl + res.drawingImage.generateImage
            this.isShow = false
          } else {
            this.originalImage = imageBaseUrl + res.drawingText.originalImage
            this.generateImage = imageBaseUrl + res.drawingText.generateImage
            this.isShow = true
          }
        } else {
          uni.showToast({
            title: '图片貌似不见了~',
            icon: 'none',
            duration: 4000
          })
          setTimeout(() => {
            uni.navigateBack()
          }, 2000)
        }
        setTimeout(() => {
          loadingRef.closeShow()
        }, 1000)

      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 4000
        })
        setTimeout(() => {
          uni.navigateBack()
        }, 2000)
      }

    },
    //保存图片
    save(url) {
      wx.showLoading({
        title: '加载中...'
      });
      //wx.downloadFile方法：下载文件资源到本地
      wx.downloadFile({
        url: url, //图片完整地址 此处需自己手动修改为自己的图片地址
        success: function (res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath, //图片文件路径
            success: function (data) {
              wx.hideLoading(); //隐藏 loading 提示框
              uni.showToast({
                title: '保存成功',
                icon: 'none',
                duration: 4000
              })
            },
            // 接口调用失败的回调函数
            fail: function (err) {
              if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
                wx.showModal({
                  title: '提示',
                  content: '需要您授权保存相册',
                  modalType: false,
                  success: modalSuccess => {
                    wx.openSetting({
                      success(data) {
                        if (data.authSetting['scope.writePhotosAlbum']) {
                          wx.showModal({
                            title: '提示',
                            content: '获取权限成功',
                            modalType: false,
                          })
                        } else {
                          wx.showModal({
                            title: '提示',
                            content: '获取权限失败，将无法保存到相册哦~',
                            modalType: false,
                          })
                        }
                      },
                      fail(failData) {
                        console.log("保存图片失败", failData)
                      }
                    })
                  }
                })
              }
            },
            complete(res) {
              wx.hideLoading(); //隐藏 loading 提示框
            }
          })
        }
      })

    }
  }
}
</script>

<style lang="scss">
van-button {
  margin-right: 30rpx

}

.prompt {
  color: #464646;
  text-align: center;
  padding-top: 80rpx;
  font-size: 25rpx
}

.prompt view {
  padding-top: 10rpx
}

.float {
  position: fixed;
  left: 0;
  bottom: 0;
}

.btn_style {
  height: 130rpx;
  width: 710rpx;
  padding: 20rpx
}

.model_choose {
  font-size: 25rpx;
  background-color: rgb(35, 35, 35);
  flex-shrink: 0;
  border-radius: 10rpx;
  padding: 5rpx 30rpx;
  margin-right: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center
}

.scroll-x {
  height: 60rpx;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  color: white;
}

.under_container {
  padding: 20rpx
}

.author_info {
  display: flex;
  align-items: center;
  padding-top: 30rpx
}

.author_avatar {
  width: 80rpx;
  height: 80rpx;
  overflow-x: hidden;
  border-radius: 100%
}

.author_avatar image {
  width: 100%;
  height: 100%
}

.right_info {
  color: #797979;
  font-size: 27rpx;
  padding-left: 20rpx
}

.detailed_container {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.left_image {
  width: 100%;
}

.name {
  color: #d8d8d8
}

.time {
  font-size: 23rpx;
  padding-top: 5rpx
}

</style>
