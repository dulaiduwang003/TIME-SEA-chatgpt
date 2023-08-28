<template>
  <div class="s_container">
    <el-scrollbar height="400px">
      <el-form :inline="true" class="demo-form-inline" label-position="left">
        <el-form-item label="SD绘图请求链" label-width="200px">
          <el-input placeholder="请设置SD请求链" clearable v-model="form.sdUrl"/>
        </el-form-item>
        <el-form-item label="MJ绘图请求链" label-width="200px">
          <el-input placeholder="请设置MJ请求链" clearable v-model="form.mjUrl"/>
        </el-form-item>
        <el-form-item label="GPT对话请求链" label-width="200px">
          <el-input placeholder="请设置GPT请求链" clearable v-model="form.openAiUrl"/>
        </el-form-item>
        <el-form-item label="标准GPT对话密钥" label-width="200px">
          <el-input placeholder="请设置密钥" clearable v-model="form.openKey"/>
        </el-form-item>
        <el-form-item label="增强GPT对话密钥" label-width="200px">
          <el-input placeholder="请设置密钥" clearable v-model="form.openPlusKey"/>
        </el-form-item>
        <el-form-item label="必应密钥" label-width="200px">
          <el-input placeholder="请设置密钥" clearable v-model="form.newBingCookie"/>
        </el-form-item>
        <el-form-item label="Claude原ID" label-width="200px">
          <el-input placeholder="请设置organizationUuid" clearable v-model="form.organizationUuid"/>
        </el-form-item>
        <el-form-item label="Claude连ID" label-width="200px">
          <el-input placeholder="请设置conversationUuid" clearable v-model="form.conversationUuid"/>
        </el-form-item>
        <el-form-item label="Claude密钥" label-width="200px">
          <el-input placeholder="请设置sessionKey" clearable v-model="form.sessionKey"/>
        </el-form-item>
        <el-form-item label="标准对话消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.gptFrequency"/>
        </el-form-item>
        <el-form-item label="增强对话消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.gptPlusFrequency"/>
        </el-form-item>
        <el-form-item label="新用户奖励次数" label-width="200px">
          <el-input placeholder="请设置奖励次数" clearable v-model="form.incentiveFrequency"/>
        </el-form-item>
        <el-form-item label="观看视频奖励次数" label-width="200px">
          <el-input placeholder="请设置奖励次数" clearable v-model="form.videoFrequency"/>
        </el-form-item>
        <el-form-item label="签到奖励次数" label-width="200px">
          <el-input placeholder="请设置奖励次数" clearable v-model="form.signInFrequency"/>
        </el-form-item>
        <el-form-item label="文生图(SD)消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.sdTextImageFrequency"/>
        </el-form-item>
        <el-form-item label="文生图(GPT)消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.gptTextImageFrequency"/>
        </el-form-item>
        <el-form-item label="文生图(MJ)消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.mjTextImageFrequency"/>
        </el-form-item>
        <el-form-item label="图生图(SD)消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.sdImage2Frequency"/>
        </el-form-item>
        <el-form-item label="图生图(MJ)消耗次数" label-width="200px">
          <el-input placeholder="请设置消耗次数" clearable v-model="form.mjImage2Frequency"/>
        </el-form-item>
      </el-form>

      <div class="btn-container">
        <el-button color="#626aef" style="width: 200px" @click="onSubmit">重载数据</el-button>
      </div>
    </el-scrollbar>
  </div>

</template>

<script>

import store from "@/store";
import {onMounted, ref} from "vue";
import {ElLoading, ElNotification} from "element-plus";
import {GetServerConfig, PutServerConfig} from "../../../../api/BSideApi";


export default {
  name: "ServerPanelView",
  computed: {
    store() {
      return store
    }
  },
  setup() {
    const form = ref({
      sdUrl: "",
      mjUrl: "",
      openAiUrl: "",
      openKey: "",
      openPlusKey: "",
      gptPlusFrequency: undefined,
      newBingCookie: "",
      incentiveFrequency: undefined,
      videoFrequency: undefined,
      signInFrequency: undefined,
      sdImage2Frequency: undefined,
      sdTextImageFrequency: undefined,
      mjImage2Frequency: undefined,
      mjTextImageFrequency: undefined,
      gptFrequency: undefined,
      gptTextImageFrequency: undefined,
      organizationUuid: "",
      conversationUuid: "",
      sessionKey: ""
    })

    onMounted(() => {
      if ( store.getters.userinfo&&  store.getters.userinfo.type==='ADMIN') {
        getServerConfig()
      }

    })

    async function getServerConfig() {
      let promise = await GetServerConfig();
      if (promise) {
        form.value = promise
      }
    }

    async function onSubmit() {
      let value = form.value;
      for (let key in value) {
        if (!value[key]) {
          ElNotification({
            title: '错误',
            message: key + '不能为空',
            type: 'error',
          })
          return
        }
      }

      try {
        ElLoading.service({
          fullscreen: true,
          text: '正在重载数据...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        await PutServerConfig(value);
        // 关闭加载图标
        ElLoading.service().close();
        // 弹出退出登录成功提示框
        ElNotification({
          message: '重载数据成功',
          type: 'success',
        });
      } catch (e) {
        ElNotification({
          title: '错误',
          message: e,
          type: 'error',
        })
      }

    }

    return {
      onSubmit,
      form
    };
  }

}
</script>

<style scoped>
@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

::v-deep(.el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell ) {
  background: none !important;


}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 100px;
  padding-top: 70px
}

::v-deep(.el-pagination .is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgb(125, 128, 255);
}


::v-deep(.el-table-fixed-column--right) {
  background: rgb(27, 30, 32) !important;
}

::v-deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgb(125, 128, 255) !important;
}

::v-deep(.el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell ) {
  background: none;

}

.s_container {
  padding-top: 70px;
  padding-left: 100px;
}
/deep/.el-input__inner {

  background: rgb(39, 41, 42);

  font-weight: 400;
  color: #b7b7b7;
}
/deep/.el-input__wrapper{
  background: rgb(39, 41, 42);
  box-shadow: none;
}



</style>
