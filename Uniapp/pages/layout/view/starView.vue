<template>
  <view>
    <scroll-view scroll-y v-if="(data.length>0)" @scrolltolower="getStarPage">
      <view class="txt-model">
        <view class="problem" v-for="(item,index) in data" :key="index">
          <view class="text-bot">
            {{ item.issue }}
          </view>
          <view class="text-time">
            收藏于 {{ conversionTime(item.createdTime) }}
          </view>
          <view class="operation-model">
            <van-button type="primary" size="small" icon="eye" round color="#7f80fd" @click="toStarDetail(item.starId)">
              查看
            </van-button>
            <van-button type="primary" size="small" round color="#454545" icon="star-o"
                        @click="cancelStar(item.starId)">
              <text class="caner-btn">取消收藏</text>
            </van-button>
          </view>
        </view>
      </view>
      <loading-data-component v-if="isFlushed"/>
    </scroll-view>
    <empty-component msg="这里空空如也" height="75" v-else/>
    <loading-component ref="loadingRef" msg="正在获取收藏数据" :degree="0.8"/>
  </view>
</template>

<script>
import {deleteStarDialogue, getStarPage} from "@/api/user";
import {conversionTime} from "@/utils/date";
import EmptyComponent from "@/wxcomponents/components/emptyComponent.vue";
import LoadingDataComponent from "@/pages/layout/view/components/loadingDataComponent.vue";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";

export default {
  components: {LoadingComponent, LoadingDataComponent, EmptyComponent},
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getStarPage();
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  },
  data() {
    return {
      pageNum: 1,
      data: [],
      isFlushed: false
    };
  }, methods: {
    conversionTime,

    /**
     * 跳转至详情
     */
    toStarDetail: function (id) {
      uni.navigateTo({
        url: '/pages/layout/view/starDetailsView?starId=' + id
      })
    },

    /**
     * 取消收藏
     * @returns {Promise<void>}
     */
    cancelStar: async function (id) {
      const _this = this;
      uni.showModal({
        title: '提示',
        content: '确定要取消这条收藏记录吗?',
        success: async function (res) {
          if (res.confirm) {
            try {
              uni.showLoading({
                title: '请稍等...',
                mask: true
              });
              let newVar = await deleteStarDialogue(id);
              _this.pageNum = 1
              _this.data = []
              await _this.getStarPage()
            } catch (e) {
              uni.showToast({
                title: e,
                icon: 'none',
                duration: 4000
              })
            } finally {
              uni.hideLoading()
            }
          }
        }
      });
    },
    /**
     * 获取收藏分页
     * @returns {Promise<void>}
     */
    getStarPage: async function () {
      try {
        this.isFlushed = true
        const {records} = await getStarPage(this.pageNum);
        if (records.length > 0) {
          this.data.push(...records)
          this.pageNum = this.pageNum + 1
        }
      } catch (e) {
        uni.showToast({
          icon: 'none',
          duration: 3000,
          title: e
        });
      } finally {
        this.isFlushed = false
      }

    }

  }

}
</script>

<style lang="scss">

scroll-view {

  height: 95vh;
}

.problem {
  background-color: #121111;
  border-radius: 20rpx;
  height: 200rpx;
  padding: 30rpx;
  margin-bottom: 30rpx;
}

van-button {
  margin-right: 20rpx;
}

.txt-model {
  padding: 20rpx;
  color: #ffffff
}

.text-bot {
  font-size: 30rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-time {
  color: #898989;
  font-size: 24rpx;
  padding-top: 15rpx
}

.operation-model {
  margin-top: 40rpx;
  text-align: right
}

.caner-btn {
  color: #d9d9d9
}

</style>
