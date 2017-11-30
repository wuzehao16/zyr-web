<template lang="html">
<div class="credit-loan">
  <div class="sub-nav">
    <label>目前所在：</label>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/loan' }">我要贷款</el-breadcrumb-item>
      <el-breadcrumb-item>房抵贷</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="select">
    <ul>
      <li>
        <span class="select-title">贷款金额：</span>
        <el-radio-group v-model="loanAmount" size="mini">
          <el-radio-button label="不限"></el-radio-button>
          <el-radio-button label="5万"></el-radio-button>
          <el-radio-button label="10万"></el-radio-button>
          <el-radio-button label="20万"></el-radio-button>
          <el-radio-button label="30万"></el-radio-button>
          <el-radio-button label="50万"></el-radio-button>
          <el-radio-button label="100万"></el-radio-button>
          <el-radio-button label="300万"></el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <span class="select-title">贷款期限：</span>
        <el-radio-group v-model="loanTimeLimit" size="mini">
          <el-radio-button label="不限"></el-radio-button>
          <el-radio-button label="3个月"></el-radio-button>
          <el-radio-button label="6个月"></el-radio-button>
          <el-radio-button label="2年"></el-radio-button>
          <el-radio-button label="3年"></el-radio-button>
          <el-radio-button label="5年"></el-radio-button>
          <el-radio-button label="10年"></el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <span class="select-title">贷款类型：</span>
        <el-radio-group v-model="loanAmountOptions" size="mini">
          <el-radio-button label="不限"></el-radio-button>
          <el-radio-button label="个人信用贷"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <span class="select-title">职业身份：</span>
        <el-radio-group v-model="occupationalIdentity" size="mini">
          <el-radio-button label="不限"></el-radio-button>
          <el-radio-button label="上班族"></el-radio-button>
          <el-radio-button label="个体户/企业户"></el-radio-button>
          <el-radio-button label="自由职业"></el-radio-button>
        </el-radio-group>
      </li>
    </ul>
  </div>
  <div class="content">
    <div class="product-list">
      <div class="filter">
        排序方式
      </div>
      <div class="product-detail" v-for="item in 5">
        <img src="../assets/img/product_img.jpg" alt="">
        <div class="details">
          <div class="product-name">
            <span>【平安融e贷产品一】</span>
            <span class="rate">贷款利息  0.96%</span>
          </div>
          <div class="product-sum" >
            <div>
              <strong>5-50</strong>万元
              <div>
                可贷款额度
              </div>
            </div>
            <div>
              <strong>12-36</strong>个月
              <div>
                可贷款周期
              </div>
            </div>
              <el-button class="apply">
                立即申请
              </el-button>
          </div>

        </div>
      </div>
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
      loanAmount: '不限',
      loanTimeLimit: '不限',
      loanAmountOptions: '不限',
      occupationalIdentity: '不限'
    }
  },
  components: {
    BaseQuickApplyAndNoob
  }
}
</script>

<style lang="scss">
.credit-loan{
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
  .select{
    .select-title{
      color: $title-color;
    }
    background-color:#fff;
    padding: 25px 0;
    ul{
      li{
        list-style-type: none;
        margin-top: 20px;
      }
    }
  }
  .content{
    display: flex;
    justify-content: space-between;
    .product-list{
      background-color: #fff;
      padding: 0 50px 0 25px;
      margin-top: 30px;
      width: 585px;
      height: 780px;
      margin-bottom: 120px;
      .filter{
        color: $word-color;
        margin-top: 10px;
      }
      .product-detail{
        height: 100px;
        padding: 20px 0;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        .details{
          flex: 1;
          margin-left: 28px;
          .product-name{
            display: flex;
            justify-content: space-between;
            .rate{
              border: 1px solid #ffa335;
              background-color: #ffeeca;
              color: #ffa335;
            }
          }
          .product-sum{
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            >div{
              display: inline-block;
              >div{
                margin-top: 10px;
                color: $word-color;
              }
            }
            strong{
              font-size: 18px;
              color: $main-color;
            }
            .apply{
              height: 40px;
              border: 1px solid $main-color;
              color: $main-color;
            }
          }
        }
      }
    }
  }
}
</style>
