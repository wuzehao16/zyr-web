<template lang="html">
  <div class="about-us">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>联系我们</h2>
        <div class="info">
          <img src="../assets/img/address.jpg" alt="">
          <div class="more">
            <div class="text">
              <h4>客户服务</h4>
              <p class="phone">客服电话：400-9898-168</p>
              <p>企业邮箱：service@zyrbanking.com</p>
            </div>
            <div class="code">
              <img src="../assets/img/code.png" alt="">
              <span>微信公众号</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './common/BaseAboutUsTopBar';

export default {
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
        text-indent: 33px;
        p{
          line-height: 30px;
          margin: 0;
        }
        .more{
          padding:0 50px;
          display: flex;
          justify-content: space-between;
          .text{
            h4{
              font-size: 16px;
            }
            .phone{
              margin-top:40px;
            }
          }
          .code{
            margin-top:50px;
            position:relative;
            span{
              position: absolute;
              margin-left: -3px;
            }
          }
        }
      }
    }
  }
}
</style>
