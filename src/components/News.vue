<template lang="html">
  <div class="news">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>新闻中心</h2>
        <div class="info">
          <div class="item" v-for="item in list">
            <div class="image">
              <img :src="item.typeImg" alt="" height="100" width="171">
            </div>
            <div class="content" >
              <div class="title"><a :href="item.url" target="_blank">{{item.title}}</a></div>
              <div class="time">
                2017-11-21  16:31:12
              </div>
              <p class="txt" v-html="item.txt"></p>
            </div>
          </div>
          <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="5"
          layout="total, prev, pager, next, jumper"
          :total="total"
          class="pagination">
        </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoanService from '@/services/LoanService';
import TopBar from './common/BaseAboutUsTopBar';

export default {
  data() {
    return {
      list: [],
      total: '',
      first: 0,
    };
  },
  components: {
    TopBar,
  },
  methods: {
    handleCurrentChange(val) {
      this.first = 5 * (val - 1);
      this.fetchNews();
    },
    async fetchNews() {
      this.list = (await LoanService.contentList({
        params: {
          channelIds: 98,
          count: 5,
          first: this.first,
        },
      })).data;
      this.total = this.list[0].count;
      this.list = this.list.slice(1);
      this.handleTxt();
    },
    handleTxt() {
      for (const item of this.list) {
        item.txt.replace(/_([^"]*)_/g, '');
      }
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style lang="scss">
.news{
  .body{
    background: url(../assets/img/about_us_bg.jpg) no-repeat;
    height: 1000px;
    .container{
      background-color: #fff;
      width: 940px;
      height: 780px;
      margin: 0 auto;
      top: 100px;
      position: relative;
      box-shadow: #999 0px 0px 10px;
      padding: 30px 48px;
      h2{
        font-size: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid $line-color;
        margin-bottom: 0;
      }
      .info{
        .item{
          height: 100px;
          padding: 15px;
          border-bottom: 1px dashed $line-color;
          display: flex;
          .image{
            width: 171px;
          }
          .content{
            margin-left: 22px;
            .title{
              font-size: 18px;
            }
            .time{
              font-size: 10px;
              margin-top: 10px;
              color: $title-color;
            }
            a{
              color: $title-color;
            }
            .txt{
              height: 33px;
              margin-top: 25px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              -o-text-overflow:ellipsis;
              color: $title-color;
            }
          }
        }
        .pagination{
          text-align: center;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
