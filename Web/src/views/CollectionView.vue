<template>
  <ViewState v-if="!store.getters.userinfo" Type="error" ErrorText="登录查看收藏" IsShowBottom ButtonText="登录"
             @ClickTheButton="loginVisible = true"/>
  <ViewState v-else-if="load" LoadText="正在加载，请稍后..."/>
  <ViewState v-else-if="empty" Type="empty" ErrorText="暂无收藏的数据"/>
  <ViewState v-else-if="error" @ClickTheButton="init" Type="error" ErrorText="加载错误，请重试"
             IsShowBottom ButtonText="重新加载"/>
  <div v-else class="body">
    <div :class="seeIndex !== -1 ? 'containerOpen' : ''" class="container">
      <el-scrollbar height="100%" class="leftContent">
        <div v-for="(item,index) in list" :key="index" class="item">
          <div class="name">{{ item.issue }}</div>
          <div class="time">收藏于{{conversionTime(item.createdTime)}}</div>
          <div v-if="!item.isError" class="operation">
            <div @click="seeIndex = index" class="operationItem operationItemSelected">
              <el-icon size="14">
                <Promotion/>
              </el-icon>
              <div class="operationExplain">查看</div>
            </div>
            <div @click="cancelCollection(item.starId,index)" class="operationItem"
                 :class="item.isCollection ? 'operationItemSelected' : ''">
              <el-icon size="14">
                <Star/>
              </el-icon>
              <div class="operationExplain">取消收藏</div>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <el-scrollbar v-if="seeIndex !== -1" height="100%" class="rightContent">
        <div class="title">{{ list[seeIndex].issue }}</div>
        <div class="desc">
          <v-md-editor :model-value="list[seeIndex].answer" mode="preview" @copy-code-success="handleCopyCodeSuccess"/>
        </div>
      </el-scrollbar>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" @loginSucceeded="init"/>
</template>

<script>
import ViewState from "@/components/ViewState.vue";
import {onMounted, ref} from "vue";
import {Favorites, FavoritesDel} from "../../api/BSideApi";
import {Promotion, Star} from "@element-plus/icons-vue";
import {ElMessageBox, ElNotification} from "element-plus";
import LoginDialog from "@/components/LoginDialog.vue";
import store from "@/store";
import {conversionTime} from "@/utils/date";

export default {
  name: "CollectionView",
  methods: {conversionTime},
  computed: {
    store() {
      return store
    }
  },
  components: {LoginDialog, Star, Promotion, ViewState},
  setup() {
    let load = ref(false)
    let empty = ref(false)
    let error = ref(false)
    let list = ref([])
    let seeIndex = ref(-1)
    let loginVisible = ref(false)

    onMounted(() => {
      if (store.getters.userinfo) init();
    });

    async function init() {
      try {
        load.value = true
        let res = await Favorites()
        if (res.length) {
          list.value = res;
        } else {
          empty.value = true
        }
        load.value = false
        error.value = false
      } catch (err) {
        load.value = false
        error.value = true
      }
    }

    async function cancelCollection(id, index) {
      try {
        await ElMessageBox({
          title: '提示',
          message: "取消收藏后数据将不可找回，是否确认取消该收藏",
          confirmButtonText: '取消收藏',
          cancelButtonText: '再想想',
          showCancelButton: true,
          type: 'warning',
        });
        await FavoritesDel(id)
        list.value.splice(index, 1)
        if (seeIndex.value === index) seeIndex.value = -1
      } catch (e) {
        console.log('取消收藏')
      }
    }

    // TODO 复制代码块
    function handleCopyCodeSuccess(code) {
      navigator.clipboard.writeText(code)
      ElNotification({
        message: '复制成功',
        type: 'success',
      })
    }

    return {
      load, empty, error, init, list, cancelCollection, seeIndex, handleCopyCodeSuccess, loginVisible
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
  padding: 30px;
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
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  animation: explainAnimation 0.3s;

}

.containerOpen {
  max-width: 100%;
  display: flex;
  gap: 20px;
}

.leftContent {
  flex: 1;
}

.rightContent {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  background: #1f2224;
  border-radius: 8px;
  padding: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #f9f9f9;
}

.desc {
  margin-top: 20px;
}

.item {
  box-sizing: border-box;
  background: rgb(27,30,32);
  border-radius: 8px;
  flex-direction: column;
  margin-top: 26px;
  padding: 20px;
  display: flex;
  letter-spacing: 1px;
  width: 100%;
}

.item:first-child {
  margin-top: 0;
}

.item:last-child {
  /*margin-bottom: 20px;*/
}

.name {
  font-size: 16px;
  line-height: 28px;
  color: #c7c7c7;
}

.time {
  margin-top: 5px;
  font-size: 12px;
  color: #7c7c7c;
}

.operation {
  display: flex;
  margin-top: 20px;
}

.operationItem {
  height: 30px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0 15px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  background-color: rgb(35,40,42);
  border-radius: 100px;
  font-size: 13px;
  color: whitesmoke;
}

.operationItemSelected {
  background-color: #7d80ff;
  color: white;
}

.operationExplain {
  margin-left: 5px;
}


::v-deep( .vuepress-markdown-body) {
  padding: 0 0 0 16px;
  color: #ffffff;
  background-color: #1f2224;
}

</style>
