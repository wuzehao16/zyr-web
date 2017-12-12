<template>
  <div class="loan">
    <el-carousel :interval="5000" arrow="always" class="carousel" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
      <base-application>
      </base-application>
    </el-carousel>
    <div class="approach">

    </div>
    <div class="body">
      <!-- 快速查找贷款 -->
      <div class="find-loan">
        <div class="title">
          <h1>快速查找贷款</h1>
        </div>
        <div class="content">
          <label>职业身份：</label>
          <el-select v-model="occupation" placeholder="请选择">
            <el-option
              v-for="item in occupationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <label>贷款金额：</label>
          <el-select v-model="loanAmount" placeholder="请选择">
            <el-option
              v-for="item in loanAmountOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <label>贷款期限：</label>
          <el-select v-model="loanTimeLimit" placeholder="请选择">
            <el-option
              v-for="item in loanTimeLimitOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" class="find-btn" size="small" @click="search">搜索</el-button>
        </div>
      </div>
      <!-- 信用贷 -->
      <div class="credit-loan">
        <div class="main-title">
          <h1>信用贷</h1>
          <div class="more">

            <router-link to="/creditloan">更多<i class="iconfont icon-gengduo"></i></router-link>
          </div>
        </div>
        <div class="content">
          <div class="left">
            <div class="title">
              <!-- <img src="../assets/img/credit-loan.jpg" alt=""> -->
            </div>
            <el-tabs v-model="creditActiveName" >
              <el-tab-pane label="工薪贷" name="first">
                  <base-table  :type='5'></base-table>
              </el-tab-pane>
              <el-tab-pane label="月供贷" name="second">
                <base-table  :type='4'></base-table>
              </el-tab-pane>
              <el-tab-pane label="保单贷" name="third">
                <base-table  :type='3'></base-table>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 最新放款动态 -->
          <div class="right">
            <div class="title">
              最新放款动态
            </div>
            <el-table
             :data="loan"
             :show-header="false"
             >
             <el-table-column
               prop="lendedTime"
               min-width="50">
             </el-table-column>
             <el-table-column
               prop="custRelName"
               min-width="60">
             </el-table-column>
             <el-table-column
                prop="status"
               min-width="60">
             </el-table-column>
             <el-table-column
               prop="loanAmt"
               min-width="80" class="money">
             </el-table-column>
           </el-table>
          </div>
        </div>
      </div>
      <!-- 抵押贷 -->
      <div class="mortgage-loan">
        <div class="main-title">
          <h1>抵押贷</h1>
          <div class="more">
            <router-link to="/mortgageloan">更多<i class="iconfont icon-gengduo"></i></router-link>
          </div>
        </div>
        <div class="content">
          <div class="left">
            <div class="title">
              <!-- <img src="../assets/img/credit-loan.jpg" alt=""> -->
            </div>
            <el-tabs v-model="mortgageActiveName" >
              <el-tab-pane label="房抵贷" name="first">
                <base-table  :type='1'></base-table>
              </el-tab-pane>
              <el-tab-pane label="车抵贷" name="second">
                <base-table  :type='6'></base-table>
             </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 最佳服务之星 -->
          <div class="right">
            <div class="title">
              最佳服务之星
            </div>
            <div class="star">
              <div class="row" v-for="item in serviceStarList">
                <div class="ranking">

                </div>
                <div class="avatar">

                </div>
                <div class="details">
                  <div class="name">
                    {{item.waiter}}
                  </div>
                  <p>{{item.slogan}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 常见问题,新闻资讯,平台公告 -->
      <div class="info-loan">
        <div class="problem">
          <div class="title">
            <div class="name">常见问题</div>
            <div class="more">
              <router-link :to="{ name: 'HelpCenter', params: { index: 2 }}">更多<i class="iconfont icon-gengduo"></i></router-link>
            </div>
          </div>
          <div class="main">
            <ul>
              <li>贷款的基本常识有哪些？</li>
              <li>信用卡最大额度不够，该如何增加？怎样快速提高自己的信用值？</li>
               <li>贷款的基本常识有哪些？</li>
               <li>用卡最大额度不够，该如何增加？</li>
            </ul>
          </div>
        </div>
        <div class="news">
          <div class="title">
            <div class="name">新闻资讯</div>
            <div class="more">
              <router-link to="/news">更多<i class="iconfont icon-gengduo"></i></router-link>
            </div>
          </div>
          <div class="main">
            <ul>
              <li>贷款的基本常识有哪些？</li>
              <li>信用卡最大额度不够，<span>【2017-11-09】</span></li>
               <li>贷款的基本常识有哪些？</li>
               <li>用卡最大额度不够，该如何增加？</li>
            </ul>
          </div>
        </div>
        <div class="notice">
          <div class="title">
            <div class="name">平台公告</div>
            <div class="more">
              <router-link to="/platformannouncement">更多<i class="iconfont icon-gengduo"></i></router-link>
            </div>
          </div>
          <div class="main">
            <ul>
              <li><span>贷款的基本常识有哪些？</span>【2017-11-09】</li>
              <li><span>信用卡最大额度不够</span><span>【2017-11-09】</span></li>
               <li><span>贷款的基本常识有哪些？</span><span>【2017-11-09】</span></li>
               <li>用卡最大额度不够?<span>【2017-11-09】</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="partner">
        <h1>合作伙伴</h1>
        <div class="content">
          <div v-for="item in 15"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTable from './common/BaseTable'
import BaseApplication from './common/BaseApplication'
import LoanService from '@/services/LoanService'
export default {
  name: 'loan',
  data() {
    return {
      checked: true,
      creditActiveName: 'first', // 信用贷
      mortgageActiveName: 'first',
      occupation: '',
      serviceStarList: "",
      occupationOptions: [{
        value: '1',
        label: '上班族'
      }, {
        value: '2',
        label: '个体户/企业主'
      }, {
        value: '3',
        label: '无业'
      }],
      loanAmount: '',
      loanAmountOptions: [{
        value: '5',
        label: '5万'
      }, {
        value: '10',
        label: '10万'
      }, {
        value: '20',
        label: '20万'
      }, {
        value: '30',
        label: '30万'
      }, {
        value: '50',
        label: '50万'
      }, {
        value: '100',
        label: '100万'
      }, {
        value: '300',
        label: '300万'
      }],
      loanTimeLimit: '',
      loanTimeLimitOptions: [{
        value: '3',
        label: '3个月'
      }, {
        value: '6',
        label: '6个月'
      }, {
        value: '24',
        label: '2年'
      }, {
        value: '36',
        label: '3年'
      }, {
        value: '60',
        label: '5年'
      }, {
        value: '120',
        label: '10年'
      }],
      loan: []
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'CreditLoan',
        params: {

        },
        query: {
          custProfession: this.occupation,
          productAmt: this.loanAmount,
          productCycle: this.loanTimeLimit
        }
      })
    }
  },
  async mounted() {
    this.loan = (await LoanService.loan()).data.data
    this.serviceStarList = (await LoanService.serviceStarList()).data.data.list
  },
  components: {
    BaseApplication,
    BaseTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '../assets/scss/common.scss';
.loan{
  .approach{
    height: 120px;
    background: url(../assets/img/step.jpg);
    background-repeat: no-repeat;
    background-color: #fff;
    background-position: center;
  }
  .application{
    position:absolute;
    top: 15px;
    right: 460px;
    z-index: 10;
  }
  .body{
    background-color: $bg-color;
    width: 1000px;
    margin: 0 auto;
    h1{
      font-size: 20px;
      color: $title-color;
      margin-bottom: 40px;
    }
    /* 快速查找贷款 */
    .find-loan{
      margin-top: 70px;
      font-size: 14px;
      .title{
        margin-bottom: 40px;
      }
      .content{
        background-color: #fff;
        padding: 40px 0;
        label{
          margin-left: 20px;
        }
        .find-btn{
          margin-left: 10px;
        }
      }
    }
     /* 信用贷 抵押贷通用*/
    .credit-loan, .mortgage-loan{
      .el-tabs__header{
        padding-left: 30px;
      }
      margin-top: 70px;
      .main-title{
        display: flex;
        justify-content: space-between;
        width: 640px;
        .more{
          a{
            line-height: 50px;
            color: $title-color;
            cursor: pointer;
            text-decoration: none;
          }
          .icon-gengduo{
            margin-left: 10px;
          }
        }
      }
      .content{
        display: flex;
        justify-content: space-between;
        .el-table__row{
          height: 60px;
        }
        .left{
          flex-grow: 1;
          flex:0 0  640px;
          position: relative;
          margin-top: 22px;
          .title{
            position: absolute;
            top: -24px;
            left: 0px;
            height: 76px;
            width: 100%;
            line-height: 76px;
            color: #fff;
            background: url(../assets/img/credit-loan.jpg);
            background-size: 100%;
          }
          .el-tabs__item.is-active{
            color: #fff;
            font-size:16px;
            font-weight: 800;
          }
          .el-tabs__active-bar{
            visibility: hidden;
          }
          .el-tabs__nav-wrap::after{
            position: static;
          }
          .el-tabs__item{
            color: #ffdbcc;
            font-size:16px;
          }
        }
        .right{
          flex:0 0 320px;
          .title{
            height: 76px;
            line-height: 76px;
            color: #fff;
            padding-left: 20px;
            background: url(../assets/img/loan.jpg)
          }
          .money{
            color: $main-color;
          }
        }
      }
    }
    .mortgage-loan{
      .content{
        .left{
          .title{
            background: url(../assets/img/mortgage-loan.jpg);
            div{
              float: left;
              padding-left: 10px;
            }
          }
        }
        .right{
          .title{
            background: url(../assets/img/trends.jpg);
          }
          .star{
            background-color: #fff;
            .row{
              height: 100px;
              width: 100%;
              border-bottom: 1px dashed #eaeaea;
              display: flex;
              .ranking{
                flex: 0 0 60px;
                background: url(../assets/img/first.png) center no-repeat;

              }
              .avatar{
                flex:0 0 80px;
                background: url(../assets/img/avatar.jpg) center no-repeat;
              }
              .details{
                padding:20px 10px 0 0;
                .name{
                  font-size: 16px;
                }
                p{
                  font-size: 12px;
                  color: $title-color;
                }
              }
            }
          }
        }
      }
    }
    /* 其他 */
    .info-loan{
      margin-top: 70px;
      display: flex;
      justify-content: space-between;
      .title{
        width: 322px;
        color: $title-color;
        display: flex;
        .name{;
          font-size: 20px;
          padding-bottom: 25px;
          border-bottom: 2px solid $main-color;
        }
        .more{
          cursor: pointer;
          flex-grow: 1;
          text-align: right;
          border-bottom: 2px solid $line-color;
          a{
            font-size: 16px;
            line-height: 24px;
            color: $title-color;
            cursor: pointer;
            text-decoration: none;
          }
          .icon-gengduo{
            margin-left: 10px;
          }
        }
      }
      .problem,.news,.notice{
        width: 322px;
        .main{
          background-color: #fff;
          height: 237px;
          font-size: 14px;
          color: $title-color;
          ul{
            margin-top: 0px;
            height: 237px;
            li{
              padding-top: 30px;
            }
          }
        }
      }
      .news,.notice{
        ul{
          li{
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .partner{
      margin-top: 70px;
      margin-bottom: 50px;
      h1{
        margin-bottom: 10px;
      }
      .content{
        display: flex;
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
  // 跑马灯
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
}

</style>
