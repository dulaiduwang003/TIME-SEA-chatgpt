<template>
  <view class="container">
    <view class="search">
      <van-icon name="search"/>
      <input type="text" placeholder="兑换码" confirm-type="search" @confirm="handleSearch($event)"></input>
      <button type="primary" style="font-size: 23rpx;width: 200rpx;background-color: rgb(249,47,96)"
              @click="isShow=true">新增兑换码
      </button>
    </view>
    <scroll-view scroll-x scroll-y @scrolltolower="getExchangeCode">
      <view class="list_container" v-if="data.length>0">
        <view class="list_meter_header">
          <view>
            兑换码
          </view>
          <view>
            可兑换次数
          </view>
          <view>
            创建时间
          </view>
        </view>
        <view class="list_surface" v-for="(item,index) in data" :key="index"
              @longpress="handleDeleteById(item.exchangeId)" @click="copyContext(item.exchangeCode)">
          <view>
            {{ item.exchangeCode }}
          </view>
          <view>
            {{ item.frequency }}
          </view>
          <view>
            {{ conversionTime(item.createdTime) }}
          </view>
        </view>
      </view>
      <empty-component msg="未查找到任何兑换码" height="60" v-else/>
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
        <view class="popup_title">生成兑换码</view>
        <view class="popup_info">
          <view class="popup_label">生成数量</view>
          <view class="popup_value">
            <input type="number" placeholder="请设置兑换码生成数量" class="code_input" v-model="form.buildQuantity"
                   maxlength="3"/>
          </view>
        </view>
        <view class="popup_info">
          <view class="popup_label">所含Ai币</view>
          <view class="popup_value">
            <input type="number" placeholder="请设置兑换码所含Ai币" class="code_input" v-model="form.buildFrequency"
                   maxlength="9"/>
          </view>
        </view>
        <view class="van-button">
          <van-button type="primary" round block color="#7232dd" @click="handlePutCode">重载数据</van-button>
        </view>
      </view>
    </van-popup>
    <loading-component ref="loadingRef" msg="正在获取兑换码数据" :degree="0.8"/>
  </view>
</template>

<script>
import {buildExchangeCode, deleteExchangeCodeById, getExchangeCode} from "@/api/admin";
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
        buildFrequency: undefined,
        buildQuantity: undefined
      }
    };
  },
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getExchangeCode();
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
    handlePutCode: async function () {
      const {buildFrequency, buildQuantity} = this.form
      if (!(buildQuantity && buildQuantity.length > 0)) {
        uni.showToast({
          title: '生成数量不正确',
          icon: 'none',
          duration: 2000
        });
        return
      }
      if (!(buildFrequency && buildFrequency.length > 0)) {
        uni.showToast({
          title: '所含Ai币不正确',
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
        let promise = await buildExchangeCode(this.form);
        this.pageNum = 1
        this.prompt = ''
        this.data = []
        await this.getExchangeCode()
        uni.showToast({
          title: '生成成功',
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
        content: '确定删除这个兑换码？',
        success: async function (res) {
          if (res.confirm) {
            try {
              uni.showLoading({
                title: '正在删除 ing~',
                mask: true
              });
              let promise = await deleteExchangeCodeById(id);
              uni.hideLoading()
              uni.showToast({
                title: '删除成功',
                icon: 'none',
                duration: 2000
              });
              _this.pageNum = 1
              _this.prompt = ''
              _this.data = []
              await _this.getExchangeCode()
            } catch (e) {
              console.log('删除兑换码失败')
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
      this.getExchangeCode()
    },
    /**
     * 分页获取兑换码
     * @returns {Promise<void>}
     */
    getExchangeCode: async function () {
      try {
        this.isFlushed = true
        const {records} = await getExchangeCode(this.pageNum, this.prompt);
        if (records.length > 0) {
          this.pageNum = this.pageNum + 1
          this.data.push(...records)
        }

      } catch (e) {
        console.log('获取兑换码数据失败')
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
  margin-top: 40vh;
}

.popup_stepper {
  margin-left: 10rpx;
}

</style>
