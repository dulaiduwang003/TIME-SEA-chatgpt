<template>
  <div class="questions">
    <ViewState class="state" v-if="!store.getters.userinfo" Type="error"
               ErrorText="登录后查看" IsShowBottom ButtonText="登录"
               @ClickTheButton="loginVisible = true"/>
    <ViewState class="state" v-else-if="load" LoadText="正在加载，请稍后..."/>
    <ViewState class="state" v-else-if="empty" Type="empty" ErrorText="暂无任何创作的数据"/>
    <ViewState class="state" v-else-if="error" @ClickTheButton="handleCurrentChange(1)" Type="error"
               ErrorText="加载错误，请重试"
               IsShowBottom ButtonText="重新加载"/>
    <div class="tab-box" v-else>
      <div
          style="display: flex ;background-color: #7d80ff;height: 140px;margin-bottom: 40px;align-items: center;border-radius: 3px;box-shadow: 0 2px 6px #acb5f6;">
        <div style="padding-left: 40px;color: white;">
          <div style="font-size: 35px;font-weight: 600">￥{{ amount }}</div>
          <div style="font-size: 15px;margin-top: 5px;padding-left: 5px">总打赏金额</div>
        </div>
      </div>
      <el-table :data="dataTables" stripe  height="360px"  :row-style="{height:'80px'}">
        <el-table-column prop="ordersId" label="订单号" width="150"/>
        <el-table-column prop="productName" label="商品名称" width="100"/>
        <el-table-column prop="frequency" label="获赠Ai币" width="200"/>
        <el-table-column prop="productPrice" label="价格" width="180"/>
        <el-table-column prop="createdTime" label="订单创建时间" width="180"/>
        <el-table-column prop="state" label="支付状态" width="180"/>
      </el-table>
      <div style="display: flex;justify-content: right;padding-top: 20px">
        <el-pagination layout="prev, pager, next" :total="total" :page-size="5" @current-change="handleCurrentChange"/>
      </div>
    </div>
    <LoginDialog :show="loginVisible" @close="loginVisible = false" @loginSucceeded="handleCurrentChange(1)"/>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import store from "@/store";
import {UsersOrdersPage} from "../../api/BSideApi";
import ViewState from "@/components/ViewState.vue";
import LoginDialog from "@/components/LoginDialog.vue";


export default {
  name: "ordersView",
  computed: {
    store() {
      return store
    }
  },
  components: {LoginDialog, ViewState},
  setup() {
    let loginVisible = ref(false)
    const dataTables = ref([])
    const current = ref(1)
    const total = ref(0)
    const amount = ref(0)
    let load = ref(true)
    let empty = ref(false)
    let error = ref(false)
    onMounted(() => {
      handleCurrentChange(current.value)
    })

    async function handleCurrentChange(pageNum) {
      try {

        let res = await UsersOrdersPage(pageNum);

        let orders = res.orders;
        if (orders.records.length > 0) {
          orders.records.forEach(r => {
              if (r.state === 0) {
                  r.state = "待支付"
              }
              if (r.state === 1) {
                  r.state = "已完成"
              }
              if (r.state === 2) {
                  r.state = "已取消"
              }
              r.productPrice = r.productPrice + '元'
              r.frequency = r.frequency+'个'
          });
          dataTables.value = orders.records
          current.value = orders.current
          total.value = orders.total
          amount.value = res.totalAmount

        } else {
          empty.value = true
        }
        load.value = false
        error.value = false
      } catch (e) {
        load.value = false
        error.value = true
      }
    }

    return {
      load,
      error,
      empty,
      amount,
      total,
      loginVisible,
      handleCurrentChange,
      dataTables
    };
  }

}
</script>

<style scoped>
.questions {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

.tab-box {
  background-color: white;
  width: 93%;
  height: 90%;
  border-radius: 15px;
  padding: 20px
}


</style>
