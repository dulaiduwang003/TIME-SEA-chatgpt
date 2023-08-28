<template>
  <!--  @touchmove.stop.prevent="() => {}"-->
  <view class="master-container">
    <view v-show="isConnection">
      <swiper :autoplay="false" @change="changeSwiper($event)" :current="swiperIndex" class="master-container">
        <!--首页-->
        <swiper-item>
          <home-view v-show="isWechatStatus"/>
          <camouflage-component v-show="!isWechatStatus"/>
        </swiper-item>
        <!--登录-->
        <swiper-item v-if="!isLogin">
          <login-view/>
        </swiper-item>
        <!--个人中心-->
        <swiper-item v-else>
          <personal-view ref="personalRef"/>
        </swiper-item>
      </swiper>
      <!--底部导航栏-->
      <menu-component/>
      <!--公告-->
      <van-popup
          :show="isAnnouncement"
          position="center"
          closeable

          @close="this.isAnnouncement = false"
          round
          :close-on-click-overlay="false"
      >
        <view class="ani-container">
          <view class="ani-head">
            <view>
              公告
            </view>
          </view>
          <view class="ani-context">
            <view>
              {{ announcement.context }}
            </view>
            <view class="ani-created">
              发布于 {{ conversionTime(announcement.createdTime) }}
            </view>
          </view>
          <view class="ani-button">
            <van-button round type="primary" color="#8A75FFFF" block @click="isAnnouncement=false">朕已阅</van-button>
          </view>
        </view>
      </van-popup>
      <!--      加载动画-->
      <loading-component ref="loadingRef" msg="正在加载资源" :degree="0.9"/>
    </view>
    <disconnect-component height="90" v-show="!isConnection"/>
  </view>
</template>

<script>
import MenuComponent from '@/pages/master/components/menuComponent.vue'
import HomeView from "@/pages/master/view/homeView.vue";
import LoginView from "@/pages/master/view/loginView.vue";
import PersonalView from "@/pages/master/view/personalView.vue";
import {getAnnouncement, getToken, setAnnouncement} from "@/utils/utils";
import env from "@/utils/env";
import {useVideoReward} from "@/api/inspirit";
import {getAnnouncementData, getWechatAppStatus} from "@/api/public";
import {conversionTime} from "@/utils/date";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import DisconnectComponent from "@/wxcomponents/components/disconnectComponent.vue";
import CamouflageComponent from "@/pages/master/components/camouflageComponent.vue";

let videoAd = null;
export default {
  components: {
    CamouflageComponent,
    DisconnectComponent,
    LoadingComponent,
    PersonalView,
    LoginView,
    HomeView,
    MenuComponent
  },
  onLoad(option) {
    let personalRef = this.$refs.personalRef;

    //通过参数匹配路由
    if (option.swiperIndex) {
      this.swiperIndex = option.swiperIndex
    }
    //加载子组件数据
    this.loadingPersonal()
    //监听用户信息数据刷新曲柄
    uni.$on("master_userInfo", () => {
      if (personalRef) {
        personalRef.refreshUserInfo();
      }
    })
    //监听创作流刷新
    uni.$on("master_creation", () => {
      if (personalRef) {
        personalRef.refreshCreation();
      }
    })
    //监听鉴赏流刷新
    uni.$on("master_appreciate", () => {
      if (personalRef) {
        personalRef.refreshAppreciate();
      }
    })
    // 初始化广告
    // #ifdef MP
    this.adLoad();
    // #endif

  },
  onUnload() {
    uni.$off('master_userInfo')
    uni.$off('master_appreciate')
    uni.$off('master_creation')
    if (videoAd) {
      videoAd.destroy()
    }
  },
  data() {
    return {
      // 0 首页 1 个人追踪新
      swiperIndex: 0,
      // 是否登录？
      isLogin: false,
      //公告数据
      announcement: {},
      //是否显示公告
      isAnnouncement: false,
      //网络连通性
      isConnection: true,
      //状态
      isWechatStatus: false

    }
  },
  created() {
    this.handleIsLogin();
    this.getAnnouncement();
    this.getServerStatus();
  },
  methods: {
    conversionTime,
    /**
     * 获取服务状态
     */
    getServerStatus: async function () {
      try {
        this.isWechatStatus = await getWechatAppStatus();
      } catch (e) {
        this.isWechatStatus = false
      }
    },

    /**
     * 加载个人中心组件数据
     */
    loadingPersonal: function () {
      if (getToken()) {
        //加载子组件数据
        this.$refs.personalRef.onLoadShow()
      }
    },
    /**
     * 调用广告组件
     */
    adLoad: function () {
      const that = this
      const advertisement = env.motivationalAdvertisingId
      if (wx.createRewardedVideoAd) {
        videoAd = wx.createRewardedVideoAd({
          adUnitId: advertisement
        });
        videoAd.onError(err => {
          console.log(err);
        });
        videoAd.onClose(async (status) => {
          if (status && status.isEnded || status === undefined) {
            try {
              let promise = await useVideoReward();
              uni.showToast({
                title: '奖励已发放',
                icon: 'none'
              });
              that.$refs.personalRef.getUserInfo()
            } catch (e) {
              console.log(e)
              uni.showToast({
                title: '获取奖励失败',
                icon: 'none'
              });
            }

          } else {
            uni.showToast({
              icon: 'none',
              duration: 3000,
              title: `请重新观看视频获得奖励`
            });
          }
        });
      }
    },
    /**
     * 播放广告
     */
    watchVideo: function () {
      if (videoAd) {
        videoAd.show().catch(() => {
          // 广告拉取失败，重试
          videoAd.load().then(() => {
            videoAd.show();
          });
        })
      }
    },
    /**
     * 用户是否登录
     */
    handleIsLogin: function () {
      this.isLogin = getToken()
      return this.isLogin
    },
    /**
     * 手动切换
     * @param e
     */
    changeSwiper: function (e) {
      uni.vibrateShort();
      this.swiperIndex = e.detail.current;
    },
    /**
     * 获取公告
     */
    getAnnouncement: async function () {
      try {
        const announcementData = await getAnnouncementData();
        if (announcementData) {
          const {logotypeId} = announcementData;
          const cachedAnnouncement = getAnnouncement();
          if (!cachedAnnouncement || logotypeId !== cachedAnnouncement.logotypeId) {
            this.announcement = announcementData;
            setAnnouncement(announcementData);
            this.isAnnouncement = true
          }
        }
      } catch (e) {
        console.log('获取公告失败');
      }
    },
    /**
     * 开启动画
     */
    openShowAnimation: function () {
      this.$refs.loadingRef.openShow();
    },
    /**
     * 关闭动画
     */
    closeShowAnimation: function () {
      this.$refs.loadingRef.closeShow();
    }
  }
}
</script>

<style lang="scss">

page {
  --popup-background-color: none;
}

.master-container {
  animation: fadeIn 1s ease-in-out forwards;
}


.master-container {
  height: 100vh;
}

.ani-container {
  width: 600rpx;
  background-color: #131313;
  border-radius: 20rpx;
  padding: 25rpx
}

.ani-head {
  font-weight: 550;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #707070;
  font-size: 34rpx
}

.ani-context {
  min-height: 180rpx;
  color: #898989;
  margin-top: 50rpx;
  font-size: 28rpx;
  letter-spacing: 3rpx;
}

.ani-created {
  text-align: right;
  font-size: 23rpx;
  position: fixed;
  bottom: 160rpx;
  right: 30rpx;
}

.ani-button {
  padding: 0 80rpx;
  padding-top: 80rpx;

}

</style>
