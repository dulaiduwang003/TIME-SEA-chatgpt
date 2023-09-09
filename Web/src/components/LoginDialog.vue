<template>
  <div>
    <!--    登录或注册-->
    <el-dialog
      v-model="dialogVisible"
      width="420px"
      class="login-dialog"
      :show-close="false"
      align-center
      @close="close"
      style="border-radius: 10px; overflow-x: hidden"
    >
      <div class="login-box">
        <div class="head">
          <div class="head_img"></div>
        </div>
        <div class="login-title">
          <div
            :class="loginType === 0 ? 'login-selected' : ''"
            @click="switchLoginType(0)"
          >
            微信登录
          </div>
          <div
            :class="loginType === 1 ? 'login-selected' : ''"
            @click="switchLoginType(1)"
          >
            {{ isLogin ? "邮箱登录" : "注册账号" }}
          </div>
        </div>
        <!--微信扫码登录-->
        <div v-if="loginType === 0">
          <div class="form">
            <div class="animation" v-if="!qrCodeLoaded">
              <view class="loading-model">
                <view class="loader"></view>
              </view>
            </div>
            <div class="content" v-if="qrCode">
              <div style="position: relative; border-radius: 5px">
                <img
                  :src="qrCode"
                  class="qc_code"
                  :class="store.getters.themeInfo.className"
                  alt="二维码"
                />
                <div class="cover-div" v-if="isFailure">二维码已失效</div>
              </div>
            </div>
          </div>
          <div class="btn-generate" v-if="isFailure">
            <el-button type="primary" color="#626aef" @click="getLoginQRCode()"
              >重新生成
            </el-button>
          </div>
          <div class="h5 prompt-style" v-if="!loginAnimation">
            正在加载中...
          </div>
          <div class="h5 prompt-style" v-if="!promptAnimation">
            使用微信扫一扫快速登录后使用
          </div>
        </div>
        <!--登录-->
        <div
          v-if="loginType === 1"
          style="margin-top: 40px; padding: 0 60px 50px"
        >
          <el-form @keyup.enter="onSubmit" ref="formRef" size="large">
            <el-form-item prop="username">
              <el-input
                type="text"
                clearable
                v-model="emailForm.email"
                placeholder="请输入邮箱"
                autocomplete="“off”"
              >
                <template #prefix>
                  <el-icon :size="16" color="var(&#45;&#45;textColor2)">
                    <UserFilled />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="emailForm.password"
                type="password"
                placeholder="请输入密码"
                show-password
                autocomplete="“off”"
              >
                <template #prefix>
                  <el-icon :size="16" color="var(&#45;&#45;textColor2)">
                    <Platform />
                  </el-icon>
                </template>
              </el-input>
              <div
                style="
                  text-align: right;
                  color: #929292;
                  font-size: 10px;
                  display: flex;
                "
                @click="isLogin = !isLogin"
                v-if="isLogin"
              >
                <div>前往注册</div>
                <div style="padding-left: 10px" @click="passwordDialog">
                  找回密码
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="code" v-show="isLogin === false">
              <el-input
                maxlength="6"
                minlength="6"
                ref="codeRef"
                type="text"
                clearable
                v-model="emailForm.code"
                placeholder="请输入验证码"
                autocomplete="“off”"
              >
                >
                <template #prefix>
                  <el-icon :size="16" color="var(&#45;&#45;textColor2)">
                    <Connection />
                  </el-icon>
                </template>
                <template #append>
                  <div style="padding-left: 10px; background: none">
                    <el-button
                      :disabled="disabled"
                      @click="startCountdown"
                      v-text="buttonText"
                      style="
                        background-color: var(--themeColor1);
                        color: var(--themeTextColor);
                      "
                    ></el-button>
                  </div>
                </template>
              </el-input>
              <div
                style="text-align: right; color: #929292; font-size: 10px"
                @click="isLogin = !isLogin"
                v-if="!isLogin"
              >
                前往登录
              </div>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loginLoading"
                class="submit-button"
                round
                type="primary"
                size="large"
                @click="onSubmit"
              >
                {{ isLogin ? "验证身份" : "快速注册" }}
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
    <!--找回密码-->
    <el-dialog
      v-model="isPassword"
      width="420px"
      class="login-dialog"
      :show-close="false"
      align-center
      @close="close"
      style="border-radius: 10px; overflow-x: hidden"
    >
      <div class="login-box">
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 40px;
          "
        >
          <img
            src="../assets/logoHead.svg"
            style="width: 60px; height: 60px"
            alt=""
          />
        </div>
        <div style="padding: 20px 40px 30px">
          <div class="login-title">
            <div class="login-selected">TIME SEA PLUS</div>
          </div>
          <el-form @keyup.enter="retrievePassword" ref="formRef" size="large">
            <el-form-item prop="username">
              <el-input
                type="text"
                clearable
                v-model="emailForm.email"
                placeholder="请输入邮箱"
                autocomplete="“off”"
              >
                <template #prefix>
                  <el-icon :size="16" color="var(&#45;&#45;textColor2)">
                    <UserFilled />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="emailForm.password"
                type="password"
                placeholder="重新设置密码"
                show-password
                autocomplete="“off”"
              >
                <template #prefix>
                  <el-icon :size="16" color="var(&#45;&#45;textColor2)">
                    <Platform />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                maxlength="6"
                minlength="6"
                ref="codeRef"
                type="text"
                clearable
                v-model="emailForm.code"
                placeholder="请输入验证码"
                autocomplete="“off”"
              >
                >
                <template #prefix>
                  <el-icon :size="16" color="var(&#45;&#45;textColor2)">
                    <Connection />
                  </el-icon>
                </template>
                <template #append>
                  <div style="padding-left: 10px; background: none">
                    <el-button
                      :disabled="disabled"
                      @click="startCountdown"
                      v-text="buttonText"
                      style="
                        background-color: var(--themeColor1);
                        color: var(--themeTextColor);
                      "
                    ></el-button>
                  </div>
                </template>
              </el-input>
              <div
                style="text-align: right; color: #929292; font-size: 10px"
                @click="backLoginPanel"
              >
                返回登录
              </div>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="passwordLoading"
                class="submit-button"
                round
                type="primary"
                size="large"
                @click="retrievePassword"
              >
                找回密码
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

