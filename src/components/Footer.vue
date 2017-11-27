<template lang="html">
  <div class="footer">
    <div class="container">
      <div class="us">
        <router-link to="/contactus">联系我们</router-link>
        <router-link to="/aboutus">关于我们</router-link>
        <router-link to="/feedback">意见反馈</router-link>
        <router-link to="/disclaimer">免责声明</router-link>
        <router-link to="/joinus">加入我们</router-link>
      </div>
      <div class="info">
        <p>
          <span class="phone">服务热线：400-800-8820</span>
          <span class="address">地址：广东省深圳市福田区上梅林卓越城二期17楼</span>
        </p>
        <p>众易融信息咨询（深圳）有限公司 Copyright © 2017 zhongyirongi.com All Rights Reserved. 粤ICP备15039148号-2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer{
  height: 200px;
  background-color: #4e3932;
  color: #fff;
  font-size: 18px;
  .container{
    width: 1000px;
    margin: 0 auto;
    .us{
      padding-top: 50px;
      padding-left: 180px;
      height: 20px;
      a{
        color: #fff;
        text-decoration: none;
        float:left;
        padding: 0 30px;
        border-right: 2px solid #fff;
      }
      a:last-child{
        border-right: none;
      }
    }
    .info{
      margin-top: 36px;
      .address{
        margin-left: 45px;
      }
      p{
        text-align: center;
      }
    }
  }
}
</style>
