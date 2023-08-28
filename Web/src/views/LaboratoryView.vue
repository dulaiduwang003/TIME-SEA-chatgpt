<template>
  <div class="body">
    <div class="container">
      <div class="content">
        <el-row :gutter="20">
          <el-col @click="onItem(item.path)" v-for="(item, index) in menuCollection" :key="index" :xs="12" :sm="8" :md="6">
            <div class="item">
              <div>
                <img :src="require('../assets/'+ item.icon)" style="width: 45px;height: 45px"/>
              </div>
              <div >
                <div style="font-weight: 700;font-size: 16px;color: #a5a5a5;padding-top: 10px">
                  {{ item.title }}
                </div>
                <div style="padding-top: 20px;font-size: 7px;color: #878787; display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;">
                  {{ item.introduce }}
                </div>
              </div>
              <div style="display: flex;font-size: 10px;color: #d1d1d1;padding-top: 14px">
                <div style="background-color:rgb(72,78,81);padding: 2px 5px;border-radius: 3px;margin-right: 5px" v-for="(item2,index2) in item.label" :key="index2">
                  {{item2}}
                </div>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false"/>
</template>

<script>
import {ref} from "vue";
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: "PresetCharacterView",
  components: {LoginDialog},
  setup() {
    let store = useStore()
    let router = useRouter()
    let menuCollection = ref(require('../utils/LaboratoryData.json'));
    let loginVisible = ref(false)

    function onItem(data) {
      if (!store.getters.userinfo) return loginVisible.value = true
      router.push({
        path: data
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

  background-color: rgb(38, 42, 44);
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
  max-width: 1100px;
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
  width: 210px;
  height: 160px;
  background-color: rgb(27,30,32);
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 15px;
  color: #ffffff;
  padding: 20px;
  box-shadow: 0 5px 7px rgba(35, 35, 35, 0.06);
}

.item:hover {
  background-color: #312e2e;
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
