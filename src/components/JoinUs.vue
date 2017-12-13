<template lang="html">
  <div class="about-us">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>加入我们</h2>
        <div class="info">
           <el-button size="mini" :class="index==0?'active':''" @click="index=0">产品部</el-button>
           <el-button size="mini" :class="index==1?'active':''" @click="index=1">研发部</el-button>
           <el-button size="mini" :class="index==2?'active':''" @click="index=2">行政部</el-button>
        </div>
        <div class="" v-if="index==0">
          产品部
        </div>
        <div class="" v-if="index==1">
          研发部
        </div>
        <div class="" v-if="index==2">
          行政部
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './common/BaseAboutUsTopBar';

export default {
  data() {
    return {
      index: 0,
    };
  },
  components: {
    TopBar,
  },
};
</script>

<style lang="scss">
.about-us{
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
        margin-top: 30px;
        font-size: 16px;
        text-indent: 33px;
        p{
          line-height: 30px;
          margin: 0;
        }
        .active{
          color: #fff;
          background-color: $main-color;
        }
      }
    }
  }
}
</style>
