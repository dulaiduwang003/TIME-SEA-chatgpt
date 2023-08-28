<template>
  <view class="container">
    <view class="search">
      <van-icon name="search"/>
      <input confirm-type="search" placeholder="赞赏单号" type="text" @confirm="handleSearch($event)"></input>
      <button style="font-size: 23rpx;width: 200rpx;background-color: rgb(249,47,96)" type="primary"
              @click="isShow=true">
        {{
          status === '' ? '全部' : status === 0 ? '待支付' : status === 1 ? '已支付' : status === 2 ? '已取消' : '无数据'
        }}
      </button>
    </view>
    <scroll-view scroll-x scroll-y @scrolltolower="getOrdersPage">
      <view v-if="data.length>0" class="list_container">
        <view class="list_meter_header">
          <view style="width: 1000rpx;">
            订单号
          </view>
          <view style="width: 700rpx;">
            打赏内容
          </view>
          <view style="width: 400rpx;">
            获赠次数
          </view>
          <view style="width: 400rpx;">
            打赏金额
          </view>
          <view style="width: 300rpx;">
            状态
          </view>
          <view style="width: 600rpx;">
            原因
          </view>
          <view style="width: 300rpx;">
            打赏时间
          </view>
        </view>
        <view v-for="(item,index) in data" :key="index" class="list_surface" @click="copyContext(item.ordersId)">
          <view style="width: 1000rpx;">
            {{ item.ordersId }}
          </view>
          <view style="width: 700rpx;">
            {{ item.productName }}
          </view>
          <view style="width: 400rpx;">
            {{ item.frequency }}
          </view>
          <view style="width: 400rpx;">
            {{ item.productPrice }}
          </view>
          <view style="width: 300rpx;">
            {{ item.state === 0 ? '待支付' : item.state === 1 ? '已支付' : item.state === 2 ? '已取消' : '无数据' }}
          </view>
          <view style="width: 600rpx;">
            {{ item.reasonFailure ? item.reasonFailure : '无数据' }}
          </view>
          <view style="width: 300rpx;">
            {{ item.payTime ? conversionTime(item.payTime) : '无数据' }}
          </view>
        </view>
      </view>
      <empty-component v-else height="60" msg="未查询到任何数据"/>
      <loading-data-component v-if="isFlushed"/>
    </scroll-view>
    <!--    弹出层-->
    <van-popup position="bottom" :show="isShow" @close="isShow = false">
      <van-picker :columns="statusArrays" show-toolbar text-key="value" title="选择类型" value-key="key"
                  @cancel="isShow=false" @confirm="chooseState"/>
    </van-popup>
    <loading-component ref="loadingRef" :degree="0.8" msg="正在获取订单数据"/>
  </view>
</template>

<script>
import {getOrdersPages} from "@/api/admin";
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
      status: '',
      statusArrays: [
        {
          key: '全部',
          value: -1
        },
        {
          key: '待支付',
          value: 0
        },
        {
          key: '已支付',
          value: 1
        },
        {
          key: '取消支付',
          value: 2
        }
      ],
      data: [],
      isFlushed: false,
      isShow: false
    };
  },
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getOrdersPage();
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  },
  methods: {
    conversionTime,
    /**
     * 选择类型
     * @param e
     */
    chooseState(e) {
      let value = e.detail.value.value;
      if (value === -1) {
        this.status = ""
        return
      }
      this.status = value
      this.data = []
      this.pageNum = 1;
      this.isShow = false
      this.getOrdersPage();
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
     * 搜索
     */
    handleSearch: function (e) {
      this.prompt = e.detail.value
      this.data = []
      this.pageNum = 1;
      this.getOrdersPage()
    },
    /**
     * 分页获取订单
     * @returns {Promise<void>}
     */
    getOrdersPage: async function () {
      try {
        this.isFlushed = true
        const res = await getOrdersPages(this.pageNum, this.prompt, this.status);
        let records = res.orders.records;
        console.log(records)
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
  margin-top: 40vh;
}

.popup_stepper {
  margin-left: 10rpx;
}

</style>
