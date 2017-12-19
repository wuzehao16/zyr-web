<template lang="html">
  <div class="home">
    <div class="banner" :style="{backgroundImage:'url('+ banner +')'}">
      <div class="center">
        <base-application>
        </base-application>
      </div>
    </div>
    <div class="commitment">
      <div class="title">
        <h1>我们的承诺</h1>
        <h2>OUR COMMITMENT</h2>
      </div>
      <div class="content">
        <div class="bg1">
          <img src="../assets/img/commitment1.png" alt="COMMITMENT">
          <span>一对一超优质服务</span>
        </div>
        <div class="bg2">
          <img src="../assets/img/commitment2.png" alt="COMMITMENT">
          <span>客户隐私严格保密</span>
        </div>
        <div class="bg3">
          <img src="../assets/img/commitment3.png" alt="COMMITMENT">
          <span>不成功无任何费用</span>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="title">
        <h1>我们的优势</h1>
        <h2>OUR ADVANTAGE</h2>
      </div>
      <div class="content">
        <div class="left">
          <div class="bank">
            <div class="france ">
              <div class="sub-title">
                月均费用
              </div>
              <div class="number">0.86%</div >
            </div>
            <div class="amount">
              <div class="sub-title">
                借10万，每月还
              </div>
              <div class="number">3637.78元</div >
            </div>
          </div>
          <div class="our">
            <div class="france ">
              <div class="sub-title">
                月均费用
              </div>
              <div class="number">0.60%</div >
            </div>
            <div class="amount">
              <div class="sub-title">
                借10万，每月还
              </div>
              <div class="number">3377.78元</div >
            </div>
          </div>
          <div class="petty">
            <div class="france ">
              <div class="sub-title">
                月均费用
              </div>
              <div class="number">1.98%</div >
            </div>
            <div class="amount">
              <div class="sub-title">
                借10万，每月还
              </div>
              <div class="number">4737.78元</div >
            </div>
          </div>
        </div>
        <div class="right">
          <div class="count">
            <div class="count-title">
              <span>贷款前算一算</span>
            </div>
            <div class="count-content">
              <span>借款金额：{{loanAmount*10000}}</span>
              <span>还款总额：{{payment}}元</span>
              <span>每月还款：</span>
              <span class="price">{{balance}}元</span>
            </div>
          </div>
          <div class="loan-amount">
            <span class="t">借款数额：</span>
            <div>
              <el-input placeholder="请输入内容" v-model="loanAmount">
                <template slot="append">万元</template>
              </el-input>
            </div>
          </div>
          <div class="loan-limit-time">
            <span class="t">借款数额：</span>
            <div>
              <el-radio-group v-model="loanTimeLimit"  size="mini" class="radio-group">
                <el-radio-button label="12期"></el-radio-button>
                <el-radio-button label="24期"></el-radio-button>
                <el-radio-button label="36期"></el-radio-button>
                <el-radio-button label="48期"></el-radio-button>
                <el-radio-button label="60期"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <el-button type="primary" class="apply" @click="toTop">立即申请</el-button>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="title">
        <h1>成功案例</h1>
        <h2>SUCCESSFUI CASE</h2>
      </div>
      <div class="con">
        <el-carousel :interval="10000" type="card" height="200px" width="820px">
          <el-carousel-item v-for="item in successfunCase" :key="item">
            <div class="container">
              <div class="l">
                <img :src="item.typeImg" alt="" height="150" width="200">
              </div>
              <div class="r">
                <div class="head">
                  {{item.title}}
                </div>
                <p>
                  {{item.txt}}
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="partner">
      <div class="title">
        <h1>合作伙伴</h1>
        <h2>OUR PARTNER</h2>
        <div class="content">
          <div><img src="../assets/img/zgyh.png" alt=""></div>
          <div><img src="../assets/img/payh.png" alt=""></div>
          <div><img src="../assets/img/jsyh.png" alt=""></div>
          <div><img src="../assets/img/gsyh.png" alt=""></div>
          <div><img src="../assets/img/nyyh.png" alt=""></div>
          <div><img src="../assets/img/jtyh.png" alt=""></div>
          <div><img src="../assets/img/puyh.png" alt=""></div>
          <div><img src="../assets/img/zsyh.png" alt=""></div>
          <div><img src="../assets/img/zxyh.png" alt=""></div>
          <div><img src="../assets/img/shyh.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoanService from '@/services/LoanService';
import BaseApplication from './common/BaseApplication';

