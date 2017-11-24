<template lang="html">
  <el-table
   :data="payrollLoan"
   stripe
   :show-header="false">
   <el-table-column
     prop="date"
     width="100">
   </el-table-column>
   <el-table-column
     prop="name"
     min-width="400">
   </el-table-column>
   <el-table-column width="100">
     <template slot-scope="scope">
       <el-button  type="primary" size="small">查看</el-button>
     </template>
   </el-table-column>
 </el-table>
</template>

<script>
export default {
  props: ['dfDf'],
  data () {
    return {
      payrollLoan: [{
        date: '2016-05-02',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-04',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-01',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-01',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }, {
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      },{
        date: '2016-05-03',
        name: '平安新一代车贷  信用贷款按揭,手续简单,利息低至7厘'
      }],
    }
  },
  mounted (){
    console.log(this.tableData, this.dfDf)
  }
}
</script>

<style lang="css">
</style>
