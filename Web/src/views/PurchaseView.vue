<template>
          <div class="panel-container">
            <div class="body" v-if="mainPageVisible">
              <div class="article" v-if="store.getters.userinfo">我要赞助站点运行</div>
      <div class="introduce" v-if="store.getters.userinfo">
        赞赏作者也可获得相应Ai币
      </div>
      <ViewState
        class="state"
        v-if="!store.getters.userinfo"
        Type="error"
        ErrorText="登录后查看"
        IsShowBottom
        ButtonText="登录"
        @ClickTheButton="loginVisible = true"
      />
      <ViewState
        class="state"
        v-else-if="load"
        LoadText="正在加载，请稍后..."
      />
      <ViewState
        class="state"
        v-else-if="empty"
        Type="empty"
        ErrorText="暂无任何数据"
      />
      <ViewState
        class="state"
        v-else-if="error"
        @ClickTheButton="init"
        Type="error"
        ErrorText="加载错误，请重试"
        IsShowBottom
        ButtonText="重新加载"
      />
      <div class="wrapper" v-else>
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in productList"
            :key="index"
            :xs="24"
            :sm="12"
            :md="8"
          >
            <div
              class="item"
              @click="payChoose(item.productId, item.frequency)"
            >
              <div class="wrapper-title">{{ item.productName }}</div>
              <div class="quantity">{{ item.frequency }} Ai币</div>
              <div class="quantity" style="font-size: 15px; padding-top: 10px">
                ￥{{ item.productPrice }}
              </div>
              <div class="card-introduce">
                <div
                  class="function-box"
                  v-for="(item2, index2) in introduce"
                  :key="index2"
                >
                  <el-icon color="var(--themeColor1)" size="20px">
                    <CircleCheckFilled />
                  </el-icon>
                  <div style="padding-left: 10px; color: #a7a7a7">
                    <div>{{ item2 }}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-dialog
        v-model="payVisible"
        width="340px"
        v-if="productFrequency"
        style="background-color: var(--bgColor1)"
      >
        <div class="pay-title">
          选择支付方式后点击“跳转至收银台”打开支付页面支付
        </div>
        <div style="text-align: center">
          <el-radio label="0" v-model="payType">
            <div class="pay">
              <img
                class="alipay-img"
                alt="支付宝支付"
                src="../assets/alipay.svg"
              />
              <div>支付宝支付</div>
            </div>
          </el-radio>
          <!--          <el-radio label="1" v-model="payType">-->
          <!--            <div class="pay">-->
          <!--              <img class="wxpay-img" alt="微信支付"-->
          <!--                   src="../assets/wxpay.svg">-->
          <!--              <div>微信支付</div>-->
          <!--            </div>-->
          <!--          </el-radio>-->
        </div>
        <template #footer>
          <span>
            <el-button class="buttonTheme" @click="payVisible = false"
              >不了, 谢谢</el-button
            >
            <el-button class="buttonTheme themeColor" @click="alipayPay"
              >跳转至收银台</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
    <LoginDialog
      :show="loginVisible"
      @close="loginVisible = false"
      @loginSucceeded="init"
    />
    <!--        支付宝支付-->
    <cash-register
      v-if="!mainPageVisible"
      :outcome="outcome"
      :showCover="showCover"
      :showSucceed="showSucceed"
    />
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import {
  alipayIsSucceed,
  alipayPayQrCode,
  GetProducts,
  GetUserInfo,
} from "../../api/BSideApi";
import { ElLoading, ElNotification } from "element-plus";
import CashRegister from "@/components/CashRegister.vue";
import { CircleCheckFilled } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import router from "@/router";
import ViewState from "@/components/ViewState.vue";
import LoginDialog from "@/components/LoginDialog.vue";
import store from "@/store";