export default {
  components: {
    BaseApplication,
  },
  data() {
    return {
      loanTimeLimit: '12期',
      loanAmount: 0,
      rate: '0.0060',
      banner: '',
      successfunCase: [],
    };
  },
  computed: {
    payment() {
      return Math.round((this.balance * this.loanTimeLimit.slice(0, 2) * 100)) / 100;
    },
    balance() {
      return Math.round((((this.loanAmount / this.loanTimeLimit.slice(0, 2))
      + (this.loanAmount * this.rate)) * 10000) * 100) / 100;
    },
  },
  methods: {
    toTop() {
      this.loanAmount = 0;
      window.scrollTo(0, 0);
    },
  },
  async mounted() {
    const response = (await LoanService.getBanner({
      params: {
        ctgId: 6,
      },
    })).data.data;
    this.banner = response[0].logo;
    const list = (await LoanService.contentList({
            params: {
              channelIds: 113,
              count: 6,
            },
          })).data;
    this.successfunCase = list.slice(1);
    console.log(this.successfunCase)
  },
};
</script>

<style lang="scss">
@import '../assets/scss/common.scss';
.home{
  min-width:1000px;
  background-color: #ffffff;
  .title{
    padding-top: 70px;
    text-align: center;
    color: $main-color;
    h1{
      font-size: 38px;
    }
    h2{
      font-size: 22px;
    }
  }
  .banner{
    height: 667px;
    background: no-repeat center;
    position: relative;
    .center{
      height: 667px;
      width: 1000px;
      margin: 0 auto;
      position: relative;
      .application{
        position:absolute;
        top: 75px;
        right: 10px;
      }
    }

  }
  //公共的content
  .content{
    width: 1000px;
    margin: 0 auto;
    display: flex;
  }
  .commitment{
    height: 622px;
    .content{
      justify-content: space-between;
      div{
        height: 260px;
        width: 310px;
        position: relative;
        span{
          font-size: 28px;
          color: $main-color;
          width: 310px;
          text-align: center;
          display: inline-block;
          position: absolute;
          bottom: 56px;
          left: 0px;
        }
      }
    }
  }
  .advantage{
    height: 760px;
    background-color: $bg-color;
    .content{
      .france,.amount{
        display: inline-block;
        height: 100%;
        width: 155px;
        margin-left: 170px;
        font-size: 24px;
        div{
          padding-right: 30px;
          text-align: right;
        }
        .sub-title{
          color: $word-color;
          padding-top: 36px;
        }
        .number{
          margin-top: 14px;
          color: #f3ab55;
        }
      }
      .amount{
        margin-left: 0px;
        width: 230px;
      }
      .left{
        width: 600px;
        .bank{
          height: 136px;
          background: url('../assets/img/bank.png');
          background-repeat:no-repeat;
        }
        .our{
          height: 181px;
          margin-top: 34px;
          margin-left: -12px;
          background: url('../assets/img/our.png');
          background-repeat:no-repeat;
          .number{
            color:$main-color;
          }
        }
        .petty{
          height: 135px;
          margin-top: 24px;
          background: url('../assets/img/less.png');
          background-repeat:no-repeat;
        }
      }
      .right{
        width: 400px;
        .count{
          height: 273px;
          width: 361px;
          margin: 0 auto;
          background-color: #fff;
          box-shadow: #666 0px 0px 10px;
          .count-title{
            height: 50px;
            line-height: 50px;
            margin-left: 40px;
            font-size: 20px;
            border-bottom: 2px solid $line-color;
            span{
              height: 50px;
              display: inline-block;
              border-bottom: 2px solid $main-color;
            }
          }
          .count-content{
            padding-left: 38px;
            color:$title-color;
            font-size: 20px;
            span{
              padding-top: 23px;
              display: block;
            }
            .price{
              font-size: 30px;
              font-weight: bold;
              color:$main-color;
            }
          }
        }
        .loan-amount, .loan-limit-time{
          display: flex;
          margin-top: 28px;
          .t{
            flex: 0 0 90px;
            font-size: 18px;
            line-height: 40px;
          }
          div{
            flex-grow: 1;
          }
        }
        .loan-limit-time{
          div{
            .radio-group{
              padding-top: 6px;
            }
          }
        }
        .apply{
          margin-top: 30px;
          width: 100%;
        }
      }
    }
  }
  //成功案例
  .case{
    height: 577px;
    .con{
      width: 1000px;
      margin: 0 auto;
      .container{
        padding: 20px 10px;
        display: flex;
        .l{
          width: 200px;
          height: 150px;
          flex: 0 0 200px;
          margin-right: 20px;
        }
        .r{
          color:$title-color;
          .head{
            font-size: 22px;
          }
          p{
            font-size: 13px;
          }
        }
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel__item{
        border: 1px solid $line-color;
        background-color: #ffffff;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #ffffff;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #ffffff;
      }
    }
  }
  .partner{
    background-color: #f4f4f7;
    padding-bottom: 80px;
    .content{

      flex-wrap: wrap;
      justify-content: flex-start;
      div{
        height: 70px;
        width: 150px;
        background-color: orange;
        margin-top: 32px;
        margin-left: 60px;
      }
      div:nth-child(5n+1){
        margin-left: 0px;
      }
    }
  }
}

</style>
