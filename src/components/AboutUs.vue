<template lang="html">
  <div class="about-us">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>公司简介</h2>
        <div class="info">
          <p>众易融是一家专业从事个人融资及企业融资服务的综合型互联网金融服务平台；通过线下专业团队协助客户制定融资计划并利用自身资本优化客户负债结构，从而降低客户融资成本。
          </p>
          <p>公司目前致力于实现信贷产品智能匹配，精攻房产抵押以及企业贷款；众易融以助力个人发展，助推中小企业发展为己任。</p>
        </div>
        <div class="bg">
          <img src="../assets/img/intro_1.jpg" alt="">
          <div class="right">
            <div class="">
              <img src="../assets/img/intro_2.jpg" alt="">
              <img src="../assets/img/intro_3.jpg" alt="" class="img2">
            </div>
            <div class="n2">
              <img src="../assets/img/intro_4.jpg" alt="">
              <img src="../assets/img/intro_5.jpg" alt="" class="img2">
            </div>
          </div>
        </div>
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
      }
      .bg{
        margin-top: 80px;
        display: flex;
        .right{
          margin-left: 20px;
          .img2{
            margin-left: 20px;
          }
          .n2{
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
