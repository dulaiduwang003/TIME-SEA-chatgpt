<template>
  <view class="container">
    <view class="row">
      <view class="key">
        OPEN-AI-URL请求链
      </view>
      <view>
        <input type="text" placeholder="请设置open ai请求链" v-model="form.openAiUrl" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        SD绘图请求链
      </view>
      <view>
        <input type="text" placeholder="请设置stable diffusion请求链" v-model="form.sdUrl" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        MJ绘图请求链
      </view>
      <view>
        <input type="text" placeholder="请设置stable diffusion请求链" v-model="form.mjUrl" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        必应Cookie
      </view>
      <view>
        <input type="text" placeholder="请设置必应Cookie" v-model="form.newBingCookie" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        克劳德原ID
      </view>
      <view>
        <input type="text" placeholder="请设置organizationUuid" v-model="form.organizationUuid" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        克劳德连ID
      </view>
      <view>
        <input type="text" placeholder="请设置conversationUuid" v-model="form.conversationUuid" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        克劳德sessionKey
      </view>
      <view>
        <input type="text" placeholder="请设置sessionKey" v-model="form.sessionKey" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        OPEN-KEY
      </view>
      <view>
        <input type="text" placeholder="请设置OPEN-KEY" v-model="form.openKey" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        OPEN-PLUS-KEY
      </view>
      <view>
        <input type="text" placeholder="请设置OPEN-PLUS-KEY" v-model="form.openPlusKey" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        默认赠送次数
      </view>
      <view>
        <input type="number" placeholder="请设置默认赠送次数" v-model="form.incentiveFrequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        签到赠送次数
      </view>
      <view>
        <input type="number" placeholder="请设置签到赠送次数" v-model="form.signInFrequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        标准文生图消耗次数
      </view>
      <view>
        <input type="number" placeholder="请设置标准文生图消耗次数" v-model="form.gptTextImageFrequency"
               maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        SD图生图消耗次数
      </view>
      <view>
        <input type="number" placeholder="请设置图生图消耗次数" v-model="form.sdImage2Frequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        SD文生图消耗次数
      </view>
      <view>
        <input type="number" placeholder="请设置文生图消耗次数" v-model="form.sdTextImageFrequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        MJ图生图消耗次数
      </view>
      <view>
        <input type="number" placeholder="请设置图生图消耗次数" v-model="form.mjImage2Frequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        MJ文生图消耗次数
      </view>
      <view>
        <input type="number" placeholder="请设置文生图消耗次数" v-model="form.mjTextImageFrequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        标准对话
      </view>
      <view>
        <input type="number" placeholder="请设置BOT对话消耗次数" v-model="form.gptFrequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        增强对话
      </view>
      <view>
        <input type="number" placeholder="请设置BOT对话消耗次数" v-model="form.gptPlusFrequency" maxlength="-1"/>
      </view>
    </view>
    <view class="row">
      <view class="key">
        观看视频奖励次数
      </view>
      <view>
        <input type="number" placeholder="请设置观看视频奖励次数" v-model="form.videoFrequency" maxlength="-1"/>
      </view>
    </view>
    <view style="margin-top: 38vh">
      <van-button type="primary" round block color="#7232dd" @click="putServerConfiguration">重载数据</van-button>
    </view>
    <loading-component ref="loadingRef" msg="正在读取服务器配置" :degree="0.8"/>
  </view>
</template>

<script>
import {getServerConfig, putServerConfig} from "@/api/admin";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";

const requiredFields = ['sdUrl', 'openKey', 'incentiveFrequency', 'videoFrequency', 'sdImage2Frequency', 'sdTextImageFrequency', 'gptFrequency', 'signInFrequency', 'gptTextImageFrequency', 'newBingCookie', 'organizationUuid', 'conversationUuid', 'sessionKey', 'gptPlusFrequency', 'openPlusKey'];
const fieldNames = {
  'sdUrl': 'SD—API',
  'openKey': 'OPEN',
  'incentiveFrequency': '第一次注册赠送次数',
  'videoFrequency': '视频奖励',
  'sdImage2Frequency': 'SD图生图消耗次数',
  'sdTextImageFrequency': 'SD文生图消耗次数',
  'gptFrequency': '标准消耗次数',
  'signInFrequency': '签到赠送次数',
  'gptTextImageFrequency': '标准文生图消耗次数',
  'newBingCookie': '必应Cookie',
  'organizationUuid': 'organizationUuid',
  'conversationUuid': 'conversationUuid',
  'sessionKey': 'sessionKey',
  'gptPlusFrequency': '增强消耗次数',
  'openPlusKey': '增强KEY',
};

export default {
  components: {LoadingComponent},
  data() {
    return {
      form: {
        sdUrl: '',
        openKey: '',
        incentiveFrequency: undefined,
        videoFrequency: undefined,
        sdImage2Frequency: undefined,
        sdTextImageFrequency: undefined,
        gptFrequency: undefined,
        signInFrequency: undefined,
        mjTextImageFrequency: undefined,
        openAiUrl: undefined,
        mjImage2Frequency: undefined,
        gptTextImageFrequency: undefined,
        newBingCookie: '',
        organizationUuid: '',
        conversationUuid: '',
        sessionKey: '',
        openPlusKey: '',
        gptPlusFrequency: undefined
      }
    };
  },
  onLoad() {

    this.getServerConfiguration()

  },
  methods: {
    /**
     * 获取服务器配置
     * @returns {Promise<void>}
     */
    getServerConfiguration: async function () {
      let loadingRef = this.$refs.loadingRef;
      try {
        loadingRef.openShow();
        let serverConfig = await getServerConfig();
        if (serverConfig) {
          this.form = serverConfig
        }
        loadingRef.closeShow();
      } catch (e) {
        loadingRef.closeShow();
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        });
      }

    },
    /**
     * 更新服务器配置
     * @returns {Promise<void>}
     */
    putServerConfiguration: async function () {
      for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!this.form[field]) {
          uni.showToast({
            title: `请填写${fieldNames[field]}`,
            icon: 'none',
            duration: 2000
          });
          return;
        }
      }
      try {
        uni.showLoading({
          title: '正在重载',
          mask: true
        });
        let promise = await putServerConfig(this.form);
        uni.hideLoading()
        uni.showToast({
          title: '重载完成',
          icon: 'none',
          duration: 2000
        });
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
}
</script>

<style lang="scss">
.container {
  font-size: 26rpx;
  padding: 20rpx;
  color: #d1d1d1
}

input {
  width: 400rpx;
}

.row {
  display: flex;
  align-items: center;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #ffffff;
  margin-bottom: 30rpx;

}

.key {
  width: 280rpx
}

</style>
