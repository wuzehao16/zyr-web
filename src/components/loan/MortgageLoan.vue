<template lang="html">
  <div class="mortagage-loan">
    <div class="sub-nav">
      <label>目前所在：</label>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/loan' }">我要贷款</el-breadcrumb-item>
        <el-breadcrumb-item>房抵贷</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="left">
        <el-tabs v-model="activeName"  class="table">
          <el-tab-pane label="房抵贷" name="first">
            <base-table  :type='1'></base-table>
          </el-tab-pane>
          <el-tab-pane label="车抵贷" name="second">
            <base-table  :type='1'></base-table>
          </el-tab-pane>
        </el-tabs>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      <div class="right">
        <base-quick-apply-and-noob>
        </base-quick-apply-and-noob>
      </div>
    </div>
  </div>
</template>

<script>
import BaseQuickApplyAndNoob from '../common/BaseQuickApplyAndNoob'
import BaseTable from '../common/BaseTable'
export default {
  data () {
    return {
      activeName: 'first',
    }
  },
  components: {
    BaseTable,
    BaseQuickApplyAndNoob
  }
}
</script>

<style lang="scss">
.mortagage-loan{
  width: 1000px;
  margin: 0 auto;
  .sub-nav{
    position: relative;
    padding: 38px;
    padding-left: 68px;
    label{
      position: absolute;
      left: 0;
      color: $title-color;
    }
  }
  .content{
    height: 809px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    .left{
      width: 660px;
      background-color: #fff;
      .table{
        padding: 15px 25px 0;
      }
      .pagination{
        margin-top: 15px;
      }
    }
    .right{
      width: 321px;
    }
  }
}
</style>
