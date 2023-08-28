<template>
  <div class="fade-div fade-in">
    <div class="cash-container cash-title">
      <div class="cash-title-introduce">
        <img class="cash-title-img" alt="支付宝支付" src="../assets/alipay.svg">
        <span class="cash-title-text">支付宝收银台</span>
      </div>
    </div>
    <div class="cash-container cash-order">
      <div class="cash-info">
        <div class="cash-code-container" v-show="!showSucceed">
          <div>
            <div>
              <div class="cash-qc-img-container">
                <img class="cash-qc-img" alt="支付宝扫一扫" :src="outcome.qrCode">
                <div class="cover-div" v-show="showCover">
                  二维码已经失效
                </div>
              </div>
            </div>
            <div class="cash-pay-prompt">
              <div>
                <img src="../assets/sweep.svg" alt="" style="width: 20px"/>
              </div>
              <div class="cash-pay-text">
                打开手机支付宝扫一扫完成付款
              </div>
            </div>
          </div>
          <div class="cash-order-data">
            <div class="cash-o-data">商品名称 :&nbsp;&nbsp;{{ outcome.productName }}</div>
            <div class="cash-o-data">商户订单号 :&nbsp;&nbsp;{{ outcome.ordersId }}</div>
            <div class="cash-o-data">创建时间 :&nbsp;&nbsp;{{ outcome.createdTime }}</div>
            <div class="cash-amount">
              <div class="cash-o-prompt">需付款&nbsp;&nbsp;&nbsp;</div>
              <div class="cash-o-amount">￥{{ outcome.productPrice }} 元</div>
            </div>
          </div>
        </div>
        <div class="pay-succeed" v-show="showSucceed">
          <div>
            <el-icon color="#7d80ff" size="50px">
              <CircleCheckFilled/>
            </el-icon>
          </div>
          <div class="pay-succeed-title">
            谢谢你的赞赏!
          </div>
        </div>
        <div style="padding-bottom: 190px" v-show="showSucceed">
          <div class="cash-o-data pay-succeed-no">商户订单号 :&nbsp;&nbsp;{{ outcome.ordersId }}
          </div>
          <el-button size="large" round @click="router().push({ path: '/Orders' })" color="rgb(125,128,255)" style="color: white">查看我的赞赏记录</el-button>
        </div>
        <div style="font-size: 12px;color: #b0b0b0">对订单有疑问 可在微信小程序端中联系小程序客服</div>
      </div>

    </div>
  </div>
</template>
<script>


import {CircleCheckFilled} from "@element-plus/icons-vue";
import router from "@/router";

export default {
  name: "PurchaseView",
  methods: {
    router() {
      return router
    }
  },
  props: {
    outcome: Object,
    showCover: Object,
    showSucceed: Object
  },
  components: {CircleCheckFilled},
  setup() {

  }
}
</script>

<style scoped>
.cash-container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

}

.pay-succeed {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px
}

.pay-succeed-title {
  font-size: 30px;
  padding-left: 15px;
  color: white;
}

.pay-succeed-no {
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #bdbdbd;
}

.fade-div {
  opacity: 0;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  /* add fill mode */
}

.fade-in {
  animation-name: fade-in;
}

.fade-out {
  animation-name: fade-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.cash-qc-img-container {
  position: relative;
}

.cover-div {
  content: "二维码已经失效";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
}

.cash-qc-img {
  width: 350px;
  height: 350px
}

.cash-order-data {
  padding-top: 70px;
  padding-right: 100px;
  text-align: left;
  font-size: 14px;
  color: #ffffff
}

.cash-o-data {
  margin-bottom: 15px
}

.cash-o-amount {
  font-size: 25px;
  font-weight: 500
}

.cash-o-prompt {
  padding-top: 10px
}

.cash-amount {
  margin-top: 100px;
  display: flex;
}

.cash-pay-prompt {
  display: flex;
  align-items: center;
  padding-left: 55px
}

.cash-pay-text {
  color: #838383;
  font-size: 13px;
  padding-left: 10px
}

.cash-info {
  background: rgb(27, 30, 32);
  width: 1100px;
  height: 500px;
}

.cash-code-container {
  display: flex;
  justify-content: space-between;
  padding: 50px 120px;
}

.cash-title-img {
  width: 35px
}

.cash-title-text {
  padding-left: 10px;
  font-size: 18px
}

.cash-order {
  margin-top: 20px;
  height: 540px;

}

.cash-title {
  height: 70px;
  background-color: #7d80ff;
}

.cash-title-introduce {
  color: white;
  background: rgb(27, 30, 32);
  width: 1100px;
  height: 70px;
  margin-top: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center
}

@media (max-width: 767px) {
  .cash-container {
    flex-direction: column;
  }

  .cash-info {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }

  .cash-code-container {
    flex-direction: column;
    padding: 20px;
  }

  .cash-qc-img {
    width: 100%;
    height: auto;
    margin-top: -30px;
  }

  .cash-order-data {
    padding: 20px;
    font-size: 12px;
  }

  .cash-amount {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .cash-pay-prompt {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20%;
  }

  .cash-pay-text {
    font-size: 12px;
  }

  .pay-succeed {
    padding-top: 80px;
  }

  .pay-succeed-title {
    font-size: 20px;
    color: #ffffff;
    padding-left: 10px;
  }

  .pay-succeed-no {
    font-size: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .fade-div {
    animation-duration: 0.3s;
  }

  .cash-title-introduce {
    width: 100%;
    margin-top: -30px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    padding-top: 60px;
    border-radius: 0px;
  }
}
</style>
