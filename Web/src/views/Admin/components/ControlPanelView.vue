<template>
  <div class="s_container">
    <el-scrollbar height="100%">
      <el-form class="demo-form-inline" label-position="left">
        <el-form-item label="小程序环境" label-width="200px">
          <el-select v-model="form.wechatAppEnv" placeholder="小程序部署环境">
            <el-option label="本地调试" value="develop" />
            <el-option label="体验版本" value="trial" />
            <el-option label="正式环境" value="release" />
          </el-select>
        </el-form-item>
        <el-form-item label="拦截内容" label-width="200px">
          <el-input
            placeholder="如 (CHAT|GPT|OPENAI)"
            clearable
            v-model="form.sensitiveWords"
          />
        </el-form-item>
        <el-form-item label="代理地址(Clash)" label-width="200px">
          <el-input
            placeholder="如 127.0.0.1"
            clearable
            v-model="form.proxyIp"
          />
        </el-form-item>
        <el-form-item label="代理端口(Clash)" label-width="200px">
          <el-input placeholder="如 7890" clearable v-model="form.proxyPort" />
        </el-form-item>
        <el-form-item label="开启代理" label-width="200px">
          <el-switch v-model="form.enableProxy" />
        </el-form-item>
        <el-form-item label="文本拦截(小程序)" label-width="200px">
          <el-switch v-model="form.enableSensitive" />
        </el-form-item>
        <el-form-item label="开启GPT-4" label-width="200px">
          <el-switch v-model="form.enableGptPlus" />
        </el-form-item>
        <el-form-item label="小程序主页面" label-width="200px">
          <el-switch v-model="form.enableWechatAppMain" />
        </el-form-item>
      </el-form>

      <div class="btn-container">
        <el-button
          color="var(--themeColor2)"
          style="width: 200px"
          @click="onSubmit"
          >重载数据</el-button
        >
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import store from "@/store";
import { onMounted, ref } from "vue";
import { GetTerminal, PutTerminal } from "../../../../api/BSideApi";
import { ElLoading, ElNotification } from "element-plus";

export default {
  name: "ControlPanelView",
  computed: {
    store() {
      return store;
    },
  },
  setup: function () {
    let form = ref({
      wechatAppEnv: "",
      proxyIp: "",
      proxyPort: undefined,
      sensitiveWords: "",
      enableSensitive: false,
      enableGptPlus: false,
      enableWechatAppMain: false,
      enableProxy: false,
    });

    onMounted(() => {
      getTerminalConfig();
    });
    async function onSubmit() {
      let value = form.value;
      if (!value.wechatAppEnv) {
        ElNotification({
          title: "错误",
          message: "小程序环境不能为空",
          type: "error",
        });
        return;
      }
      if (!value.proxyIp) {
        ElNotification({
          title: "错误",
          message: "代理地址不能为空",
          type: "error",
        });
        return;
      }

      if (!value.proxyPort) {
        ElNotification({
          title: "错误",
          message: "代理端口不能为空",
          type: "error",
        });
        return;
      }
      if (!value.sensitiveWords) {
        ElNotification({
          title: "错误",
          message: "拦截文本不能为空",
          type: "error",
        });
        return;
      }
      try {
        ElLoading.service({
          fullscreen: true,
          text: "正在重载配置...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        await PutTerminal(value);
        await getTerminalConfig();
        ElLoading.service().close();
        ElNotification({
          title: "成功",
          message: "重载成功",
          type: "success",
        });
      } catch (e) {
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
      }
    }

    async function getTerminalConfig() {
      try {
        let newVar = await GetTerminal();
        if (newVar) {
          form.value = newVar;
        }
      } catch (e) {
        console.log(e);
      }
    }

    return {
      onSubmit,
      form,
    };
  },
};
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

::v-deep(
    .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
  ) {
  background: none !important;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 100px;
  padding-top: 10px;
}

::v-deep(
    .el-pagination .is-background .el-pager li:not(.is-disabled).is-active
  ) {
  background-color: rgb(125, 128, 255);
}

::v-deep(.el-table-fixed-column--right) {
  background: var(--bgColor1) !important;
}

::v-deep(
    .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
  ) {
  background: none;
}

/deep/ .el-input__inner {
  background: var(--bgColor2);

  font-weight: 400;
  color: var(--textColor2);
}

/deep/ .el-input__wrapper {
  background: var(--bgColor2);
  box-shadow: none;
}
</style>
