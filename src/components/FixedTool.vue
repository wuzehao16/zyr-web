<template lang="html">
  <div class="fixedtool">
    <div class="">
      <i class="iconfont icon-kefu"></i>
    </div>
    <div class="code">
      <img src="../assets/img/wx_code.png" alt="" class="img">
      <i class="iconfont icon-erweima"></i>
    </div>
    <div class="to-top" @click="toTop">
      <i class="iconfont icon-iconzd1"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toTop () {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="scss">
.fixedtool{
  position: fixed;
  top: 575px;
  display: block;
  width: 60px;
  z-index: 4;
  right: 50%;
  text-align: center;
  margin-right: -655px;
  div{
    height: 60px;
    background-color: #fff;
    border: 1px solid $line-color;
    i{
      cursor: pointer;
      color: $title-color;
      line-height: 60px;
      font-size: 40px;
    }
    .img{
      position: absolute;
      left: -280px;
      top:-200px;
      display: none;
    }
    .code:hover{
      background-color: red;
      .img{
        display: block;
      }
    }
  }
}
</style>
