<template lang="html">
  <div class="feed-back">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>意见反馈</h2>
        <div class="info">
          <p>请写下您对我们的建议或疑惑，我们的工作人员看到后会第一时间帮你解决问题！
          </p>
          <el-input
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
         <el-button class="submit" type="primary" @click="submitFeedback" :disabled="!textarea.trim()">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './common/BaseAboutUsTopBar.vue'
import LoanService from '@/services/LoanService'
export default {
  data () {
    return {
      textarea: ''
    }
  },
  methods: {
    async submitFeedback () {
      if (this.textarea)
      try {
        await LoanService.feedback({
          feedbackContent: this.textarea
        })
        this.textarea = ""
        this.$message({
         message: '提交成功',
         type: 'success'
       });
      } catch (e) {
        console.log(e)
      }
    }
  },
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
.feed-back{
  .body{
    background: url(../assets/img/about_us_bg.jpg) no-repeat;
    height: 907px;
    .container{
      background-color: #fff;
      width: 940px;
      height: 530px;
      margin: 0 auto;
      top: 100px;
      position: relative;
      box-shadow: #999 0px 0px 10px;
      padding: 30px 48px;
      h2{
        font-size: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid $line-color;
      }
      .info{
        margin-top: 30px;
        font-size: 16px;
        text-align:center;
        p{
          line-height: 30px;
          margin: 0;
          text-align:left;
          color: $title-color;
        }
        .submit{
          color:#fff;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
