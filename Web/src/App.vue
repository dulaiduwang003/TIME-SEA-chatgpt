<template>
  <NavigationBar />
  <!--    <RouterView v-slot="{ Component }">-->
  <!--      &lt;!&ndash; TODO 要缓存 &ndash;&gt;-->
  <!--      <KeepAlive>-->
  <!--        <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"></component>-->
  <!--      </KeepAlive>-->
  <!--      &lt;!&ndash; TODO 不缓存 &ndash;&gt;-->
  <!--      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"></component>-->
  <!--    </RouterView>-->
  <LeftNavigationBar />
  <el-dialog class="gg" v-model="dialogVisible" title="公告" center align-center>
    <span style="text-align: center">{{ context }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          朕已阅
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { useStore } from "vuex";
import LeftNavigationBar from "@/components/LeftNavigationBar.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { getAnnouncement } from "../api/BSideApi";
import { onMounted, ref } from "vue";

export default {
  components: { LeftNavigationBar, NavigationBar },
  setup() {
    let store = useStore()
    store.commit("initState");
    const dialogVisible = ref(false)
    const context = ref('')
    onMounted(() => {
      setTimeout(() => {
        getAnnouncementData()
      }, 100)
    })
    async function getAnnouncementData() {
      try {
        let announcement = await getAnnouncement();
        if (announcement) {
          let item = localStorage.getItem("announcement");
          if (item !== null) {
            let parse = JSON.parse(item);
            if (parse.logotypeId !== announcement.logotypeId) {
              localStorage.setItem("announcement", JSON.stringify(announcement))
              context.value = announcement.context
              dialogVisible.value = true
            }
          } else {
            localStorage.setItem("announcement", JSON.stringify(announcement))
            context.value = announcement.context
            dialogVisible.value = true
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
    return {
      dialogVisible,
      getAnnouncementData,
      context
    }
  }
}


</script>

<style>
.gg {
  width: 25%;
  border-radius: 10px;
}


@media (max-width: 767px) {
  .gg {
    width: 70%;
  }
}


#app {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  box-sizing: border-box;
  padding: 20px;
  letter-spacing: 1px;
}

@media only screen and (max-width: 767px) {
  #app {
    padding: 0;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  /*background: #f6f6f6;*/
  background: white;
  color: #303030;
  width: 100%;
  height: 100%;
}

/* TODO 滚动条样式*/
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
  border-radius: 0;
  background: rgba(0, 0, 0, 0);
}


.login-dialog>header {
  display: none;
}

.login-dialog>.el-dialog__body {
  padding: 0 !important;
}
</style>
