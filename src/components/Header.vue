<template lang="html">
<div class="header">
  <div class="center">
    <div class="left">
    <div class="logo">
      <a href="/"><img src="../assets/img/logo.png" alt="logo" height="50" width="140"></a>
    </div>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" >
        <el-menu-item index="1" @click="()=>{this.$router.push('/')}">首页</el-menu-item>
        <el-menu-item index="2"@click="()=>{this.$router.push('/loan')}">我要贷款</el-menu-item>
        <el-menu-item index="4"@click="()=>{this.$router.push('/helpcenter')}">帮助中心</el-menu-item>
        <el-menu-item index="5"@click="()=>{this.$router.push('/aboutus')}">关于我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      province: '',
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  .center{
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .left{
      width: 200px;
      height: 60px;
      display: flex;
      .logo{
        display: flex;
        align-items: center;
      }
      .address{
        display: inline-block;
        line-height: 60px;
        margin-left: 10px;
      }
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
