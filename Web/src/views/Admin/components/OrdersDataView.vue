<template>
  <div class="u_container">
    <div class="head_model">
      <div class="head_model_style">
        <div class="number_people">￥ {{ amount }}</div>
        <div class="text_people">收入</div>
      </div>
    </div>
    <el-table :data="dataTables" height="300px"
              :header-cell-style="{ background:' rgb(27,30,32)',borderColor:'#202020'}"
              style="background-color: rgb(27,30,32)"
              :row-style="{ height: '100%', background:' rgb(27,30,32)',border:'none' }">
      <el-table-column prop="ordersId" label="订单号"/>
      <el-table-column prop="productName" label="商品名称"/>
      <el-table-column prop="frequency" label="Ai币"/>
      <el-table-column prop="payTime" label="支付时间"/>
      <el-table-column prop="productPrice" label="商品价格"/>
      <el-table-column prop="state" label="支付状态"/>
      <el-table-column prop="reasonFailure" label="原因"/>
      <el-table-column fixed="right" label="操作" >
        <template #header>
          <el-input style="width: 180px" v-model="prompt" size="small" placeholder="模糊搜索" @change="search"/>
        </template>
      </el-table-column>

    </el-table>
    <div style="display: flex;justify-content: right;padding-top: 10px">
      <el-pagination layout="prev, pager, next" :total="total" :page-size="15" background
                     @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import store from "@/store";
import {getOrdersPage} from "../../../../api/BSideApi";
import {conversionTime} from "@/utils/date";


export default {
  name: "ordersDataView",
  computed: {
    store() {
      return store
    }
  },
  setup() {
    let loginVisible = ref(false)
    const dataTables = ref([])
    const current = ref(1)
    const total = ref(0)
    const amount = ref(0)
    const prompt = ref('')
    let load = ref(true)
    let empty = ref(false)
    let error = ref(false)
    onMounted(() => {
      if ( store.getters.userinfo&&  store.getters.userinfo.type==='ADMIN') {
        handleCurrentChange(current.value)
      }
    })

    function search() {
      current.value = 1
      dataTables.value = []
      handleCurrentChange(1)
    }

    async function handleCurrentChange(pageNum) {

      try {
        let res = await getOrdersPage(pageNum, prompt.value);
        let records = res.orders.records;
        if (records.length > 0) {
          records.forEach(r => {
            if (!r.email) {
              r.email = '--'
            }
            if (r.state===0){
              r.state = '待支付'
            }else if (r.state ===1){
              r.state = '已支付'
            }else{
              r.state = '已取消'
            }
            if (!r.reasonFailure){
              r.reasonFailure = '--'
            }
            if (!r.payTime) {
              r.payTime = '--'
            } else {
              r.payTime = conversionTime(r.payTime)
            }
          })
          amount.value = res.totalAmount
          dataTables.value = records
          current.value = res.orders.current
          total.value = res.orders.total
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

::v-deep(.el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell ) {
  background: none !important;


}

::v-deep(.el-pagination .is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgb(125, 128, 255);
}


::v-deep(.el-table-fixed-column--right) {
  background: rgb(27, 30, 32) !important;
}

::v-deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgb(125, 128, 255) !important;
}

::v-deep(.el-table--enable-row-hover .el-table__body tr:hover td.el-table__cell ) {
  background: none;

}

.head_model {
  display: flex;
  background-color: #7d80ff;
  height: 130px;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgb(27, 30, 32)
}

.head_model_style {
  padding-left: 40px;
  color: white;
}

.number_people {
  font-size: 35px;
  font-weight: 600
}

.text_people {
  font-size: 15px;
  margin-top: 5px;
  padding-left: 5px
}

/deep/ .el-input__inner {

  background: rgb(39, 41, 42);

  font-weight: 400;
  color: #b7b7b7;
}

/deep/ .el-input__wrapper {
  background: rgb(39, 41, 42);
  box-shadow: none;
}

</style>
