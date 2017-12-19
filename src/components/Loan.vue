<template>
  <div class="loan">
  <el-carousel :interval="5000" arrow="always" class="carousel" height="500px">
    <el-carousel-item class="carousel-img" v-for="item in banner" :key="item.logo" :style="{backgroundImage:'url(' + item.logo + ')'}">
    </el-carousel-item>
    <div class="center">
      <base-application>
      </base-application>
    </div>
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
          <el-option v-for="item in occupationOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <label>贷款金额：</label>
        <el-select v-model="loanAmount" placeholder="请选择">
          <el-option v-for="item in loanAmountOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <label>贷款期限：</label>
        <el-select v-model="loanTimeLimit" placeholder="请选择">
          <el-option v-for="item in loanTimeLimitOptions" :key="item.value" :label="item.label" :value="item.value">
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
          <router-link :to="{name:'CreditLoan',
                query:{loanType:this.creditActiveName}}">
                更多
                <i class="iconfont icon-gengduo"></i>
          </router-link>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <div class="title">
            <!-- <img src="../assets/img/credit-loan.jpg" alt=""> -->
          </div>
          <el-tabs v-model="creditActiveName">
            <el-tab-pane label="工薪贷" name="5">
              <base-table :type='5'></base-table>
            </el-tab-pane>
            <el-tab-pane label="月供贷" name="4">
              <base-table :type='4'></base-table>
            </el-tab-pane>
            <el-tab-pane label="保单贷" name="3">
              <base-table :type='3'></base-table>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- 最新放款动态 -->
        <div class="right">
          <div class="title">
            最新放款动态
          </div>
          <el-table :data="loan" :show-header="false">
            <el-table-column prop="lendedTime" min-width="50" :formatter="dateFormat">
            </el-table-column>
            <el-table-column prop="custRelName" min-width="60">
            </el-table-column>
            <el-table-column min-width="60">
              <template slot-scope="scope">
                 成功
               </template>
            </el-table-column>
            <el-table-column prop="loanAmt" min-width="80" class="money">
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
          <router-link :to="{name:'MortgageLoan',
                query:{loanType:this.mortgageActiveName}}">
            更多
            <i class="iconfont icon-gengduo"></i>
          </router-link>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <div class="title">
            <!-- <img src="../assets/img/credit-loan.jpg" alt=""> -->
          </div>
          <el-tabs v-model="mortgageActiveName">
            <el-tab-pane label="房抵贷" name="1">
              <base-table :type='1'></base-table>
            </el-tab-pane>
            <el-tab-pane label="车抵贷" name="6">
              <base-table :type='6'></base-table>
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
              <div :class="item.baseStarRank==1?'ranking first':item.baseStarRank==2?'ranking second':'ranking third'">

              </div>
              <div class="avatar">
                <img :src="item.baseStarPicture" :alt="item.baseStarName" height="80" width="80">
              </div>
              <div class="details">
                <div class="name">
                  {{item.baseStarName}}
                </div>
                <p>{{item.baseStarAna}}</p>
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
            <li v-for="item in problemList">
              <a :href="item.url" target="_blank">{{item.title}}</a>
            </li>
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
            <li v-for="item in newsList">
              <a :href="item.url" target="_blank">{{item.title}}</a>
            </li>
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
            <li v-for="item in noticeList">
              <a :href="item.url" target="_blank">
              <span class="notice-title">

                  {{item.title}}

              </span>
              <span>【{{item.releaseDate.slice(0,10)}}】</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="partner">
      <h1>合作伙伴</h1>
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
import BaseTable from './common/BaseTable';
import BaseApplication from './common/BaseApplication';

export default {
  name: 'loan',
  data() {
    return {
      checked: true,
      creditActiveName: '5', // 信用贷
      mortgageActiveName: '1',
      occupation: '',
      serviceStarList: '',
      occupationOptions: [{
        value: '1',
        label: '上班族',
      }, {
        value: '2',
        label: '个体户/企业主',
      }, {
        value: '3',
        label: '无业',
      }],
      loanAmount: '',
      loanAmountOptions: [{
        value: '5',
        label: '5万',
      }, {
        value: '10',
        label: '10万',
      }, {
        value: '20',
        label: '20万',
      }, {
        value: '30',
        label: '30万',
      }, {
        value: '50',
        label: '50万',
      }, {
        value: '100',
        label: '100万',
      }, {
        value: '300',
        label: '300万',
      }],
      loanTimeLimit: '',
      loanTimeLimitOptions: [{
        value: '3',
        label: '3个月',
      }, {
        value: '6',
        label: '6个月',
      }, {
        value: '24',
        label: '2年',
      }, {
        value: '36',
        label: '3年',
      }, {
        value: '60',
        label: '5年',
      }, {
        value: '120',
        label: '10年',
      }],
      loan: [],
      banner: [],
      problemList: [],
      newsList: [],
      noticeList: [],
    };
  },
  methods: {
    // 时间格式化
    dateFormat(row, column) {
      const date = row[column.property];
      if (date === undefined) {
        return '';
      }
      return `[${date.slice(date.length - 5, date.length)}]`;
    },
    search() {
      this.$router.push({
        name: 'CreditLoan',
        params: {

        },
        query: {
          custProfession: this.occupation,
          productAmt: this.loanAmount,
          productCycle: this.loanTimeLimit,
        },
      });
    },
    async fetchList(id) {
      let list = (await LoanService.contentList({
        params: {
          channelIds: id,
          count: 4,
          first: this.first,
        },
      })).data;
      list = list.slice(1);
      return list
    },
  },
  async mounted() {
    this.loan = (await LoanService.loan()).data.data;
    this.banner = (await LoanService.getBanner({
      params: {
        ctgId: 7,
      },
    })).data.data;
    this.serviceStarList = (await LoanService.serviceStarList()).data.data;
    this.problemList = await this.fetchList(109);
    this.newsList = await this.fetchList(98);
    this.noticeList = await this.fetchList(110);
  },
  components: {
    BaseApplication,
    BaseTable,
  },
};
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
  .carousel {
    .carousel-img{
      background-repeat: no-repeat;
      background-position: center;
    }
    .center{
      width: 1000px;
      height: 500px;
      margin: 0 auto;
      position: relative;
      .application{
        position:absolute;
        top: 15px;
        right: 10px;
        z-index: 4;
      }
    }
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
                &.first{
                  background: url(../assets/img/first.png) center no-repeat;
                }
                &.second{
                  background: url(../assets/img/second.png) center no-repeat;
                }
                &.third{
                  background: url(../assets/img/third.png) center no-repeat;
                }
              }
              .avatar{
                flex:0 0 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                  border-radius: 50%;
                }
              }
              .details{
                padding:20px 10px 0 20px;
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
              a{
                color: $title-color;
                .notice-title{
                  // float: left;
                  white-space:nowrap;
                  display: inline-block;
                  width: 170px;
                  height: 16px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  line-height: 18px;
                }
              }
            }
          }
        }
      }
      // .notice{
      //   ul{
      //     li{
      //       display: flex;
      //       justify-content: space-between;
      //     }
      //   }
      // }
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
