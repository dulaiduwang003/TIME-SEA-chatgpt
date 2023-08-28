<template>

  <view class="container">
    <view class="model">
      <textarea placeholder="请设置公告内容" maxlength="100" v-model="context"/>
    </view>
    <view class="counter">{{ context.length }}/100</view>
    <view class="van-button">
      <van-button type="primary" block color="#7232dd" @click="submit">重载数据</van-button>
    </view>
    <loading-component ref="loadingRef" msg="正在获取公告数据" :degree="0.8"/>
  </view>
</template>

<script>
import {putAnnouncement} from "@/api/admin";
import {getAnnouncementData} from "@/api/public";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";

export default {
  components: {LoadingComponent},
  data() {
    return {
      context: ''
    };
  },
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getAnnouncement()
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  },
  methods: {
    /**
     * 发布公告
     * @returns {Promise<void>}
     */
    submit: async function () {
      if (!(this.context.length > 0)) {
        uni.showToast({
          title: '公告不能为空',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      try {
        uni.showLoading({
          title: '正在发布中...',
          mask: true
        });
        await putAnnouncement({
          context: this.context
        });
        uni.showToast({
          title: '发布成功',
          icon: 'none',
          duration: 2000
        });
      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        });
      } finally {
        uni.hideLoading()
      }
    },
    /**
     * 获取公告
     * @returns {Promise<void>}
     */
    getAnnouncement: async function () {
      try {
        let announcement = await getAnnouncementData();

        if (announcement) {
          this.context = announcement.context;
        }
      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        });
      }
    }

  }
}
</script>

<style lang="scss">
page {
  background-color: #101010;
}

.van-button {
  margin-top: 50vh;
}

.container {
  padding: 20rpx
}

.model {
  border-radius: 15rpx;
  padding: 10rpx;
  height: 500rpx;
  background-color: #2b2b2b
}

textarea {
  color: #b2b2b2;
  width: 100%;
  height: 100%;
  font-size: 28rpx
}

.counter {
  text-align: right;
  font-size: 25rpx;
  color: #7b7b7b
}

</style>
