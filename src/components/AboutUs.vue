<template lang="html">
  <div class="about-us">
      <top-bar />
    <div class="body">
      <div class="container">
        <h2>公司简介</h2>
        <div class="info">
          <p>众易融信息咨询（深圳）有限公司位于深圳市福田区上梅林，是一家专注于个人融资及企业融资的综合型互联网服务平台，公司基于多年来累计的经验及对互联网的模式创新，通过线上线下相结合，致力于解决企业及个人融资难、融资成本高的问题。
          </p>
          <p>此外，众易融还是一个金融咨询分享平台，以用户为重心，注重用户体验，为用户提供便捷、划算、安全的金融信息服务。</p>
          <p>作为一家创新型互联网服务平台，公司旗下有自主品牌“众易融”，随时随地为用户提供免费的行业资讯，帮助用户去了解金融知识，解决融资问题。公司依托扎实的专业基础和互联网研发技术，致力于实现融资智能化匹配功能，推动行业营销与合作的改革创新。</p>
        </div>
        <h3>公司文化</h3>
        <div class="info">
          <p>公司以“专注体验，用心服务”为核心价值，一切以用户需求为中心，希望通过专业的水平和不懈的努力，重塑金融行业的形象和口碑。</p>
        </div>
        <h3>商业模式</h3>
        <img src="../assets/img/business_model.jpg" alt="">
        <div class="bg">
          <img src="../assets/img/intro_1.jpg" alt="">
          <div class="right">
            <div class="">
              <img src="../assets/img/intro_2.jpg" alt="">
              <img src="../assets/img/intro_3.jpg" alt="" class="img2">
            </div>
            <div class="n2">
              <img src="../assets/img/intro_4.jpg" alt="">
              <img src="../assets/img/intro_5.jpg" alt="" class="img2">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './common/BaseAboutUsTopBar';

export default {
  components: {
    TopBar,
  },
};
</script>

<style lang="scss">
.about-us{
  .body{
    background: url(../assets/img/about_us_bg.jpg) no-repeat;
    overflow-y: auto;
    .container{
      background-color: #fff;
      width: 940px;
      margin: 100px auto;
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
        text-indent: 33px;
        p{
          line-height: 30px;
          margin: 0;
        }
      }
      .bg{
        margin-top: 20px;
        display: flex;
        .right{
          margin-left: 20px;
          .img2{
            margin-left: 20px;
          }
          .n2{
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
