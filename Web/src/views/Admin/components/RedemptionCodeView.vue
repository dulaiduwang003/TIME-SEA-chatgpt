<template>
  <div class="u_container">
    <div style="margin-bottom: 30px; margin-top: 30px">
      <el-button
        color="var(--themeColor2)"
        style="width: 100px"
        @click="dialogFormVisible = true"
        >新增兑换码</el-button
      >
    </div>
    <el-table
      :data="dataTables"
      height="78%"
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
      <el-table-column prop="exchangeId" label="标识" />
      <el-table-column prop="exchangeCode" label="兑换码" />
      <el-table-column prop="frequency" label="所含Ai币" />
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
            @click="deleteRedemption(scope.row)"
            >删除</el-button
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
      <el-form-item label="生成数量" label-width="100px">
        <el-input
          autocomplete="off"
          tyle="width: 120px"
          v-model="form.buildQuantity"
        />
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item label="所含Ai币" label-width="100px">
        <el-input
          autocomplete="off"
          style="width: 120px"
          v-model="form.buildFrequency"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="default"
          color="var(--themeColor2)"
          @click="handleAddRedemptionCode"
        >
          生成
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { onMounted, ref } from "vue";
import store from "@/store";
import {
  AddRedemptionCode,
  DeleteRedemptionCode,
  GetRedemptionCodePage,
} from "../../../../api/BSideApi";
import { conversionTime } from "@/utils/date";
import { ElLoading, ElMessageBox, ElNotification } from "element-plus";

export default {
  name: "redemptionCodeView",
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
      buildFrequency: undefined,
      buildQuantity: undefined,
    });
    onMounted(() => {
      if (store.getters.userinfo && store.getters.userinfo.type === "ADMIN") {
        handleCurrentChange(current.value);
      }
    });

    async function handleAddRedemptionCode() {
      const { buildFrequency, buildQuantity } = form.value;
      if (!buildQuantity) {
        ElNotification({
          title: "错误",
          message: "生成数量不能为空",
          type: "error",
        });
        return;
      }
      if (!buildFrequency) {
        ElNotification({
          title: "错误",
          message: "所含Ai币不能为空",
          type: "error",
        });
        return;
      }
      ElLoading.service({
        fullscreen: true,
        text: "正在重载数据...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });

      try {
        await AddRedemptionCode(form.value);
        // 关闭加载图标
        ElLoading.service().close();
        prompt.value = "";
        current.value = 1;
        await handleCurrentChange(1);
        // 弹出退出登录成功提示框
        ElNotification({
          message: "新增成功",
          type: "success",
        });
        dialogFormVisible.value = false;
      } catch (e) {
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
      }
    }

    function search() {
      current.value = 1;
      dataTables.value = [];
      handleCurrentChange(1);
    }

    async function deleteRedemption(data) {
      try {
        await ElMessageBox({
          title: "提示",
          message: "确定要删除?",
          confirmButtonText: "确定",
          cancelButtonText: "再想想",
          showCancelButton: true,
          type: "warning",
        });
        ElLoading.service({
          fullscreen: true,
          text: "正在删除...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        await DeleteRedemptionCode(data.exchangeId);
        // 关闭加载图标
        ElLoading.service().close();
        prompt.value = "";
        current.value = 1;
        await handleCurrentChange(1);
        ElNotification({
          message: "删除成功",
          type: "success",
        });
      } catch (e) {
        console.log("取消删除");
      }
    }

    async function handleCurrentChange(pageNum) {
      try {
        let res = await GetRedemptionCodePage(pageNum, prompt.value);

        let records = res.records;
        if (records.length > 0) {
          for (const r of records) {
            r.createdTime = conversionTime(r.createdTime);
          }
          dataTables.value = records;

          console.log(total);
        } else {
          empty.value = true;
        }
        current.value = res.current;
        total.value = res.total;
        load.value = false;
        error.value = false;
      } catch (e) {
        load.value = false;
        error.value = true;
      }
    }

    return {
      deleteRedemption,
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
      handleAddRedemptionCode,
      form,
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

/deep/ .el-input__inner {
  background: var(--bgColor2);

  font-weight: 400;
  color: var(--textColor2);
}

/deep/ .el-input__wrapper {
  background: var(--bgColor2);
  box-shadow: none;
}
</style>
