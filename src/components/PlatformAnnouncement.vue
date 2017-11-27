<template lang="html">
  <div class="platform-announcement">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>平台公告</h2>
        <div class="info" v-for="item in 11">
          <span>建设银行提现通道维护</span>
          <span>[2017-11-21]</span>
        </div>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next, jumper"
        :total="400"
        class="pagination">
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './common/BaseAboutUsTopBar.vue'
export default {
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
.platform-announcement{
  .body{
    background: url(../assets/img/about_us_bg.jpg) no-repeat;
    height: 907px;
    .container{
      background-color: #fff;
      width: 940px;
      height: 690px;
      margin: 0 auto;
      top: 100px;
      position: relative;
      box-shadow: #999 0px 0px 10px;
      padding: 30px 48px;
      h2{
        font-size: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid $line-color;
      }
      .info{
        height: 50px;
        line-height:50px;
        border-bottom: 1px dashed $line-color;
        display: flex;
        justify-content: space-between;
        span{
          color: $title-color;
        }
      }
      .pagination{
        text-align: center;
        margin-top: 20px;
      }
    }
  }
}
</style>
