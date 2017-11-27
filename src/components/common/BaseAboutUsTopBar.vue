<template lang="html">
  <div class="about-us-tob-bar">
    <div class="us">
      <router-link to="/aboutus">关于我们</router-link>
      <router-link to="/platformannouncement">平台公告</router-link>
      <router-link to="/joinus">加入我们</router-link>
      <router-link to="/contactus">联系我们</router-link>
      <router-link to="/feedback">意见反馈</router-link>
      <router-link to="/disclaimer">免责声明</router-link>
      <router-link to="/news">新闻中心</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about-us-tob-bar{
  background-color: #fff;
  height: 60px;
  .us{
    padding-top: 24px;
    padding-left: 180px;
    height: 20px;
    width: 1000px;
    margin: 0 auto;
    .router-link-active{
      color: $main-color;
    }
    a{
      color: $title-color;
      text-decoration: none;
      float:left;
      padding: 0 30px;
      border-right: 1px solid  $title-color;
    }
    a:last-child{
      border-right: none;
    }
  }
}
</style>
