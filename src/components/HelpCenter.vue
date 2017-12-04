<template lang="html">
  <div class="helpcenter">
    <el-row class="tac">
      <el-col :span="5">
        <div class="title"></div>
        <el-menu
          :default-active="index"
          class="menu">
          <el-menu-item  index="0"  @click="index='0'">
            <template slot="title">
              新手上路
            </template>
          </el-menu-item >
          <el-menu-item index="1"  @click="index='1'">
            <span slot="title">常见问题</span>
          </el-menu-item>
          <el-menu-item index="2"  @click="index='2'">
            <span slot="title">温馨提示</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19">
        <div class="content" v-if="index==0">
          <div class="sub-title">
            新手上路
          </div>
          <ul class="list">
            <li v-for="item in 6">安全保障：在众易融平台借款有什么保障措施？</li>
          </ul>
        </div>
        <div class="content" v-if="index==1">
          <div class="sub-title">
            常见问题
          </div>
          <ul class="list">
            <li v-for="item in 6">安全保障：在众易融平台借款有什么保障措施？</li>
          </ul>
        </div>
        <div class="content" v-if="index==2">
          <div class="sub-title">
            温馨提示
          </div>
          <ul class="list">
            <li v-for="item in 6">安全保障：在众易融平台借款有什么保障措施？</li>
          </ul>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      index: '0'
    }
  },
  async mounted () {
    this.index = this.$route.params.index || '0'
  }
}
</script>

<style lang="scss">
@import '../assets/scss/common.scss';
.helpcenter{
  width: 1000px;
  margin: 0 auto;
  .menu{
    width: 200px;
    li{
      font-size: 18px;
      height: 80px;
      line-height: 80px;
      padding-left: 20px;
      text-align: center;
    }
  }
  .title{
    height: 100px;
    width: 200px;
    background: url('../assets/img/helpcenter.png');
  }
  .tac{
    margin-top: 40px;
    margin-bottom: 120px;
  }
  .content{
    background-color: #fff;
    margin-left: 20px;
    height: 650px;
    .sub-title{
      height: 36px;
      font-size: 18px;
      font-weight: bold;
      color: $title-color;
      padding-top: 40px;
      margin-left:60px;
      margin-right: 60px;
      border-bottom: 1px solid $line-color;
    }
    .list{
      margin-left: 40px;
      li{
        padding-top: 32px;
        font-size: 16px;
        color: $title-color;
      }
    }
  }
}
</style>
