<template lang="html">
  <div class="news">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>新闻中心</h2>
        <div class="info">
          <div class="item" v-for="item in list">
            <img src="../assets/img/news-img.jpg" alt="">
            <div class="content" >
              <div class="title">{{item.title}}</div>
              <div class="time">
                2017-11-21  16:31:12
              </div>
              <p v-html="item.txt"></p>
            </div>
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
  </div>
</template>

<script>
import LoanService from '@/services/LoanService';
import TopBar from './common/BaseAboutUsTopBar';

export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    TopBar,
  },
  async mounted() {
    this.list = (await LoanService.contentList({
      params: {
        channelIds: 98,
      },
    })).data;
    this.list.splice(0, 6);
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
            p{
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
