<template>
  <el-dialog v-model="dialogVisible" width="400px" class="login-dialog" :show-close="false" align-center @close="close"
             style="border-radius: 10px;overflow-x: hidden">
    <div class="login-box">
      <div class="head">
        <img :src="require('../assets/login-header.png')" alt="" style="height:80px"/>
      </div>
      <div style="text-align: center;font-size: 15px;font-weight: 550;padding-top: 30px">微信登录</div>
      <div class="form">
        <div class="content" v-if="qrCode">
          <img :src="qrCode" style="width: 160px;height: 160px">
          <div class="cover-div" v-if="isFailure">
            二维码已失效
          </div>
        </div>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;padding-top: 20px" v-if="isFailure">
        <el-button type="primary" color="#626aef" @click="getLoginQRCode()">重新生成</el-button>
      </div>
      <div style="text-align: center;padding-top: 30px;font-size: 8px;padding-bottom: 50px">
        打开微信扫一扫快速登录/注册
      </div>
    </div>
  </el-dialog>
</template>

<script>
import {defineComponent, ref, watch} from "vue";

import {GetUserInfo, GetWechatCode, isQrCodeLoginSucceed} from "../../api/BSideApi";
import {ElNotification} from "element-plus";
import store from "@/store";


export default defineComponent({
  name: "LoginDialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    let qrCode = ref('')
    let loginLoading = ref(false)
    let dialogVisible = ref(false)
    let isLogin = ref(true)
    // eslint-disable-next-line no-unused-vars
    let verifyCode = ref('')
    let isFailure = ref(false)
    let timerId;
    let lock = ref(false)
    watch(() => props.show, (newValue) => {
      if (newValue) {
        getLoginQRCode()
        dialogVisible.value = true

      }
    }, {
      immediate: true
    })


    /**
     * 获取登录二维码
     */
    async function getLoginQRCode() {
      try {
        let newVar = await GetWechatCode();
        if (newVar) {
          isFailure.value = false
          verifyCode.value = newVar.verifyCode
          qrCode.value = newVar.qrCode
          timerId = setInterval(() => {
            scanCodeLoginResults();
          }, 5000);
        }
      } catch (e) {
        console.log(e)
      }
    }

    /**
     * 扫码登录结果
     * @returns {Promise<void>}
     */
    async function scanCodeLoginResults() {
      try {
        let promise = await isQrCodeLoginSucceed(verifyCode.value);
        if (promise) {
          if (!lock.value) {
            lock.value = true;
            clearInterval(timerId);
            localStorage.setItem('token', promise);
            dialogVisible.value = false
            loginLoading.value = false
            try {
              let res = await GetUserInfo()
              console.log(res)
              store.commit("setUserinfo", res);
              // eslint-disable-next-line no-empty
            } catch (e) {
              console.log(e)
            }
            ElNotification({
              title: '登录成功',
              message: '欢迎来到TIME-SEA-PLUS',
              type: 'success',
            })
            clearInterval(timerId);
            lock.value = false
          }

        }
      } catch (e) {
        clearInterval(timerId);
        isFailure.value = true
      }

    }


    function close() {
      emit('close')
    }

    return {
      qrCode,
      loginLoading,
      dialogVisible,
      close,
      isLogin,
      getLoginQRCode,
      isFailure
    }
  }
});
</script>

<style scoped>

.inputBox {
  height: 40px;
  width: 300px;
}

.login-box {

  overflow: hidden;
  width: 100%;
  padding: 0;
  background: #FFFFFF;
}

.cover-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.login-box > .head > img {
  display: block;
  width: 100%;
  margin: 0 auto;
  user-select: none;
}

.form {
  position: relative;
}

.submit-button {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  margin-top: 15px;
  --el-button-bg-color: #686efe;
  border: none;
}

.submit-button:hover, .submit-button:focus, .submit-button:active {
  background-color: #7d80ff;
  outline: 0;
}


.form > .content {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.profile-avatar {
  display: block;
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  top: -50px;
  right: calc(50% - 50px);
  z-index: 2;
  user-select: none;
}

.switch {
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
</style>
