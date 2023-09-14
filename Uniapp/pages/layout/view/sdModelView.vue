<template>
  <view class="container">
    <view class="search">
      <van-icon name="search"/>
      <input type="text" placeholder="模型名称/模型值" confirm-type="search" @confirm="handleSearch($event)"></input>
      <button type="primary" style="font-size: 23rpx;width: 200rpx;background-color: rgb(249,47,96)"
              @click="isShow=true">新增模型
      </button>
    </view>
    <scroll-view scroll-x scroll-y @scrolltolower="getSdModelPage">
      <view class="list_container" v-if="data.length>0">
        <view class="list_meter_header">
          <view>
            模型名称
          </view>
          <view>
            模型值
          </view>

        </view>
        <view class="list_surface" v-for="(item,index) in data" :key="index"
              @longpress="handleDeleteById(item.sdModelId)" @click="copyContext(JSON.stringify(item))">
          <view>
            {{ item.textName }}
          </view>
          <view>
            {{ item.modelName }}
          </view>

        </view>
      </view>
      <empty-component msg="未找到任何模型" height="60" v-else/>
      <loading-data-component v-if="isFlushed"/>
    </scroll-view>
    <!--    弹出层-->
    <van-popup
        :show="isShow"
        position="bottom"
        closeable
        @close="this.isShow = false"
        round
    >
      <view class="popup_container">
        <view class="popup_title">新增模型</view>
        <view class="popup_info">
          <view class="popup_label">模型名称</view>
          <view class="popup_value">
            <input type="text" placeholder="请设置模型名称" class="code_input" v-model="form.textName"
                   maxlength="3"/>
          </view>
        </view>
        <view class="popup_info">
          <view class="popup_label">模型值</view>
          <view class="popup_value">
            <input type="number" placeholder="请设置模型值" class="code_input" v-model="form.modelName"
                   maxlength="9"/>
          </view>
        </view>
        <view class="van-button">
          <van-button type="primary" round block color="#7232dd" @click="handlePutSdModel">重载数据</van-button>
        </view>
      </view>
    </van-popup>
    <loading-component ref="loadingRef" msg="正在获取兑换码数据" :degree="0.8"/>
  </view>
</template>

<script>
import {
  deleteSdModel,
  getSdModelPage, putSdModel
} from "@/api/admin";
import {conversionTime} from "@/utils/date";
import EmptyComponent from "@/wxcomponents/components/emptyComponent.vue";
import LoadingDataComponent from "@/pages/layout/view/components/loadingDataComponent.vue";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";

export default {
  components: {LoadingComponent, LoadingDataComponent, EmptyComponent},
  data() {
    return {
      pageNum: 1,
      prompt: '',
      data: [],
      isFlushed: false,
      isShow: false,
      form: {
        modelName: "",
        textName: "",
      }
    };
  },
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getSdModelPage();
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  },
  methods: {
    conversionTime,
    /**
     * 新增
     * @returns {Promise<void>}
     */
    handlePutSdModel: async function () {
      const {modelName, textName} = this.form
      if (!modelName) {
        uni.showToast({
          title: '模型值不能为空',
          icon: 'none',
          duration: 2000
        });
        return
      }
      if (!textName) {
        uni.showToast({
          title: '模型名称不能为空',
          icon: 'none',
          duration: 2000
        });
        return
      }
      try {
        uni.showLoading({
          title: '正在重载 ing~',
          mask: true
        });
        let promise = await putSdModel(this.form);
        this.pageNum = 1
        this.prompt = ''
        this.data = []
        await this.getSdModelPage()
        uni.showToast({
          title: '添加成功',
          icon: 'none',
          duration: 2000
        });
        uni.hideLoading()
        this.isShow = false
      } catch (e) {
        uni.hideLoading()
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        });
      }
    },
    /**
     * 复制内容
     */
    copyContext: function (text) {
      uni.setClipboardData({
        data: text,
        success: function () {
          uni.showToast({
            title: '复制成功',
            icon: 'success'
          });
        }
      });
    },
    /**
     * 根据Id删除
     * @param id
     * @returns {Promise<void>}
     */
    handleDeleteById: async function (id) {
      const _this = this
      uni.showModal({
        title: '提示',
        content: '确定删除这个模型？',
        success: async function (res) {
          if (res.confirm) {
            try {
              uni.showLoading({
                title: '正在删除 ing~',
                mask: true
              });
              let promise = await deleteSdModel(id);
              uni.hideLoading()
              uni.showToast({
                title: '删除成功',
                icon: 'none',
                duration: 2000
              });
              _this.pageNum = 1
              _this.prompt = ''
              _this.data = []
              await _this.getSdModelPage()
            } catch (e) {

              uni.hideLoading()
              uni.showToast({
                title: e,
                icon: 'none',
                duration: 2000
              });
            }

          }
        }
      });

    },
    /**
     * 搜索
     */
    handleSearch: function (e) {
      this.prompt = e.detail.value
      this.data = []
      this.pageNum = 1;
      this.getSdModelPage()
    },
    /**
     * 分页获取模型
     * @returns {Promise<void>}
     */
    getSdModelPage: async function () {
      try {
        this.isFlushed = true
        const {records} = await getSdModelPage(this.pageNum, this.prompt);
        if (records.length > 0) {
          this.pageNum = this.pageNum + 1
          this.data.push(...records)
        }

      } catch (e) {
        uni.showToast({
          icon: 'none',
          duration: 6000,
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
.container {
  padding: 40rpx;
}

input {
  margin-left: 10rpx;
  width: 380rpx;
}

.code_input {
  width: 300rpx;
}

scroll-view {
  border-radius: 20rpx;
  background-color: #1c1c1c;
  overflow-x: scroll;
  flex-direction: row;
  display: flex;
  white-space: nowrap;
  height: 85vh;
}

.list_surface {
  display: flex;
  align-items: center;
  font-size: 27rpx;
  width: 2000rpx;
  color: white;
  border-bottom: 1rpx solid #9e9e9e;
  margin-bottom: 30rpx;
}

.list_surface view {
  width: 500rpx;
  padding: 20rpx
}

.list_container {
  padding: 20rpx
}

.list_meter_header {
  display: flex;
  align-items: center;
  font-size: 30rpx;
  font-weight: 550;
  width: 2000rpx;
  color: white;
}

.list_meter_header view {
  width: 500rpx;
  padding: 20rpx
}

.search {
  display: flex;
  align-items: center;
  font-size: 28rpx;
  padding: 20rpx;
  background-color: #393a3a;
  color: #b0b4b4;
  margin-bottom: 10rpx;
  border-radius: 15rpx
}

.popup_container {
  height: 60vh;
  padding: 10rpx;
  padding-top: 25rpx;
}

.popup_title {
  text-align: center;
  padding-bottom: 50rpx;
}

.popup_info {
  display: flex;
  align-items: center;
  font-size: 25rpx;
  color: #3d3d3d;
  margin-bottom: 50rpx;
}

.popup_label {
  width: 200rpx;
  padding-left: 50rpx;
}

.popup_value {
  display: flex;
  align-items: center;
}

.van-button {
  margin-top: 35vh;
}

.popup_stepper {
  margin-left: 10rpx;
}

</style>
