<template>
  <div class="NavigationBar">
    <div class="leftNavigation">
      <el-avatar
        class="headPortrait"
        :size="70"
        :icon="UserFilled"
        :src="
          store.getters.userinfo.avatar
            ? imageUrl + store.getters.userinfo.avatar
            : require('../assets/logoHead.svg')
        "
      />
      <div class="surplus" v-if="store.getters.userinfo">
        SUPER币 {{ store.getters.userinfo.frequency }}
      </div>
      <div v-else @click="loginVisible = true" class="loginBut">登录</div>
      <div class="header">
        <div class="switch-button">
          <router-link
            v-for="(item, index) in navigationList"
            :key="index"
            active-class="switch-active"
            class="switch-item"
            :to="item.to"
          >
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <div class="switch-item-title">{{ item.title }}</div>
          </router-link>
        </div>
      </div>

      <div class="bottom">
        <el-avatar
          :size="40"
          :icon="UserFilled"
          :src="require('../assets/logoHead.svg')"
        />
        <div class="bottomRight">
          <div class="bottomRightName">TIME SEA PLUS</div>
          <div class="bottomRightEdition">v1.3.1</div>
        </div>
      </div>
    </div>
    <div class="rightContent">
      <RouterView v-slot="{ Component }">
        <!-- TODO 要缓存 -->
        <KeepAlive>
          <component
            :is="Component"
            :key="$route.name"
            v-if="$route.meta.keepAlive"
          ></component>
        </KeepAlive>
        <!-- TODO 不缓存 -->
        <component
          :is="Component"
          :key="$route.name"
          v-if="!$route.meta.keepAlive"
        ></component>
      </RouterView>
    </div>
  </div>

  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
// eslint-disable-next-line no-unused-vars
import {
  ChatDotSquare,
  EditPen,
  MessageBox,
  Odometer,
  ScaleToOriginal,
  UserFilled,
} from "@element-plus/icons-vue";
import router from "@/router";
import store from "../store";
import LoginDialog from "@/components/LoginDialog.vue";

export default defineComponent({
  name: "LeftNavigationBar",
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
    let loginVisible = ref(false);
    let dialogVisible = ref(false);
    let appletDialogVisible = ref(false);
    let isHeadNavigation = ref(false);
    let navigationList = ref([
      {
        title: "智能问答",
        icon: ChatDotSquare,
        to: "/",
      },
      {
        title: "灵感创作",
        icon: EditPen,
        to: "/create",
      },
      {
        title: "预设角色",
        icon: Odometer,
        to: "/preset_character",
      },
      {
        title: "我的收藏",
        icon: MessageBox,
        to: "/collection",
      },
      {
        title: "超级实验室",
        icon: ScaleToOriginal,
        to: "/laboratory",
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
    const imageUrl = ref("");
    onMounted(() => {
      imageUrl.value = process.env.VUE_APP_IMAGE;
    });
    const dropdown1 = ref();

    function showClick() {
      dropdown1.value.handleOpen();
    }

    return {
      isHeadNavigation,
      navigationList,
      UserFilled,
      showClick,
      dropdown1,
      appletDialogVisible,
      dialogVisible,
      loginVisible,
      imageUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.answer) {
  .v-md-editor {
    background-color: transparent;
  }
}
</style>

<style scoped>
.NavigationBar {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid #1d2022;
  border-radius: 10px;
  overflow: hidden;
}

.leftNavigation {
  width: 260px;
  height: 100%;
  background-color: #1d2022;
  border-right: 1px solid #1d2022;
  position: relative;
}

.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  border-top: 1px solid #1d2022;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
}

.bottomRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}

.bottomRightName {
  color: #848484;
  font-size: 14px;
  font-weight: bold;
}

.bottomRightEdition {
  font-size: 12px;
  margin-top: 3px;
  color: #7c7c7c;
}

.headPortrait {
  display: block;
  margin: 50px auto 0;
}

.surplus {
  box-sizing: border-box;
  padding: 5px 10px;
  background-color: #8065e5;
  display: table;
  margin: 20px auto 0;
  font-size: 13px;
  color: white;
  border-radius: 5px;
}

.rightContent {
  position: relative;
  flex: 1;
  /* background: #f6f6f6; */
}

.loginBut {
  width: 80px;
  height: 40px;
  background-color: rgb(129, 102, 231);
  border-radius: 8px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

.header {
  margin-top: 50px;
}

.switch-button {
  box-sizing: border-box;
  padding: 0 20px;
}

.switch-item {
  height: 50px;
  box-sizing: border-box;

  padding: 0 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #666666;
  font-size: 14px;
  background-color: #1d2022;
}

.switch-item-title {
  margin-left: 10px;
}

.switch-active {
  background-color: #262a2c;
  color: white;
  border-radius: 8px;
}

@media only screen and (max-width: 767px) {
  .NavigationBar {
    border: none;
    border-radius: 0;
  }

  .leftNavigation {
    display: none;
  }
}

/*.NavigationBar {*/
/*  border: none;*/
/*  border-radius: 0;*/
/*}*/
</style>
