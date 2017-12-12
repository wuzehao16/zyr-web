<template lang="html">
  <div class="base-table">
  <el-table
   :data="Loan"
   stripe
   :show-header="false">
   <el-table-column
     width="100"
     prop="zdPlat"
     >
     <template slot-scope="scope">
       <img :src="scope.row.zdPlat.platLog" :alt="scope.row.zdPlat.platName" class="product-img" height="46" width="46">
         <!-- <img src="../../assets/img/test.jpg" alt=""  class="product-img" height="46" width="46"> -->
     </template>
   </el-table-column>
   <el-table-column
     prop="productIntroduct"
     width="440">
   </el-table-column>
   <el-table-column width="100">
     <template slot-scope="scope">
       <el-button  type="primary" size="small" @click="ToApplyNow(scope.row)">查看</el-button>
     </template>
   </el-table-column>
 </el-table>
 <div class="pagination" v-if="paShow">
   <el-pagination
     @current-change="handleCurrentChange"
     :current-page="1"
     :page-size="12"
     layout="total, prev, pager, next"
     :total="total">
   </el-pagination>
 </div>
</div>
</template>

<script>
import LoanService from '@/services/LoanService.js'
export default {
  props: ['type', 'pageSize', 'show'],
  data() {
    return {
      Loan: [],
      total: 0,
      paShow: false,
      pageNo: 1
    }
  },
  methods: {
    ToApplyNow(row) {
      this.$router.push({
        name: 'ApplyNow',
        params: {
          row
        },
        query: {
          productId: row.productId
        }
      })
    },
    handleCurrentChange(val) {
      this.pageNo = val
      this.fetchList()
    },
    /**
     * 贷款表格
     * @type {[1.房地贷 3保单贷 4月供带 5工薪贷 6车抵贷]}
     */
    async fetchList() {
      const response = (await LoanService.payrollLoan({
        params: {
          productType: this.type,
          pageSize: this.pageSize,
          pageNo: this.pageNo
        }
      })).data.data
      this.Loan = response.list
      this.total = response.totalCount
    }
  },
  mounted() {
    this.fetchList()
    if (this.show) {
      this.paShow = true
    }
  }
}
</script>

<style lang="scss">
.base-table{
  .product-img{
    position:absolute;
    left: 15px;
    top: 6px;
  }
}
.pagination{
  text-align: center;
}
</style>
