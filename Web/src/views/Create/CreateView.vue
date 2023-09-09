<template>
  <div class="body">
    <div class="container">
      <div
        v-for="(menuItem, menuIndex) in menuCollection"
        :key="menuIndex"
        class="list"
      >
        <div class="title">{{ menuItem.title }}</div>
        <div class="content">
          <el-row :gutter="20">
            <el-col
              @click="onItem(item)"
              v-for="(item, index) in menuItem.list"
              :key="index"
              :xs="12"
              :sm="8"
              :md="6"
            >
              <div class="item">{{ item.name }}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: "CreateView",
  components: { LoginDialog },
  setup() {
    let store = useStore();
    let router = useRouter();
    let menuCollection = ref(require("../../utils/CreateData.json"));
    let loginVisible = ref(false);

    function onItem(item) {
      if (!store.getters.userinfo) return (loginVisible.value = true);
      router.push({
        path: "/create_edit",
        query: {
          item: encodeURIComponent(JSON.stringify(item)),
        },
      });
    }

    return {
      menuCollection,
      onItem,
      loginVisible,
    };
  },
};
</script>

<style scoped>
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
  background-color: var(--bgColor2);
}

@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.container {
  animation: explainAnimation 0.3s;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 100px;
}

.list:first-child {
  margin-top: 60px;
}

.list {
  margin-bottom: 40px;
}

.title {
  color: var(--textColor1);
  font-size: 20px;
  font-weight: 500;
}

.content {
  width: 100%;
  margin-top: 30px;
}

.item {
  background-color: var(--bgColor1);
  width: 100%;
  height: 80px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--textColor1);
  margin-bottom: 20px;
}

.item:hover {
  background-color: var(--bgColor3);
  cursor: pointer;
  transition: background-color 0.2s;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
  }

  .list:first-child {
    margin-top: 30px;
  }
  .list {
    padding-left: 20px;
    padding-right: 20px;
  }

  .content {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .title {
    text-indent: 20px;
  }
}
</style>
