<template lang="html">
  <div class="quick-apply-and-noob">
    <div class="left-title">
      <span>快速申请</span>
    </div>
    <base-application-form>
  </base-application-form>
  <div class="ad">
    快速审批  秒速放款
  </div>
  <div class="left-title title2">
    <span>新手上路</span>
  </div>
  <div class="noob">
    <ul>
      <li v-for="item in list">
        <a :href="item.url">
          {{item.txt}}
        </a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import LoanService from '@/services/LoanService';
import BaseApplicationForm from '@/components/common/BaseApplicationForm';

export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    BaseApplicationForm,
  },
  async mounted() {
    const response = (await LoanService.contentList({
      params: {
        channelIds: 114,
        count: 6,
      },
    })).data;
    this.list = response.slice(1);
  },
};
</script>

<style lang="scss">
.quick-apply-and-noob{
    height: 463px;
    width: 321px;
    background-color: #fff;
    .left-title{
      font-size: 20px;
      background-color: $bg-color;
      height: 42px;
      color:$title-color;
      border-bottom: 2px solid $line-color;
      span{
        height: 42px;
        display: inline-block;
        border-bottom: 2px solid $main-color;
      }
    }
    .base-application-form{
      .applicationForm{
        padding: 56px 10px 40px 5px;
      }
    }
    .ad{
      margin: 0 auto;
      border-top: 1px solid $line-color;
      text-align: center;
      padding: 20px 0;
      color:$main-color;
      width: 268px;
    }
    .title2{
      margin-top: 40px;
    }
    .noob{
      ul{
        margin: 0;
        height: 273px;
        background-color: #fff;
        li{
          padding-top: 25px;
          color: $title-color;
          a{
            color: $title-color;
          }
        }
      }
    }
}
</style>
