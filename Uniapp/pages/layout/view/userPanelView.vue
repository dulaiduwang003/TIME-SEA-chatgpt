<template>
  <view class="container">
    <view class="search">
      <van-icon name="search"/>
      <input type="text" placeholder="用户昵称/ID" confirm-type="search" @confirm="handleSearch($event)"></input>
    </view>
    <view style="border-radius: 20rpx;overflow-x: hidden;background-color: #1c1c1c">
      <scroll-view scroll-x scroll-y @scrolltolower="getUserPage">
        <view class="list_container" v-if="data.length>0">
          <view class="list_meter_header">
            <view>
              序号
            </view>
            <view>
              用户昵称
            </view>
            <view>
              使用次数
            </view>
            <view>
              注册时间
            </view>
            <view>
              最后使用时间
            </view>
          </view>
          <view class="list_surface" v-for="(item,index) in data" :key="index"
                @click="handleUpdate(item)">
            <view>
              {{ index + 1 }}
            </view>
            <view>
              {{ item.userName }}
            </view>
            <view>
              {{ item.frequency }}
            </view>
            <view>
              {{ conversionTime(item.createdTime) }}
            </view>
            <view>
              {{ item.lastOperationTime ? conversionTime(parseInt(item.lastOperationTime)) : '7天内无访问' }}
            </view>
          </view>
        </view>
        <empty-component msg="未查找到任何用户" height="60" v-else/>
        <loading-data-component v-if="isFlushed"/>
      </scroll-view>
    </view>

    <!--    弹出层-->
    <van-popup
        :show="isShow"
        position="bottom"
        closeable
        @close="this.isShow = false"
        round
    >
      <view class="popup_container">
        <view class="popup_title">修改用户数据</view>
        <view class="popup_info">
          <view class="popup_label">选中用户昵称</view>
          <view class="popup_value">{{ userName }}</view>
        </view>
        <view class="popup_info">
          <view class="popup_label">次数</view>
          <view class="popup_value">
            <van-stepper class="popup_stepper" :value="form.frequency" input-width="80" step="10" min="0"
                         @change="this.form.frequency=$event.detail"/>
          </view>
        </view>
        <view class="van-button">
          <van-button type="primary" round block color="#7f80fd" @click="uploadReLoad">重载数据</van-button>
        </view>
      </view>
    </van-popup>
    <loading-component ref="loadingRef" msg="正在获取用户数据" :degree="0.8"/>
  </view>
</template>

<script>
import {getUserPages, updateUserById} from "@/api/admin";
import {conversionTime} from "@/utils/date";
import EmptyComponent from "@/wxcomponents/components/emptyComponent.vue";
import LoadingDataComponent from "@/pages/layout/view/components/loadingDataComponent.vue";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";
import env from "@/utils/env";

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
        frequency: undefined,
        userId: undefined,
      },
      userName: ''
    };
  },
  onLoad() {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.getUserPage();
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  },
  methods: {
    conversionTime,
    /**
     * 转递
     */
    handleUpdate: async function (item) {
      const {userId, frequency, userName} = item;
      this.form.frequency = frequency;
      this.userName = userName
      this.form.userId = userId
      this.isShow = true;
    },
    /**
     * 提交修改
     */
    uploadReLoad: async function () {
      console.log(this.form)
      try {
        uni.showLoading({
          title: '正在修改ing',
          mask: true
        });

        let newVar = await updateUserById(this.form);
        uni.hideLoading()
        this.prompt = ''
        this.pageNum = 1
        this.data = []
        await this.getUserPage();
        uni.showToast({
          icon: 'none',
          duration: 2000,
          title: '修改成功'
        });
        this.isShow = false
      } catch (e) {
        uni.hideLoading()
        uni.showToast({
          icon: 'none',
          duration: 2000,
          title: e
        });
      }

    },
    /**
     * 搜索
     */
    handleSearch: function (e) {
      this.prompt = e.detail.value
      this.data = []
      this.pageNum = 1;
      this.getUserPage()
    },
    /**
     * 分页获取用户信息
     * @returns {Promise<void>}
     */
    getUserPage: async function () {
      try {
        this.isFlushed = true
        const {records} = await getUserPages(this.pageNum, this.prompt);
        records.forEach(r => {
          if (!r.userName) {
            r.userName = env.user
          }
        })
        if (records.length > 0) {
          this.pageNum = this.pageNum + 1
          this.data.push(...records)
        }

      } catch (e) {
        console.log('获取用户数据失败')
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
  width: 600rpx;
}

scroll-view {
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
