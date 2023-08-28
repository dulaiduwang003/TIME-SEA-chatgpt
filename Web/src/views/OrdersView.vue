<template>
 <div class="body">
   <ViewState class="state" v-if="!store.getters.userinfo" Type="error" ErrorText="登录后查看" IsShowBottom
              ButtonText="登录"
              @ClickTheButton="loginVisible = true"/>
   <ViewState class="state" v-else-if="load" LoadText="正在加载，请稍后..."/>
   <ViewState class="state" v-else-if="empty" Type="empty" ErrorText="暂无任何创作的数据"/>
   <ViewState class="state" v-else-if="error" @ClickTheButton="handleCurrentChange(1)" Type="error"
              ErrorText="加载错误，请重试" IsShowBottom ButtonText="重新加载"/>
   <div class="container" v-else>

     <div class="tab-box" >
       <div
           style="display: flex ;background-color: #7d80ff;height: 140px;margin-bottom: 40px;align-items: center;border-radius: 3px;box-shadow: 0 2px 6px rgb(27,30,32)">
         <div style="padding-left: 40px;color: white;">
           <div style="font-size: 35px;font-weight: 600">￥{{ amount }}</div>
           <div style="font-size: 15px;margin-top: 5px;padding-left: 5px">总打赏金额</div>
         </div>
       </div>
       <el-table :data="dataTables"  height="350px" :header-cell-style="{ background:' rgb(27,30,32)'}" style="background-color: rgb(27,30,32)"
                 :row-style="{ height: '100%', background:' rgb(27,30,32)' }">
         <el-table-column prop="ordersId" label="订单号" />
         <el-table-column prop="productName" label="商品名称"/>
         <el-table-column prop="frequency" label="获赠Ai币" />
         <el-table-column prop="productPrice" label="价格" />
         <el-table-column prop="payTime" label="支付时间" />
         <el-table-column prop="state" label="支付状态" />
       </el-table>
       <div style="display: flex;justify-content: right;padding-top: 10px">
         <el-pagination layout="prev, pager, next" :total="total" :page-size="15" background
                        @current-change="handleCurrentChange"/>
       </div>
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
import {conversionTime} from "@/utils/date";


export default {
  name: "ordersView",
  computed: {
    store() {
      return store
    }
  },
  components: {
    LoginDialog,
    ViewState
  },
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
      if (store.getters.userinfo){
        handleCurrentChange(current.value)
      }

    })

    async function handleCurrentChange(pageNum) {
      try {

        let res = await UsersOrdersPage(pageNum);

        let orders = res.orders;
        if (orders.records.length > 0) {
          orders.records.forEach(r => {
            if (r.state === 0) {
              r.state = "待支付"
              r.payTime = '---'
            }
            if (r.state === 1) {
              r.state = "已完成"
              let payTime = r.payTime;
              r.payTime = conversionTime(payTime);
            }
            if (r.state === 2) {
              r.state = "已取消"
              r.payTime = '---'
            }
            r.productPrice = r.productPrice + '元'
            r.frequency = r.frequency + '个'
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
  height: 600px;
  box-sizing: border-box;
  padding: 10px 20px 100px;
  margin-top: 30px;
  background-color: rgb(27,30,32);
  border-radius: 8px;
}

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
  background-color: #23282A;
}

::v-deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgb(125, 128, 255) !important;
}

::v-deep(.el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell ) {
  background: none ;

}

</style>