import { useStore } from "vuex";

import {
  EmailEnroll,
  EmailLogin,
  getEmailCode,
  GetUserInfo,
  GetWechatCode,
  isQrCodeLoginSucceed,
  RetrieveEmailPassword,
} from "../../api/BSideApi";
import { ElMessage, ElNotification } from "element-plus";
import store from "@/store";
import { Connection, Platform, UserFilled } from "@element-plus/icons-vue";

export default defineComponent({
  name: "LoginDialog",
  components: { Connection, Platform, UserFilled },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    let store = useStore();
    const buttonText = ref("获取验证码");
    let loginType = ref(0);
    let qrCode = ref("");
    let qrCodeLoaded = ref(false);
    let promptAnimation = ref(true);
    let loginAnimation = ref(false);
    let loginLoading = ref(false);
    let dialogVisible = ref(false);
    const isPassword = ref(false);
    let isLogin = ref(true);
    // eslint-disable-next-line no-unused-vars
    let verifyCode = ref("");
    let isFailure = ref(false);
    let timerId;
    let lock = ref(false);
    const countdown = ref(null);
    const disabled = ref(false);
    const isCode = ref(true);
    const passwordLoading = ref(false);
    const emailForm = ref({
      email: "",
      password: "",
      code: "",
    });
    watch(
      () => props.show,
      (newValue) => {
        if (newValue) {
          getLoginQRCode();
          dialogVisible.value = true;
        }
      },
      {
        immediate: true,
      }
    );

    function passwordDialog() {
      dialogVisible.value = false;
      isPassword.value = true;
    }

    function switchLoginType(type) {
      clearInterval(timerId);
      if (type === 0) {
        getLoginQRCode();
      }
      loginType.value = type;
    }

    function backLoginPanel() {
      isPassword.value = false;
      dialogVisible.value = true;
    }

    /**
     * 找回密码
     * @returns {Promise<void>}
     */
    async function retrievePassword() {
      if (passwordLoading.value) {
        return;
      }
      if (!emailForm.value.email) {
        ElMessage.warning("找回邮箱不能为空");
        return;
      }
      if (!emailForm.value.password) {
        ElMessage.warning("重设密码不能为空");
        return;
      }
      if (!emailForm.value.code) {
        ElMessage.warning("验证码不能为空");
        return;
      }

      try {
        passwordLoading.value = true;
        await RetrieveEmailPassword(emailForm.value);
        ElNotification({
          title: "找回成功",
          message: "快登录体验Ai吧",
          type: "success",
        });
        passwordLoading.value = false;
        isPassword.value = false;
      } catch (e) {
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
        passwordLoading.value = false;
      }
    }

    /**
     * 获取验证码
     * @returns {Promise<void>}
     */
    async function startCountdown() {
      if (isCode.value) {
        if (!emailForm.value.email) {
          ElMessage.warning("验证邮箱不能为空");
          return;
        }
        isCode.value = false;
        let seconds = 120;
        try {
          buttonText.value = "正在发送中";
          await getEmailCode(emailForm.value.email);
          ElMessage.info("验证码发送成功");
          disabled.value = true;
        } catch (e) {
          ElNotification({
            title: "错误",
            message: e,
            type: "error",
          });
          buttonText.value = "重新获取验证码";
          isCode.value = true;
          return;
        }
        countdown.value = setInterval(() => {
          if (seconds === 0) {
            clearInterval(countdown.value);
            countdown.value = null;
            disabled.value = false;
            buttonText.value = "重新获取验证码";
            isCode.value = true;
          } else {
            seconds--;
            buttonText.value = `${seconds}` + "后重新获取";
          }
        }, 1000);
      }
    }

    /**
     * 获取登录二维码
     */
    async function getLoginQRCode() {
      try {
        clearInterval(timerId);
        let newVar = await GetWechatCode();
        if (newVar) {
          isFailure.value = false;
          verifyCode.value = newVar.verifyCode;
          qrCode.value = newVar.qrCode;
          qrCodeLoaded.value = true;
          loginAnimation.value = true;
          promptAnimation.value = false;
          timerId = setInterval(() => {
            scanCodeLoginResults();
          }, 2000);
        }
      } catch (e) {
        console.log(e);
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
            localStorage.setItem("token", promise);
            dialogVisible.value = false;
            loginLoading.value = false;
            try {
              let res = await GetUserInfo();
              store.commit("setUserinfo", res);
              // eslint-disable-next-line no-empty
            } catch (e) {
              console.log(e);
            }
            clearInterval(timerId);
            ElNotification({
              title: "登录成功",
              message: "欢迎使用TIME SEA PLUS",
              type: "success",
            });
            emit("loginSucceeded");
            location.reload();
            lock.value = false;
          }
        }
      } catch (e) {
        clearInterval(timerId);
        isFailure.value = true;
      }
    }

    function close() {
      emit("close");
    }

    /**
     * 邮箱登录
     * @returns {Promise<void>}
     */
    async function emailLogin() {
      if (loginLoading.value) {
        return;
      }
      let value = emailForm.value;
      if (!value.email) {
        ElMessage.warning("登录邮箱不能为空");
        return;
      }
      if (!value.password) {
        ElMessage.warning("登录邮箱不能为空");
        return;
      }
      loginLoading.value = true;
      try {
        let promise = await EmailLogin(emailForm.value);
        localStorage.setItem("token", promise);
        try {
          let res = await GetUserInfo();
          store.commit("setUserinfo", res);
          // eslint-disable-next-line no-empty
        } catch (e) {
          console.log(e);
        }
        dialogVisible.value = false;
        loginLoading.value = false;
        ElNotification({
          title: "登录成功",
          message: "快登录体验TIME SEA PLUS吧",
          type: "success",
        });
        loginLoading.value = false;
        isLogin.value = true;
        location.reload();
      } catch (e) {
        ElMessage.error(e);
        loginLoading.value = false;
      }
    }

    async function register() {
      try {
        if (loginLoading.value) {
          return;
        }
        if (!emailForm.value.email) {
          ElMessage.warning("注册邮箱不能为空");
          return;
        }
        if (!emailForm.value.password) {
          ElMessage.warning("登陆密码不能为空");
          return;
        }
        if (!emailForm.value.code) {
          ElMessage.warning("验证码不能为空");
          return;
        }
        loginLoading.value = true;
        await EmailEnroll(emailForm.value);
        ElNotification({
          title: "注册成功",
          message: "快登录体验Ai吧",
          type: "success",
        });
        loginLoading.value = false;
      } catch (e) {
        loginLoading.value = false;
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
      }
    }

    function onSubmit() {
      if (isLogin.value) {
        emailLogin();
      } else {
        register();
      }
    }

    return {
      backLoginPanel,
      retrievePassword,
      passwordDialog,
      onSubmit,
      startCountdown,
      buttonText,
      countdown,
      qrCode,
      qrCodeLoaded,
      loginAnimation,
      promptAnimation,
      loginLoading,
      dialogVisible,
      isPassword,
      close,
      isLogin,
      getLoginQRCode,
      isFailure,
      loginType,
      switchLoginType,
      emailForm,
      disabled,
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
  background-color: var(--bgColor1);
}

