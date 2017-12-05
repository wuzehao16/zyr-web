<template lang="html">
<div class="header">
  <div class="center">
    <div class="logo">
      <img src="" alt="logo" height="60" width="60">
    <div class="address">
      {{city}}
    </div>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" >
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/loan">我要贷款</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/helpcenter">帮助中心</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/aboutus">关于我们</router-link></el-menu-item>
      </el-menu>
    </div>
  </div>
</div>
</template>

<script>
import LoanService from '@/services/LoanService'
export default {
  data () {
    return {
      activeIndex: '1',
      province: '',
      city: ''
    }
  },
  async mounted () {
    // await(LoanService.getAddress())
    this.province = remote_ip_info["province"]
    this.city = remote_ip_info["city"]
  }
}
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
