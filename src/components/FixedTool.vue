<template lang="html">
  <div class="fixedtool">
    <div class="custom-service">
      <a href="tencent://message/?Menu=yes&uin=2298479347" target="_blank"></a>
      <i class="iconfont icon-kefu"></i>
    </div>
    <div class="code">
      <img src="../assets/img/wx_code.png" alt="" class="img">
      <i class="iconfont icon-erweima"></i>
    </div>
    <div class="to-top" @click="toTop" :class="showToTop?'show':''">
      <i class="iconfont icon-iconzd1"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showToTop: false,
    };
  },
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      const scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop;
      if (scrollTop > 1000) {
        this.showToTop = true;
      } else {
        this.showToTop = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
.fixedtool{
  position: fixed;
  top: 70%;
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
    &.custom-service{
      position: relative;
      a{
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
      }
    }
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
    &.code:hover{
      .img{
        display: block;
      }
    }
  }
  .to-top{
    &.show{
      display: block;
    }
    display: none;
  }
}
</style>
