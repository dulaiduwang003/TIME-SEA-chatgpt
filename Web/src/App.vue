<template>
  <div class="appWrapper">
    <div
      class="appInner"
      :class="
        store && store.getters && store.getters.themeInfo.className
          ? store.getters.themeInfo.className
          : null
      "
    >
      <NavigationBar />

      <LeftNavigationBar />

<!--      <levitation-ball class="hidden-xs-only" />-->

      <el-dialog
        class="announcement"
        v-model="dialogVisible"
        center
        align-center
        width="380px"
        style="background-color: var(--bgColor1)"
      >
        <span style="text-align: center">{{ context }}</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button
              type="primary"
              @click="dialogVisible = false"
              color="var(--themeColor2)"
            >
              朕已阅
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
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
    let store = useStore();
    store.commit("initState");

    //这里直接获取本地缓存的值，如果有值，就直接commit 修改组件状态
    let themeSwitchIndex = JSON.parse(localStorage.getItem("themeSwitchIndex"));
    console.log("获取缓存变量", themeSwitchIndex);
    if (themeSwitchIndex && themeSwitchIndex.id) {
      store.commit("setThemeSwitchIndex", themeSwitchIndex.id);
    }

    const dialogVisible = ref(false);
    const context = ref("");
    onMounted(() => {
      setTimeout(() => {
        getAnnouncementData();
      }, 100);
    });

    async function getAnnouncementData() {
      try {
        let announcement = await getAnnouncement();
        if (announcement) {
          let item = localStorage.getItem("announcement");
          if (item !== null) {
            let parse = JSON.parse(item);
            if (parse.logotypeId !== announcement.logotypeId) {
              localStorage.setItem(
                "announcement",
                JSON.stringify(announcement)
              );
              context.value = announcement.context;
              dialogVisible.value = true;
            }
          } else {
            localStorage.setItem("announcement", JSON.stringify(announcement));
            context.value = announcement.context;
            dialogVisible.value = true;
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    return {
      dialogVisible,
      store,
      context,
    };
  },
};
</script>

<style lang="scss">
.appWrapper {
  width: 100%;
  height: 100%;
  //
  //* {
  //  transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  //}
}

.appInner {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.announcement {
  width: 25%;
  border-radius: 10px;
}

@media (max-width: 767px) {
  .announcement {
    width: 70%;
  }
}

#app {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  box-sizing: border-box;
  // padding: 20px;
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
  width: 100%;
  height: 100%;
}

/* TODO 滚动条样式*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1); */
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  display: block;
}

.login-dialog > header {
  display: none;
}

.login-dialog > .el-dialog__body {
  padding: 0 !important;
}

.el-switch__core {
  background: var(--bgColor3) !important;
}

.el-switch.is-checked .el-switch__core {
  border-color: var(--themeColor2) !important;
}
.el-input-group__append {
  box-shadow: none !important;
}
.el-input-group__append {
  background: none !important;
}

.el-pagination .btn-prev,
.el-pagination .btn-next {
  background-color: var(--bgColor2) !important;
}

.el-pagination .el-pager li {
  background-color: var(--bgColor2) !important;
  color: var(--textColor3) !important;

  &.is-active {
    color: var(--themeTextColor) !important;
  }
}
</style>

<style lang="scss" scoped>
// 夜间模式配色
.darkMode {
  --bgColor1: #222;
  --bgboxShadowColor1: #11111144;
  --bgColor2: #2a2a2a;
  --bgboxShadowColor2: #44444444;
  --bgColor3: #444;
  --themeColor1: #8166e7;
  --themeColor2: #8166e7;
  --themeTextColor: #eee;
  --textColor1: #eee;
  --textColor2: #ccc;
  --textColor3: #999;
  --textColor4: #777;
  --textColor5: #353535;
  --dColor1: #2A2A2A;
  --dColor2: #302e37;
  --borderColor: #333;
}
// 日间模式配色
.lightMode {
  --bgColor1: #f5f5f5;
  --bgboxShadowColor1: #cccccc44;
  --bgColor2: #eee;
  --bgboxShadowColor2: #dddddd44;
  --bgColor3: #ddd;
  --themeColor1: #8166e7;
  --themeColor2: #8166e7;
  --themeTextColor: #eee;
  --textColor1: #222;
  --textColor2: #444;
  --textColor3: #666;
  --textColor4: #888;
  --textColor5: #d5d5d5;
  --dColor1: #EEEEEEFF;
  --dColor2: #e0d8f8;
  --borderColor: #eee;
}

// 样式选择器， 后续所有的模式 都可以写在这里，  数量多的时候再抽离
:deep(.appInner) {
  background: var(--bgColor1);
  color: var(--textColor1);

  /*
  变量定义区域
  需要定背景色五级、主题色五级、文本三级(正文、标题、提醒) 颜色
backgroundColor
  */

  /*
  方案：
  1、app.vue 基于类名修改变量值；
  2、子组件全部位置，都使用变量进行颜色复制；

  为什么不在这个页面直接修改：
  1、如果是单个文件直接修改样式，日后新建组件，还要找回来app.vue，有点累赘。

  执行步骤：
  1、【完成】检查css mode修改之后， 子组件的变量能否生效 能否生效
  2、检查父子组件变量是否能够传递；
  3、将所有颜色类名都找出来，替换为使用变量;
  4、
  */

  .el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
    background-color: var(--themeColor1) !important;
    color: var(--themeTextColor);
  }
}
</style>
