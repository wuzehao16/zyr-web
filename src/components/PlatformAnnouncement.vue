<template lang="html">
  <div class="platform-announcement">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>平台公告</h2>
        <div class="info" v-for="item in list">
          <router-link target="_blank" :to="{ name: 'NewsDetail', query: {url:item.url} }">{{item.title}}</router-link>
          <span>{{item.releaseDate}}</span>
        </div>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next, jumper"
        :total="1"
        class="pagination">
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/common/BaseAboutUsTopBar';
import LoanService from '@/services/LoanService';

export default {
  data() {
    return {
      list: [],
      total: 0,
    };
  },
  components: {
    TopBar,
  },
  methods: {
    handleCurrentChange(val) {
      this.first = 10 * (val - 1);
      this.fetchNews();
    },
    async fetchList() {
      this.list = (await LoanService.contentList({
        params: {
          channelIds: 110,
          count: 10,
          first: this.first,
        },
      })).data;
      this.total = this.list[0].count;
      this.list = this.list.slice(1);
    },
  },
  async mounted() {
    this.fetchList();
  },
};
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