.animation {
  width: 160px;
  height: 160px;
  overflow: hidden;
  margin: 20px auto 0;
  background-color: rgb(53, 57, 60);
}

.animation img {
  width: 100%;
  height: 100%;
  object-fit: none;
}

.h5 {
  font-size: 10px;
}

@media (max-width: 767px) {
  .h5 {
    font-size: 12px;
  }
}

.login-box {
  overflow: hidden;
  width: 100%;
  padding: 0;
  background-color: var(--bgColor1);
}

.cover-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(27, 30, 32, 0.8);
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--textColor1);
}

.login-box > .head > img {
  display: block;
  width: 100%;
  margin: 0 auto;
  user-select: none;
  margin-bottom: -20px;
}

.head_img {
  background-image: linear-gradient(
      to top,
      var(--bgColor1) 30%,
      transparent 100%
    ),
    url("../assets/login-header.png");
  background-size: cover;
  background-position: center;
  height: 100px;
}

.form {
  position: relative;
  padding: 10px;
}

.submit-button {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  margin-top: 15px;
  --el-button-bg-color: var(--themeColor1);
  border: none;
}

.submit-button:hover,
.submit-button:focus,
.submit-button:active {
  background-color: rgb(83, 67, 146);
  outline: 0;
}

.form > .content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 20px;
  height: 20px;
  position: relative;
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader:before {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #c2a5ff;
  animation: preloader_4_before 1.5s infinite ease-in-out;
}

