<template>
  <nav class="header">
    <div class="header-side">
      <div
        @click="appletDialogVisible = true"
        class="rechargeButton hidden-xs-only applet"
      >
        <img class="appletIcon" :src="require('../assets/applet.svg')" />
        <div class="rechargeButtonText themeColorText">微信小程序</div>
      </div>
    </div>
    <div v-if="isHeadNavigation" class="header-center">
      <div class="switch-button">
        <block v-for="(item, index) in navigationList" :key="index">
          <router-link
            active-class="switch-active"
            class="switch-item"
            :to="item.to"
            >{{ item.title }}
          </router-link>
        </block>
      </div>
    </div>

    <div
      class="header-side header-right"
      style="display: flex; align-items: center"
    >
      <div @click="switchTheme" class="hidden-xs-only">
        <el-button text class="switchThemeIconWrapper">
          <template v-slot:icon>
            <el-icon
              class="IconInner Sunny"
              :class="{
                show: store.getters.themeInfo.className === 'lightMode',
              }"
              size="16"
              ><Sunny
            /></el-icon>
            <el-icon
              class="IconInner Moon"
              :class="{
                show: store.getters.themeInfo.className !== 'lightMode',
              }"
              size="16"
              ><Moon
            /></el-icon>
          </template>
        </el-button>
      </div>

      <div
        v-if="store.getters.userinfo"
        style="display: flex; align-items: center"
      >
        <div
          @click="
            router().push({
              path: '/purchase',
            })
          "
          class="hidden-xs-only"
        >
          <el-button text
            >打赏

            <template v-slot:icon>
              <el-icon size="16">
                <Goods />
              </el-icon>
            </template>
          </el-button>
        </div>
        <div class="header-right">
          <div class="header-user-wrapper">
            <el-dropdown ref="dropdown1" trigger="contextmenu">
              <div @click="showClick" class="header-user-btn">
                <el-avatar
                  :size="28"
                  :icon="UserFilled"
                  :src="
                    store.getters.userinfo.avatar
                      ? imageUrl + store.getters.userinfo.avatar
                      : require('../assets/logoHead.svg')
                  "
                />
                <div class="header-user-name">
                  {{
                    store.getters.userinfo.userName
                      ? store.getters.userinfo.userName
                      : "用户"
                  }}
                </div>
              </div>
              <template #dropdown>
                <el-dropdown-menu class="dropdown-menu">
                  <el-dropdown-item
                    @click="router().push({ path: '/Admin' })"
                    v-if="store.getters.userinfo.type === 'ADMIN'"
                    >控制台</el-dropdown-item
                  >
                  <el-dropdown-item @click="router().push({ path: '/Orders' })"
                    >打赏记录</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="router().push({ path: '/Exchange' })"
                    >兑换中心</el-dropdown-item
                  >
                  <el-dropdown-item @click="switchTheme"
                    >切换到{{
                      store.getters.themeInfo.switchText
                    }}</el-dropdown-item
                  >
                  <el-dropdown-item divided @click="logout"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div v-else @click="dialogVisible = true" class="login">登录</div>
    </div>
  </nav>

  <el-dialog
    v-model="appletDialogVisible"
    title="TIME SEA PLUS"
    width="300"
    center
    align-center
  >
    <div class="wxAppletCodeRow">
      <img class="wxAppletCode" :src="require('../assets/wxAppletCode.jpg')" />
      <div>微信扫一扫</div>
    </div>
  </el-dialog>

  <LoginDialog :show="dialogVisible" @close="dialogVisible = false" />
</template>
<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { UserFilled, Goods, Sunny, Moon } from "@element-plus/icons-vue";
import router from "@/router";
import store from "../store";
import LoginDialog from "@/components/LoginDialog.vue";
import { ElLoading, ElNotification } from "element-plus";
import { Logout } from "../../api/BSideApi";

import { useStore } from "vuex";

