<template lang="html">
<div class="credit-loan">
  <div class="sub-nav">
    <label>目前所在：</label>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/loan' }">我要贷款</el-breadcrumb-item>
      <el-breadcrumb-item>信用贷</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="select">
    <ul>
      <li>
        <span class="select-title">贷款金额：</span>
        <el-radio-group v-model="loanAmount" size="mini" @change="loanAmountFilter">
          <el-radio-button label="" >不限</el-radio-button>
          <el-radio-button label="5"  >5万</el-radio-button>
          <el-radio-button label="10" >10万</el-radio-button>
          <el-radio-button label="20" >20万</el-radio-button>
          <el-radio-button label="30" >30万</el-radio-button>
          <el-radio-button label="50" >50万</el-radio-button>
          <el-radio-button label="100" >100万</el-radio-button>
          <el-radio-button label="300" >300万</el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <span class="select-title">贷款期限：</span>
        <el-radio-group v-model="loanTimeLimit" size="mini" @change="loanTimeLimitFilter">
          <el-radio-button label="">不限</el-radio-button>
          <el-radio-button label="3">3个月</el-radio-button>
          <el-radio-button label="6">6个月</el-radio-button>
          <el-radio-button label="24">2年</el-radio-button>
          <el-radio-button label="36">3年</el-radio-button>
          <el-radio-button label="60">5年</el-radio-button>
          <el-radio-button label="120">10年</el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <span class="select-title">贷款类型：</span>
        <el-radio-group v-model="loanAmountOptions" size="mini" @change="loanAmountOptionsFilter">
          <el-radio-button label="">不限</el-radio-button>
          <el-radio-button label="1">房抵贷</el-radio-button>
          <el-radio-button label="3">保单贷</el-radio-button>
          <el-radio-button label="4">月供贷</el-radio-button>
          <el-radio-button label="5">工薪贷</el-radio-button>
          <el-radio-button label="6">车抵贷</el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <span class="select-title">职业身份：</span>
        <el-radio-group v-model="occupationalIdentity" size="mini" @change="occupationalIdentityFilter">
          <el-radio-button label="">不限</el-radio-button>
          <el-radio-button label="1">上班族</el-radio-button>
          <el-radio-button label="2">个体户/企业户</el-radio-button>
          <el-radio-button label="3">无业</el-radio-button>
        </el-radio-group>
      </li>
    </ul>
  </div>
  <div class="content">
    <div class="product-list" v-if="productList && productList.length > 0">
      <div class="filter">
        <span>排序方式：</span>
        <span :class="sortName =='' ? 'active' : 'no-active' " @click="sort()">默认排序</span>
        <span :class="sortName =='productAmtEnd' ? 'active' : 'no-active' " @click="sort('productAmtEnd')">贷款金额<i class="iconfont icon-web-icon-"></i></span>
        <span :class="sortName =='productCycleEnd' ? 'active' : 'no-active' " @click="sort('productCycleEnd')">贷款期限<i class="iconfont icon-web-icon-"></i></span>
        <span :class="sortName =='monthRate' ? 'active' : 'no-active' " @click="sort('monthRate')">月均利息<i class="iconfont icon-web-icon-"></i></span>
      </div>
      <div class="product-detail" v-for="item in productList">
        <img :src="item.zdPlat.platLog" :alt="item.zdPlat.platName" height="100" width="100">
        <div class="details">
          <div class="product-name">
            <span>【{{item.productName}}】</span>
            <span class="rate">贷款利息  {{item.monthRate}}%</span>
          </div>
          <div class="product-sum" >
            <div>
              <strong>{{item.productAmtStart}}-{{item.productAmtEnd}}</strong>万元
              <div>
                可贷款额度
              </div>
            </div>
            <div>
              <strong>{{item.productCycleStart}}-{{item.productCycleEnd}}</strong>个月
              <div>
                可贷款周期
              </div>
            </div>
              <el-button class="apply" @click="ToApplyNow(item.productId)">
                立即申请
              </el-button>
          </div>

        </div>
      </div>
      <div class="pagination" >
        <el-pagination
          @current-change="PageChange"
          :current-page="1"
          :page-size="12"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="no-product" v-if="!productList || productList.length < 1">
        <p>您的条件也太苛刻了吧，还没有找到产品</p>
    </div>
    <div class="right">
      <base-quick-apply-and-noob>
      </base-quick-apply-and-noob>
    </div>
  </div>
</div>
</template>

<script>
import BaseQuickApplyAndNoob from './common/BaseQuickApplyAndNoob';
import LoanService from '@/services/LoanService';

export default {
  data() {
    return {
      loanAmount: '',
      loanTimeLimit: '',
      loanAmountOptions: '',
      occupationalIdentity: '',
      productList: [],
      total: 0,
      pageNo: '',
      sortName: '',
    };
  },
  methods: {
    /**
     * 贷款表格
     * @type {[1.房地贷 3保单贷 4月供带 5工薪贷 6车抵贷]}
     */
    async fetchList() {
      const response = (await LoanService.payrollLoan({
        params: {
          pageNo: this.pageNo,
          productAmt: this.loanAmount,
          productCycle: this.loanTimeLimit,
          productType: this.loanAmountOptions,
          custProfession: this.occupationalIdentity,
          sortName: this.sortName,
        },
      })).data.data;
      this.productList = response.list;
      this.total = response.totalCount;
    },
    loanAmountFilter(val) {
      this.loanAmount = val;
      this.fetchList();
    },
    loanTimeLimitFilter(val) {
      this.loanTimeLimit = val;
      this.fetchList();
    },
    loanAmountOptionsFilter(val) {
      this.loanAmountOptions = val;
      this.fetchList();
    },
    occupationalIdentityFilter(val) {
      this.occupationalIdentity = val;
      this.fetchList();
    },
    PageChange(val) {
      this.pageNo = val;
      this.fetchList();
    },
    ToApplyNow(productId) {
      this.$router.push({
        name: 'ApplyNow',
        query: {
          productId,
        },
      });
    },
    sort(val = '') {
      this.sortName = val;
      this.fetchList();
    },
  },
  mounted() {
    this.occupationalIdentity = this.$route.query.custProfession || '';
    this.loanAmount = this.$route.query.productAmt || '';
    this.loanTimeLimit = this.$route.query.productCycle || '';
    this.fetchList();
  },
  components: {
    BaseQuickApplyAndNoob,
  },
};
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
        span{
          margin-left: 22px;
          cursor: pointer;
          &:first-child{
            margin-left: 0;
            cursor: default;
          }
        }
        .no-active{
          color: $title-color;
        }
        .active{
          color: $main-color;
        }
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
    .no-product{
      background-color: #fff;
      padding: 0 50px 0 25px;
      margin-top: 30px;
      width: 585px;
      height: 780px;
      margin-bottom: 120px;
      p{
        color: $main-color;
        text-align: center;
        margin-top: 60px;
      }
    }
  }
  .pagination{
    margin-top: 5px;
    text-align: center;
  }
}
</style>
