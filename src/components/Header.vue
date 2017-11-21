<template lang="html">
<div class="header">
  <div class="center">
    <div class="logo">

    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" >
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/loan">我要贷款</router-link></el-menu-item>
        <el-menu-item index="4">帮助中心</el-menu-item>
        <el-menu-item index="5"><router-link to="/foo">关于我们</router-link></el-menu-item>
      </el-menu>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style lang="scss">
.header{
  width: 100%;
  background-color: #fff;
  .center{
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    .logo{
      width: 60px;
      height: 60px;
    }
    .el-menu{
      li{
        a{
          text-decoration: none;
        }
      }
    }
  }
}
</style>