export default defineComponent({
  name: "NavigationBar",
  components: {
    LoginDialog,
  },
  computed: {
    store() {
      return store;
    },
  },
  methods: {
    router() {
      return router;
    },
  },
  setup() {
    let router = useRouter();
    // TODO DATA
    let dialogVisible = ref(false);
    let appletDialogVisible = ref(false);
    let isHeadNavigation = ref(false);
    const imageUrl = ref("");
    let store = useStore();

    onMounted(() => {
      //获取图片域名
      imageUrl.value = process.env.VUE_APP_IMAGE;
    });

    let navigationList = ref([
      {
        title: "问答",
        to: "/",
      },
      {
        title: "实验室",
        to: "/laboratory",
      },
      {
        title: "绘图",
        to: "/drawing_text_view",
      },
    ]);

    watch(
      () => router.currentRoute.value,
      (newValue) => {
        isHeadNavigation.value = newValue.meta.isHeadNavigation;
      },
      {
        immediate: true,
      }
    );

    const dropdown1 = ref();

    function switchTheme() {
      store.commit(
        "setThemeSwitchIndex",
        store.getters.themeInfo.id === 0 ? 1 : 0
      );
    }

    function showClick() {
      dropdown1.value.handleOpen();
    }

    async function logout() {
      try {
        // 显示加载图标
        ElLoading.service({
          fullscreen: true,
          text: "正在退出登录...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        await Logout();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        location.reload();
        // 关闭加载图标
        ElLoading.service().close();
        // 弹出退出登录成功提示框
        ElNotification({
          message: "退出登录成功",
          type: "success",
        });
      } catch (e) {
        // 关闭加载图标
        ElLoading.service().close();
        ElNotification({
          message: e,
          type: "error",
        });
      }
    }

    return {
      logout,
      isHeadNavigation,
      navigationList,
      UserFilled,
      showClick,
      dropdown1,
      appletDialogVisible,
      dialogVisible,
      imageUrl,
      switchTheme,
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  user-select: none;
  height: 60px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid var(--borderColor);
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.header-center {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

@media only screen and (max-width: 767px) {
  .header-center {
    left: 16px;
    transform: translate(0);
  }
}

.switch-button {
  color: var(--textColor1);
  box-sizing: border-box;
  height: 34px;
  background: var(--bgColor3);
  border-radius: 7px;
  align-items: center;
  padding: 0 2px;
  display: flex;
}

.switch-item {
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  color: var(--textColor1);
  text-decoration: none;
  box-sizing: border-box;
  padding: 0 16px;
}

.switch-active {
  background: var(--bgColor1);
}

.header-side {
  height: 100%;
  align-items: center;
  display: flex;
}

.logo {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  text-decoration: none;
  animation: logoAnimation 0.3s;
}

@keyframes logoAnimation {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}
:deep(.header-right) {
  animation: headerRightAnimation 0.3s;

  .el-button {
    background: var(--bgColor1);
    margin-right: 10px;

    &.switchThemeIconWrapper {
      padding: 8px;
      border-radius: 100%;
      width: 18px;
      height: 18px;
      position: relative;
      user-select: none;
      box-sizing: content-box;

      &:hover {
        box-shadow: 0px 0px 16px -2px var(--bgColor3);
        color: var(--themeColor1);
      }

      .IconInner {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50%;
        margin-top: -50%;
        opacity: 0;
        &.Sunny {
          transform: translateX(-50px);
        }
        &.Moon {
          transform: translateX(50px);
        }

        &.show {
          opacity: 1;
          transform: translateX(0px);
        }
      }
    }

    transition: all 0.2s;
  }

  .el-button.is-text:not(.is-disabled):focus {
    background: var(--bgColor1);
  }
  .el-button.is-text:not(.is-disabled):hover {
    background: var(--bgColor1);
    /* opacity: 0.8; */
  }
}

.rechargeButton {
  width: 84px;
  height: 34px;
  border-radius: 6px;
  margin-right: 12px;
  padding: 0;
  font-size: 14px;
  background-color: var(--bgColor2);
  color: var(--textColor2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.rechargeButtonText {
  margin-left: 10px;
}
.themeColorText {
  color: var(--themeTextColor);
}

@keyframes headerRightAnimation {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.header-user-name {
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  word-break: break-all;
  font-size: 14px;
  overflow: hidden;
}

.dropdown-menu {
  width: 150px;
  box-sizing: border-box;
  padding: 6px;
}

.applet {
  width: 120px;
  margin-left: 10px;
  background-color: var(--themeColor1);
  color: var(--themeTextColor);
}

.applet > .rechargeButtonText {
  margin-left: 5px;
}

.appletIcon {
  width: 18px;
  height: 18px;
}

.wxAppletCodeRow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wxAppletCode {
  width: 150px;
  height: 150px;
  margin: 20px 0;
}

.login {
  width: 72px;
  height: 34px;
  background: var(--themeColor1);
  border-radius: 6px;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--themeTextColor);
}
.header-user-btn {
  height: 36px;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  padding: 0 6px;
  display: flex;
}
.header-user-name {
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-left: 8px;
  font-size: 15px;
  overflow: hidden;
  color: var(--textColor2);
}
.header-user-btn:hover {
  background: var(--bgColor2);
}
</style>
