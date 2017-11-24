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
       <el-button  type="primary" size="small" @click="ToApplyNow">查看</el-button>
     </template>
   </el-table-column>
 </el-table>
</template>

<script>
import LoanService from '@/services/LoanService.js'
export default {
  props: ['dfDf'],
  data () {
    return {
      payrollLoan: [],
    }
  },
  methods: {
    ToApplyNow () {
      this.$router.push('applynow')
    }
  },
  async mounted () {
    this.payrollLoan = (await LoanService.payrollLoan()).data
  },
}
</script>

<style lang="css">
</style>
