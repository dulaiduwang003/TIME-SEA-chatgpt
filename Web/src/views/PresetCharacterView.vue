<template>
  <div class="body">
    <div class="container">
      <div class="content">
        <el-row :gutter="20">
          <el-col @click="onItem(item)" v-for="(item, index) in menuCollection" :key="index" :xs="12" :sm="8" :md="6">
            <div class="item">
              <div style="text-align: center;font-size: 50px">
                {{ item.icon }}
              </div>
              <div style="font-weight: 550;font-size: 15px;color: #515151;padding-top: 30px">
                {{ item.title }}
              </div>
              <div style="padding-top: 10px;font-size: 9px;color: #aeaeae">
                {{ item.introduce }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: "PresetCharacterView",
  components: { LoginDialog },
  setup() {
    let store = useStore()
    let router = useRouter()
    let menuCollection = ref(require('../utils/PresetsData.json'));
    let loginVisible = ref(false)

    function onItem(data) {
      if (!store.getters.userinfo) return loginVisible.value = true
      localStorage.setItem("roleData", JSON.stringify(data))
      router.push({
        path: '/Custom'
      })
    }

    return {
      menuCollection,
      onItem,
      loginVisible
    }
  }
}
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
  animation: explainAnimation 0.3s;
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
  font-size: 20px;
  font-weight: 500;
}

.content {
  width: 100%;
  margin-top: 30px;
}

.item {
  width: 160px;
  height: 180px;
  text-align: center;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 15px;
  color: #303030;
  padding: 10px;

}

.item:hover {
  background-color: #e6e6e6;
  cursor: pointer;
  transition: background-color .2s;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
  }

  .list:first-child {
    margin-top: 30px;
  }
}
</style>
