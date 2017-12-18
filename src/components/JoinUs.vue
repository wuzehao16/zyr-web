<template lang="html">
  <div class="about-us">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2 class="title">加入我们</h2>
        <div class="info">
           <el-button size="mini"
             :class="jobIndex==index?'active':''"
             @click="jobIndex=index"
             v-for="(item,index) in list"
             :key="item.jobId">
             {{item.department}}
           </el-button>
        </div>

        <div class="content" v-if="jobIndex==index" v-for="(zd,index) in list">
          <div class="" v-for="item in zd.zdJob">
            <h2 class="position-title">{{item.jobName}}</h2>
            <h3>岗位要求：</h3>
            <div v-html="item.jobRequire"></div>
            <h3>任职资格：</h3>
            <div v-html="item.jobQualification"></div>
          </div>

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
      jobIndex: 0,
      list: [],
    };
  },
  components: {
    TopBar,
  },
  async mounted() {
    const response = (await LoanService.joinUs()).data.data;
    this.list = response
  },
};
</script>

<style lang="scss">
.about-us{
  .body{
    background: url(../assets/img/about_us_bg.jpg) no-repeat;
    height: 907px;
    .container{
      .position-title{
        margin: 50px auto;
      }
      background-color: #fff;
      width: 940px;
      height: 690px;
      margin: 0 auto;
      overflow-y: auto;
      top: 100px;
      position: relative;
      box-shadow: #999 0px 0px 10px;
      padding: 30px 48px;
      .title{
        font-size: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid $line-color;
      }
      .info{
        margin-top: 30px;
        font-size: 16px;
        p{
          line-height: 30px;
          margin: 0;
        }
        .active{
          color: #fff;
          background-color: $main-color;
        }
      }
      .content{
        margin-top: 50px;
        h3{
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