.loader:after {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffa4c8;
  left: 5px;
  animation: preloader_4_after 1.5s infinite ease-in-out;
}

@keyframes preloader_4_before {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(15px) scale(1.2) rotate(260deg);
    background: #cca7f1;
    border-radius: 0px;
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes preloader_4_after {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-15px) scale(1.2) rotate(-260deg);
    background: #9dbefa;
    border-radius: 0;
  }
  100% {
    transform: translateX(0px);
  }
}

.loading-model {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
}

.login-title {
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 10px;
  color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.login-selected {
  color: var(--textColor1);
  font-weight: 550;
}

.login-title div {
  margin: 0 20px;
}

.qc_code {
  width: 140px;
  height: 140px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 5px 30px var(--bgboxShadowColor2);

  &.darkMode {
    background-color: #eee;
  }
}

.btn-generate {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}

.prompt-style {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
}

:deep(.el-input__inner) {
  background: var(--bgColor2);

  font-weight: 400;
  color: var(--textColor2);
}

:deep(.el-input__wrapper) {
  background: var(--bgColor2);
  box-shadow: none;
}

:deep(.el-input-group__append, .el-input-group__prepend) {
  border: none !important;
}

:deep(.login-dialog) {
  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-text-fill-color: var(--textColor2);
    box-shadow: inset 0 0 0 1000px var(--bgColor2) !important; // 改变了背景色
  }
}
</style>
