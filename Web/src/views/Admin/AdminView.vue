<template>
  <div class="body">
    <div class="container">
      <el-tabs v-model="activeName" v-if="store.getters.userinfo&&  store.getters.userinfo.type==='ADMIN'">
        <el-tab-pane label="用户管理" name="first">
          <user-panel-view/>
        </el-tab-pane>
        <el-tab-pane label="服务器配置" name="second">
          <server-panel-view/>
        </el-tab-pane>
        <el-tab-pane label="兑换管理" name="third">
          <redemption-code-view/>
        </el-tab-pane>
        <el-tab-pane label="商品管理" name="four">
          <product-view/>
        </el-tab-pane>
        <el-tab-pane label="订单数据" name="fifth">
          <orders-data-view/>
        </el-tab-pane>
        <el-tab-pane label="终端控制" name="sixth">
          <control-panel-view/>
        </el-tab-pane>
      </el-tabs>
      <div v-else class="no_data">
        <ViewState class="state" Type="error"
                   ErrorText="当前页面不见了"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import store from "@/store";
import UserPanelView from "@/views/Admin/components/UserPanelView.vue";
import ServerPanelView from "@/views/Admin/components/ServerPanelView.vue";
import RedemptionCodeView from "@/views/Admin/components/RedemptionCodeView.vue";
import ProductView from "@/views/Admin/components/ProductView.vue";
import OrdersDataView from "@/views/Admin/components/OrdersDataView.vue";
import ViewState from "@/components/ViewState.vue";
import ControlPanelView from "@/views/Admin/components/ControlPanelView.vue";


export default {
  name: "PromptList",
  components: {
    ControlPanelView,
    ViewState, OrdersDataView, ProductView, RedemptionCodeView, ServerPanelView, UserPanelView},
  computed: {
    store() {
      return store
    }
  },
  setup() {
    const activeName = ref('first')

    return {
      activeName,
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

/deep/ .el-tabs__nav-wrap::after {
  background: rgb(27, 30, 32);
}

.container {
  animation: explainAnimation 0.3s;
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px 100px;
  margin-top: 30px;
  height: 580px;
  background-color: rgb(27, 30, 32);
  border-radius: 8px;
}

.body {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 20px 120px;
  display: flex;
  overflow: auto;
  background-color: rgb(38, 42, 44);
}

::v-deep(.el-tabs__item.is-active) {
  color: #ffffff
}

::v-deep(.el-tabs__item:hover) {
  color: #959595;
}

::v-deep(.el-tabs__active-bar) {
  background-color: #d593ff;
}

::v-deep(.el-tabs__item) {
  color: #626262;
}
.no_data{
  height: 540px;margin-top: 10px
}
</style>
