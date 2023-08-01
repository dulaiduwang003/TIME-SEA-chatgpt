<template>
  <view class="container">
    <scroll-view scroll-y @scrolltolower="getDrawingPage" v-if="data.length>0">
      <van-swipe-cell left-width="80" right-width="80" v-for="(item,index) in data " :key="index">
        <view slot="left" @click="putDrawingStatus(item.drawingId)">
          <view :class="item.isPublic===1?'left-slot-selected':'left-slot-default'">
            {{ item.isPublic === 1 ? '取消公开' : '公开' }}
          </view>
        </view>
        <view class="image">
          <image :src="conversionImage(item.generateUrl)" mode="widthFix" @click="toDrawingDetail(item.drawingId)"/>
        </view>
        <view slot="right" @click="deleteDrawing(item.drawingId)">
          <view class="right-slot">
            删除
          </view>
        </view>
      </van-swipe-cell>
      <loading-data-component v-if="isFlushed"/>
    </scroll-view>
    <empty-component height="90" v-else/>
    <loading-component ref="loadingRef" msg="正在获取绘图数据" :degree="0.8"/>
  </view>
</template>

<script>


import EmptyComponent from "@/wxcomponents/components/emptyComponent.vue";
import env from "@/utils/env";
import {getDrawingPage, putDrawingStatus} from "@/api/admin";
import LoadingDataComponent from "@/pages/layout/view/components/loadingDataComponent.vue";
import {deleteDrawingById} from "@/api/drawing";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import {conversionImage} from "@/utils/image";

export default {
  computed: {
    env() {
      return env
    }
  },
  components: {LoadingComponent, LoadingDataComponent, EmptyComponent},
  data() {
    return {
      data: [],
      pageNum: 1,
      isFlushed: false,
    };
  },
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getDrawingPage()
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  }
  , methods: {
    conversionImage,
    /**
     * 绘图详情
     * @param e
     */
    toDrawingDetail: function (e) {
      uni.navigateTo({
        url: '/pages/drawing/drawingResultView?drawingId=' + e
      })
    },
    /**
     * 修改绘图状态
     * @param id
     * @returns {Promise<void>}
     */
    putDrawingStatus: async function (id) {
      const _this = this;
      uni.showModal({
        title: '提示',
        content: '确定进行该操作吗？',
        success: async function (res) {
          if (res.confirm) {
            try {
              uni.showLoading({
                title: '请稍等...',
                mask: true
              });
              let newVar = await putDrawingStatus(id);
              _this.pageNum = 1
              _this.data = []
              await _this.getDrawingPage()
              uni.showToast({
                icon: 'none',
                duration: 3000,
                title: '操作成功'
              });
              uni.$emit("master_creation")
              uni.$emit("master_appreciate")
            } catch (e) {
              uni.showToast({
                icon: 'none',
                duration: 3000,
                title: e
              });
            } finally {
              uni.hideLoading();
            }


          }
        }
      });
    },
    /**
     * 删除绘图
     * @returns {Promise<void>}
     */
    deleteDrawing: async function (id) {
      const _this = this;
      uni.showModal({
        title: '提示',
        content: '确定删除这个图片作品吗？',
        success: async function (res) {
          if (res.confirm) {
            try {
              uni.showLoading({
                title: '正在删除...',
                mask: true
              });
              let newVar = await deleteDrawingById(id);
              _this.pageNum = 1
              _this.data = []
              await _this.getDrawingPage()
              uni.showToast({
                icon: 'none',
                duration: 3000,
                title: '删除成功'
              });
              uni.$emit("master_creation")
              uni.$emit("master_appreciate")
            } catch (e) {
              uni.showToast({
                icon: 'none',
                duration: 3000,
                title: e
              });
            } finally {
              uni.hideLoading();
            }


          }
        }
      });
    },
    /**
     * 获取数据
     */
    getDrawingPage: async function () {
      try {
        this.isFlushed = true
        const {records} = await getDrawingPage(this.pageNum);
        if (records.length > 0) {
          this.data.push(...records)
          this.pageNum = this.pageNum + 1
        }
      } catch (e) {
        uni.showToast({
          title: '获取绘图数据失败',
          icon: 'none',
          duration: 2000
        })
      } finally {
        this.isFlushed = false
      }
    }
  }
}
</script>

<style lang="scss">

page {
  background-color: black;
}


.blog-title {
  font-size: 28rpx;
  font-weight: 550;
  padding-bottom: 20rpx
}

.blog-info {
  display: flex;
  align-items: center;
  font-weight: 550
}

.blog-avatar {
  border-radius: 100%;
  height: 50rpx;
  width: 50rpx;
  overflow-x: hidden;
  margin-right: 20rpx
}

.blog-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10rpx
}

.container {
  padding: 40rpx
}

.left-slot-default {
  margin-top: 10rpx;
  border-radius: 10rpx;
  font-size: 30rpx;
  height: 650rpx;
  color: white;
  background-color: #ab3493;
  width: 140rpx;
  display: flex;
  justify-content: center;
  align-items: center
}

.left-slot-selected {
  margin-top: 10rpx;
  border-radius: 10rpx;
  font-size: 30rpx;
  height: 640rpx;
  color: white;
  background-color: #6432a5;
  width: 140rpx;
  display: flex;
  justify-content: center;
  align-items: center
}


.right-slot {
  margin-top: 10rpx;
  border-radius: 10rpx;
  font-size: 30rpx;
  height: 650rpx;
  color: white;
  background-color: #9b1111;
  width: 140rpx;
  display: flex;
  justify-content: center;
  align-items: center
}


.volume_container {
  padding-left: 20rpx;
  font-size: 18rpx;
  color: #636363;
  padding-top: 20rpx;
  display: flex;
  align-items: center
}

.time-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.image {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10rpx;
}

.image image {

  height: 600rpx;
  border-radius: 20rpx;

}

.classify-title {
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 35rpx;
  font-weight: 550;
  top: 0;
  left: 0;
  height: 420rpx;
  width: 670rpx;
  display: flex;
  justify-content: center;
  align-items: center

}

.time-image {
  height: 280rpx;
  width: 180rpx;
  border-radius: 24rpx
}

scroll-view {
  height: 91vh
}

</style>
