<template>
  <div class="u_container">
    <div class="head_model">
      <div class="head_model_style">
        <div class="number_people">{{ amount }} 人</div>
        <div class="text_people">站点总用户数</div>
      </div>
    </div>
    <el-table
      :data="dataTables"
      height="70%"
      :header-cell-style="{
        background: ' var(--bgColor1)',
        borderColor: 'var(--borderColor)',
      }"
      style="background-color: var(--bgColor1)"
      :row-style="{
        height: '100%',
        background: ' var(--bgColor1)',
        border: 'none',
      }"
    >
      <el-table-column prop="userId" label="标识" />
      <el-table-column prop="userName" label="昵称" />
      <el-table-column prop="frequency" label="Ai币" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="lastOperationTime" label="最后操作时间" />
      <el-table-column prop="createdTime" label="创建时间" />
      <el-table-column fixed="right" label="操作" width="200">
        <template #header>
          <el-input
            style="width: 180px"
            v-model="prompt"
            size="small"
            placeholder="模糊搜索"
            @change="search"
          />
        </template>
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleUpdateUserInfo(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex; justify-content: right; padding-top: 10px">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="15"
        background
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
  <el-dialog
    v-model="dialogFormVisible"
    width="400px"
    x
    style="background-color: var(--bgColor1); padding-top: 20px"
  >
    <el-form>
      <el-form-item label="用户昵称" label-width="100px">
        <el-input
          autocomplete="off"
          tyle="width: 120px"
          v-model="form.userName"
        />
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item label="Ai币" label-width="100px">
        <el-input
          autocomplete="off"
          style="width: 120px"
          v-model="form.frequency"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="default" color="var(--themeColor2)" @click="onUpdate">
          修改
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { onMounted, ref } from "vue";
import store from "@/store";
import {
  GetUserCount,
  GetUserInfo,
  GetUserPage,
  UpdateUserInfo,
} from "../../../../api/BSideApi";
import { conversionTime } from "@/utils/date";
import { ElLoading, ElNotification } from "element-plus";

export default {
  name: "ordersView",
  computed: {
    store() {
      return store;
    },
  },
  setup() {
    const dialogFormVisible = ref(false);
    let loginVisible = ref(false);
    const dataTables = ref([]);
    const current = ref(1);
    const total = ref(0);
    const amount = ref(0);
    const prompt = ref("");
    let load = ref(true);
    let empty = ref(false);
    let error = ref(false);
    const form = ref({
      userId: undefined,
      frequency: 0,
      userName: "",
    });
    onMounted(() => {
      if (store.getters.userinfo && store.getters.userinfo.type === "ADMIN") {
        getUserCount();
        handleCurrentChange(current.value);
      }
    });

    async function onUpdate() {
      if (!form.value.frequency) {
        ElNotification({
          title: "错误",
          message: "Ai币格式不正确",
          type: "error",
        });
        return;
      }
      // 显示加载图标
      ElLoading.service({
        fullscreen: true,
        text: "正在提交数据...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      try {
        await UpdateUserInfo(form.value);
        prompt.value = "";
        current.value = 1;
        await handleCurrentChange(1);
        ElNotification({
          title: "成功",
          message: "修改成功",
          type: "success",
        });
        await getUser();
        dialogFormVisible.value = false;
      } catch (e) {
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
      }
      // 关闭加载图标
      ElLoading.service().close();
    }

    function handleUpdateUserInfo(row) {
      form.value.frequency = row.frequency;
      form.value.userId = row.userId;
      form.value.userName = row.userName;
      dialogFormVisible.value = true;
    }

    function search() {
      current.value = 1;
      dataTables.value = [];
      handleCurrentChange(1);
    }
    async function getUser() {
      try {
        let res = await GetUserInfo();

        store.commit("setUserinfo", res);
      } catch (e) {
        console.log(e);
      }
    }

    async function getUserCount() {
      try {
        amount.value = await GetUserCount();
      } catch (e) {
        console.log(e);
      }
    }

    async function handleCurrentChange(pageNum) {
      try {
        let res = await GetUserPage(pageNum, prompt.value);
        let records = res.records;
        if (records.length > 0) {
          records.forEach((r) => {
            if (!r.email) {
              r.email = "--";
            }
            if (!r.userName) {
              r.userName = "用户未设置昵称";
            }
            if (!r.lastOperationTime) {
              r.lastOperationTime = "7天前";
            } else {
              r.lastOperationTime = conversionTime(r.lastOperationTime);
            }
            r.createdTime = conversionTime(r.createdTime);
          });
          dataTables.value = records;
          current.value = res.current;
          total.value = res.total;
        } else {
          empty.value = true;
        }
        load.value = false;
        error.value = false;
      } catch (e) {
        load.value = false;
        error.value = true;
      }
    }

    return {
      search,
      load,
      error,
      empty,
      amount,
      total,
      loginVisible,
      handleCurrentChange,
      dataTables,
      prompt,
      dialogFormVisible,
      handleUpdateUserInfo,
      form,
      onUpdate,
    };
  },
};
</script>

<style scoped>
@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

::v-deep(
    .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
  ) {
  background: none !important;
}

::v-deep(
    .el-pagination .is-background .el-pager li:not(.is-disabled).is-active
  ) {
  background-color: rgb(125, 128, 255);
}

::v-deep(.el-table-fixed-column--right) {
  background: var(--bgColor1) !important;
}

::v-deep(
    .el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell
  ) {
  background: none;
}

.head_model {
  display: flex;
  background-color: var(--themeColor1);
  height: 130px;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 2px 6px var(--bgColor1);
}

.head_model_style {
  padding-left: 40px;
  color: var(--themeTextColor);
}

.number_people {
  font-size: 35px;
  font-weight: 600;
}

.text_people {
  font-size: 15px;
  margin-top: 5px;
  padding-left: 5px;
}
/deep/.el-input__inner {
  background: var(--bgColor2);

  font-weight: 400;
  color: var(--textColor2);
}
/deep/.el-input__wrapper {
  background: var(--bgColor2);
  box-shadow: none;
}
</style>
