<template lang="html">
  <div class="disclaimer">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>免责声明</h2>
        <div class="info">
          <p>1 众易融是一个开放平台，用户将文章或照片等个人资料上传到互联网上，有可能会被其他组织或个人复制、转载、擅改或做其
              它非法用途，用户必须充分意识此类风险的存在。作为网络服务的提供者，我们对用户在任何论坛、个人主页或其它互动区域提
              供的任何陈述、声明或内容均不承担责任。您明确同意使用众易融服务所存在的风险或产生的一切后果将完全由您自身承担，我
              们对上述风险或后果不承担任何责任。
            </p>
              <p>2 您违反本注册协议、违反道德或法律的，侵犯他人权利（包括但不限于知识产权）的，我们不承担任何责任。同时，我们对任
              何第三方通过众易融发送服务或包含在服务中的任何内容不承担责任。</p>

              <p>3 对您、其他用户或任何第三方发布、存储或上传的任何内容或由该等内容导致的任何损失或损害，我们不承担责任。</p>

              <p>4 对任何第三方通过众易融可能对您造成的任何错误、中伤、诽谤、诬蔑、不作为、谬误、淫秽、色情或亵渎，我们不承担责任</p>

            <p>  5 对黑客行为、计算机病毒、或因您保管疏忽致使帐号、密码被他人非法使用、盗用、篡改的或丢失，或由于与本网站链接的其
              它网站所造成您个人资料的泄露，我们不承担责任。如您发现任何非法使用用户帐号或安全漏洞的情况，请立即与我们联系。</p>

            <p>  6 因任何非众易融原因造成的网络服务中断或其他缺陷，我们不承担任何责任。</p>

              <p>7 我们不保证服务一定能满足您的要求；不保证服务不会中断，也不保证服务的及时性、安全性、准确性。</p>

              <p>8 任何情况下，因使用众易融而引起或与使用众易融有关的而产生的由我们负担的责任总额，无论是基于合同、保证、侵权、产品
              责任、严格责任或其它理论，均不得超过您因访问或使用本网站而向众易融支付的任何报酬（如果有的话）。</p>

              <p>9 众易融提供免费的贷款搜索和推荐服务，贷款过程中遇到的任何预先收费均为诈骗行为，请保持警惕避免损失。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './common/BaseAboutUsTopBar.vue'
export default {
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
.disclaimer{
  .body{
    background: url(../assets/img/about_us_bg.jpg) no-repeat;
    height: 907px;
    .container{
      background-color: #fff;
      width: 940px;
      height: 690px;
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

        p{
          line-height: 20px;
          margin: 25px 0;
        }
      }
    }
  }
}
</style>