export default {
  name: "PurchaseView",
  computed: {
    store() {
      return store;
    },
  },
  components: { LoginDialog, ViewState, CircleCheckFilled, CashRegister },
  methods: {
    router() {
      return router;
    },
  },
  setup() {
    let loginVisible = ref(false);
    let store = useStore();
    const introduce = ref([
      "双端次数同步",
      "全功能使用",
      "(小程序)绘画自动保存",
    ]);
    const payVisible = ref(false);
    const productList = ref([]);
    const payType = ref("0");
    const productFrequency = ref("");
    const productId = ref({});
    const mainPageVisible = ref(true);
    const showCover = ref(false);
    const showSucceed = ref(false);

    let load = ref(false);
    let empty = ref(false);
    let error = ref(false);
    //生成结果
    const outcome = ref({});

    async function init() {
      try {
        load.value = true;
        const res = await GetProducts();
        if (res.length) {
          productList.value = res;
        } else {
          empty.value = true;
        }
        load.value = false;
        error.value = false;
      } catch (e) {
        load.value = false;
        error.value = true;
      }
    }

    async function getUser() {
      try {
        let res = await GetUserInfo();
        store.commit("setUserinfo", res);
      } catch (e) {
        ElNotification({
          title: "出现错误",
          message: e,
          type: "error",
        });
      }
    }

    async function payChoose(id, frequency) {
      productId.value = id;
      productFrequency.value = frequency;
      payVisible.value = true;
    }

    async function alipayPay() {
      try {
        ElLoading.service({
          fullscreen: true,
          text: "正在构建订单...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        //构建支付宝订单
        outcome.value = await alipayPayQrCode(productId.value);
        payVisible.value = false;
        mainPageVisible.value = false;
        //3秒检查一下订单是否支付成功
        let timerId = setInterval(async function () {
          let res = await alipayIsSucceed(outcome.value.ordersId);

          if (res === "PAID") {
            ElNotification({
              title: "成功",
              message: "赞赏成功，可在我的赞赏中查看该赞赏记录",
              type: "success",
            });
            showSucceed.value = true;
            await getUser();
            clearInterval(timerId);
          } else if (res === "IS_CLOSED") {
            showCover.value = true;
            ElNotification({
              title: "订单已关闭",
              message: "长时间未支付，订单已关闭",
              type: "error",
            });
            clearInterval(timerId);
          }
        }, 5000);
      } catch (e) {
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
        mainPageVisible.value = true;
      } finally {
        ElLoading.service().close();
      }
    }

    onMounted(() => {
      if (store.getters.userinfo) {
        init();
      }
    });
    return {
      load,
      error,
      empty,
      showSucceed,
      showCover,
      outcome,
      mainPageVisible,
      alipayPay,
      payChoose,
      init,
      introduce,
      productList,
      payVisible,
      payType,
      loginVisible,
      productFrequency,
    };
  },
};
</script>

<style scoped>
.body {
  animation: explainAnimation 0.3s;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 60px 20px 0;
  display: flex;
  overflow: auto;
}

.pay-title {
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 13px;
  padding-bottom: 30px;
}

.pay {
  display: flex;
  justify-items: center;
  align-items: center;
}

.panel-container {
  overflow: auto;
  overflow-y: scroll;
  height: 100%;
  background-color: var(--bgColor2);
}

.alipay-img {
  width: 20px;
  height: 20px;
  padding-left: 5px;
  padding-right: 10px;
}

.wxpay-img {
  width: 25px;
  height: 25px;
  padding-left: 5px;
  padding-right: 10px;
}

.wrapper-title {
  background-color: var(--themeColor1);
  border-radius: 10px 10px 0 0;
  color: var(--themeTextColor);
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  font-weight: 600;
}

@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.article {
  text-align: left;
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: var(--textColor1);
}

.wrapper {
  padding: 40px 0;
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
}

.item {
  text-align: center;
  background-color: var(--bgColor1);
  cursor: pointer;
  width: 100%;
  height: 400px;
  border-radius: 8px;
  font-size: 15px;
  color: var(--textColor1);
  margin-bottom: 20px;
}

.introduce {
  font-size: 14px;
  margin-top: 12px;
  color: #838383;
}

.card-introduce {
  color: rgb(108, 117, 125);
  margin-top: 50px;
  text-align: left;
  padding-left: 10%;
  font-size: 14px;
}

.function-box {
  align-items: center;
  display: flex;
  padding-bottom: 15px;
}

.quantity {
  padding-top: 50px;
  color: var(--textColor1);
  font-size: 38px;
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

<style lang="scss" scoped>
:deep(.buttonTheme) {
  background: var(--bgColor3);
  color: var(--textColor1);
  border: none;
  &.themeColor {
    background: var(--themeColor1);
    color: var(--themeTextColor);
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>
