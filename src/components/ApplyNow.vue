<template lang="html">
  <div class="apply-now">
    <div class="sub-nav">
      <label>目前所在：</label>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/loan' }">我要贷款</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/loan' }">信用贷</el-breadcrumb-item>
        <el-breadcrumb-item>房抵贷</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="left">
        <div class="introduction">
          <div class="product-img"></div>
          <div class="product-name">
            <div class="name">
              【平安融e贷产品一】
            </div>
            <div class="number">
              成功申请<span>221</span>人
            </div>
          </div>
          <div class="product-rate">
            <div class="rate">
              <span class="star" v-for="(item,index) in 5" :class="Math.round(rate)>index+1?'on':'off'"></span>
              <span class="star-number">{{rate}}</span>
            </div>
          </div>
        </div>
        <div class="detail"></div>
      </div>
      <div class="right">
        <base-quick-apply-and-noob>
      </base-quick-apply-and-noob>
      </div>
    </div>
  </div>
</template>

<script>
import BaseQuickApplyAndNoob from './common/BaseQuickApplyAndNoob'
export default {
  data () {
    return {
      rate: 3.6
    }
  },
  components: {
    BaseQuickApplyAndNoob
  }
}
</script>

<style lang="scss">
.apply-now{
  width: 1000px;
  margin: 0 auto;
  .sub-nav{
    position: relative;
    padding: 38px;
    padding-left: 68px;
    label{
      position: absolute;
      left: 0;
      color: $title-color;
    }
  }
  .content{
    height: 809px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    .left{
      width: 660px;
      .introduction{
        height: 126px;
        padding: 17px 25px;
        background-color: #fff;
        display: flex;
        .product-img{
          background: url(../assets/img/product_img.png) center no-repeat;
          width: 126px;
          height: 126px;
        }
        .product-name{
          width: 240px;
          padding: 20px 30px;
          .number{
            margin-top: 54px;
            margin-left: 10px;
            span{
              font-size: 18px;
              color: $main-color;
            }
          }
        }
        .product-rate{
          .star{
            display: inline-block;
            margin-left: 5px;
            height: 19px;
            width: 20px;
            background: url(../assets/img/star_empty.png) no-repeat;
            &.on{
              background: url(../assets/img/star_full.png) no-repeat;
            }
            &.half{
              background: url(../assets/img/star_half.png) no-repeat;
            }
            &.off{
              background: url(../assets/img/star_empty.png) no-repeat;
            }
          }
          .star-number{
            font-size: 24px;
            margin-left: 5px;
            color: $main-color;
          }
        }
      }
      .detail{
        margin-top: 20px;
        background-color: #fff;
        height: 629px;
      }
    }
    .right{
      width: 321px;
    }
  }
}
</style>
