<template lang="html">
  <div class="base-application-form">
    <el-form :model="applicationForm" ref="applicationForm" label-width="96px" class="applicationForm" :rules="rule">
      <el-form-item
        label="您的姓名："
        prop="userName"
        :rules="[
          { required: true, message: '您的姓名不能为空'}
        ]"
      >
        <el-input type="userName" v-model.number="applicationForm.userName" auto-complete="off" placeholder="请填写真实姓名"></el-input>
      </el-form-item>
      <el-form-item
        label="手机号码："
        prop="telephone"
      >
        <el-input type="telephone" v-model.number="applicationForm.telephone" auto-complete="off" placeholder="请填写手机号码"></el-input>
      </el-form-item>
      <el-form-item
        label="验证码："
        prop="captcha"
        :rules="[
          { required: true, message: '验证码不能为空'},
          { type: 'number', message: '验证码必须为数字值'}
        ]"

      >
        <el-input type="captcha" v-model.number="applicationForm.captcha" auto-complete="off" placeholder="请输入验证码" class="captcha" size="medium" ></el-input>
        <el-button type="primary"  class="getCaptcha" @click="getCaptcha" :disabled="getCaptchaDisabled">
          <span v-show="show">发送验证码</span>
          <span v-show="!show">{{count}}秒后获取</span>
        </el-button>
      </el-form-item>
      <div class="checkbox">
        <el-checkbox v-model="applicationForm.checked"></el-checkbox>
        <span class="text">本人已阅读并同意</span>
        <span class="agreement" @click="dialogVisible = true">《众易融平台服务协议》</span>
        <el-button type="primary" @click="submit('applicationForm')" class="submit" name="apply" :disabled="!applicationForm.checked">立即申请</el-button>
      </div>

    </el-form>
    <base-application-form-sucess :dialog-visible="sucessDialogVisible" @dialog-close="closeDiolog">
    </base-application-form-sucess>
    <el-dialog
      title="众易融用户在线申请协议"
      center
      :visible.sync="dialogVisible"
      width="670px"
      >
      <div class="main">
        <div class="t">
          欢迎阅读众易融服务（以下简称本公司）协议。本协议详述您在域名为www.zyrbank.com的互联网网站（备案号为：粤ICP备17075480号-1，以下简称众易融）使用本公司服务所须遵守的条款和条件。
        </div>
        <div class="t">
          您使用众易融服务前，必须阅读、同意并接受本协议中所含的所有条款和条件，包括以下明示载明的及因被提及而纳入的文件、条款和条件。本公司强烈建议：您阅读本协议时，也应阅读本协议所提及的其他网页中所包含的资料，因为其可能包含对作为众易融用户的您适用的进一步条款和条件。
        </div>
        <div class="t">
          您申请注册为众易融用户，表明您已经充分阅读、理解并无任何附加条件的接受了本协议中含有的所有条款和条件，包括本协议中载明的及因被提及而纳入的所有文件、条款和条件。
        </div>
        <h4>一、用户资格</h4>
        <p>1.1 本公司的服务仅向符合本协议规定条件并已与签订协议，使用众易融服务的单位或个人。适用法律规定的能够签订有法律约束力的个人、企业及其他组织提供并由其使用。
        </p>
        <p>
          1.2 尽管有前述的规定，但本公司的服务不向18周岁以下的个人及被本公司临时或无限期中止的众易融用户提供。
        </p>
        <p>若您不符合本协议规定的用户资格，请您切勿使用本公司的服务。</p>
        <h4>二、用户账户和密码的使用、保管</h4>
        <p>2.1 您的众易融账户的用户名和密码仅限于您自身使用，不得向任何第三方转让或出售。</p>
        <p>2.2 您的众易融用户名和密码由您自行保管，因用户名和密码泄露等导致的您的任何损失，由您自行承担。</p>
        <h4>三、服务和费用</h4>
        <h5>3.1服务</h5>
        <p>3.1.1★本公司所提供服务的宗旨：为所有有需求贷款、借款或融资、投资且合法的企业及个人提供贷款服务信息。</p>
        <p>3.1.2★借款人将借款需求登录到众易融，贷款人对借款人的借款需求请自行确认，确认之后可进行交易。若因未仔细确认借款人的借款要求而发生纠纷，本公司不予以负责赔偿任何损失。</p>
        <p>3.1.3 在不违反适用法律的强制性规定的前提下，本公司向您提供的服务有可能会发生变更或者增加。</p>
        <h5>3.2 费用</h5>
        <p>3.2.1 通过众易融平台注册为众易融的用户并使用本公司所提供的服务是免费的。</p>
        <p>3.2.2 ★尽管有3.2.1条款的约定，但本公司在适用法律许可的前提下，有权自行决定是否对本公司所提供的服务收取费用及收费方式等，关于费用收取的变更将至少提前于变更生效日7天在众易融平台以发布公告的方式通知您，您对该通知方式予以认可并接受。</p>
        <h5>3.3 其他</h5>
        <p>3.3.1 您使用本公司所提供服务过程中的其他支出，包括但不限于网络使用费、通信费等，由您自行承担。</p>
        <p>3.3.2 您因使用本公司所提供服务完成的交易而取得的收入，应当由您按照所适用法律规定承担相应的税费</p>
        <h5>四、交易</h5>
        <p>4.1 《交易规则》作为本协议的重要组成部分，您可以在《交易规则》获得。作为众易融的用户，您必须按照《交易规则》所规定的流程进行交易。</p>
        <p>4.2 鉴于在互联网难以对用户进行认证，本公司不能并且无法对每一名用户所声称的身份予以确认，用户需对此表示理解并予以认可。本公司设立了用户信用评价系统以帮助用户对与其进行交易的用户进行评估，该评估是由用户的朋友自主做出的结果，并不表示本公司对用户信用作出评价，也不表示本公司赞同或者认可这种评价。</p>
        <p>4.3 鉴于本公司不参与实际交易，您如与一名或多名用户发生争议，您应就上述争议产生的或在任何方面与上述争议有关的任一种类和性质的索赔、要求和损害免除本公司（和本公司的高级职员、董事、代理人、关联公司、母公司、子公司和雇员）的责任。</p>
        <p>4.4 本公司将就您在本公司网站的交易和帐户向您发出通知。本公司的通知不代表对您的交易作出任何背书、保证或赋予合法性。您应负责完成您参与的所有交易。本公司不对其他用户提供的且通过本公司系统可获取资料或内容加以控制、表示赞同或认可。您可能发现其他用户的资料有侵犯性、有害、不准确或具有欺诈性。</p>
        <h5>五、您的资料</h5>
        <p>5.1 您的资料包括：您在注册、竞价或登录过程中、在任何公共信息区域（包括留言栏或反馈区）或通过任何电邮形式或手机短信向本公司或其他用户提供的任何资料。您对您的资料负全责，而本公司及众易融仅作为您在网上分发及公布您的资料的渠道。</p>
        <p>5.2 您的资料不得： 具有欺诈性、虚假、不准确或具误导性；l l侵犯任何第三方著作权、专利权、商标权、商业秘密或其他专有权利或发表权或隐私权； 违反任何适用的法律或法规；l l有侮辱或者诽谤他人，侵害他人合法权益的内容； 有淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的内容；l l包含可能破坏、改变、删除、不利影响、秘密截取、未经授权而接触或征用任何系统、数据或个人资料的任何病毒、特洛依木马、蠕虫、定时炸弹、删除蝇、复活节彩蛋、间谍软件或其他电脑程序； l直接或间接链接至您无权链接或列入的任何网址或者内容。</p>
        <p>5.3 许可 本公司能够使用您向本公司提交的资料，使本公司不违反您可能在该资料中拥有的任何权利之目的，同意向本公司授予非独占、全球性、永久、不可撤消、免使用费、可分许可（通过多层许可的方式）的权利，以行使您在您的资料（在任何已知或目前为未知媒体中）享有的与您的资料有关的相关权利。本公司将根据《众易融隐私政策》使用您的资料。</p>
        <h5>六、隐私政策</h5>
        <div class="t">
          众易融尊重并保护使用众易融服务的用户的个人隐私权。为了给您提供更准确和更具个性化的服务，众易融会按照本隐私权政策的规定使用您的个人信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，众易融不会将这些信息对外披露或向第三方提供。 您在同意众易融服务条款之时，即视为您已经同意本隐私权政策全部内容。
        </div>
        <p>6.1 为了更好地为您提供服务，众易融可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息。</p>
        <p>6.2 众易融不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和众易融单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。</p>
        <h5>七、信用评价系统 </h5>
        <p>6.1 您理解您的信用包含其他用户留下的意见和以此为依据所编制的综合信用评价数字，每次的信用评价都应有用户意见作为作出此次评价的说明，不带用户意见的综合数字不反映您的此次完整信用评价。鉴于信用评价仅为促进用户之间的交易之目的而设计，您同意您不得将您的信用评价在众易融以外的任何场所推销出售或以其他方式输出。</p>
        <p>6.2 本公司不提供使您能够从其他网站向众易融输入信用评价的技术能力。</p>
        <h5>八、进入和干扰</h5>
        <p>7.1 未经本公司明示或者书面准许，您不能为了任何目的使用任何机器人、蜘蛛软件、刷屏软件或其他自动方式进入网站。</p>
        <p>7.2 此外，您同意您将不会：</p>
        <p> （i） 进行任何对本公司内部结构造成或可能造成（按本公司自行酌情确定）不合理或不合比例的重大负荷的行为；</p>
        <p>（ii） 未经本公司和适当第三方（如适用）事先明示书面准许，对网站的任何内容（除您的资料以外）制作拷贝、进行复制、修改、制作衍生作品、分发或公开展示；；</p>
        <p> （iii） 干扰或试图干扰网站的正常工作或网站上进行的任何活动；</p>
        <p> （iv） 越过本公司可能用于防止或限制进入网站的机器人排除探头或其他形式。</p>
        <h5>九、欺诈</h5>
        <div class="t">
          在不限制所使用法律法律规定的或本协议约定的本公司可取得的任何其它救济的前提下，如本公司通过任何方式，包括但不限于本公司自行酌情决定的方式，怀疑您参与了与本公司及众易融有关的欺诈活动，本公司可全权酌情决定中止或终止您的帐户。
        </div>
        <h5>十、违约</h5>
        <div class="t">
          在不限制其它救济的前提下，如发生以下情形，本公司可能限制您的登录,在本公司社区发出有关您的行为的警告、发出警告通知、暂时中止、无限期地中止或终止您的用户资格及拒绝向您提供服务：
        </div>
        <p>9.1 您违反本协议或纳入本协议的文件；</p>
        <p>9.2 本公司无法核证或验证您向本公司提供的任何资料；</p>
        <p>9.3 本公司相信您的行为可能对您、本公司用户或本公司造成损失或法律责任。</p>
        <h5>十一、不保证</h5>
        <p>11.1 本公司以“按现状”的方式提供本公司网站和服务，而不带有任何保证或条件，无论该等保证或条件是明示、默示或法定的。</p>
        <p>11.2 本公司对本公司的服务商向用户提供的服务不提供任何形式的承诺或保证。</p>
        <p>11.3 本公司不就持续地、不受影响地或安全地接触并接受本公司服务作出担保，且本公司网站的经营可能受本公司无法控制的多种外部因素影响。</p>
        <h4>十二、特别声明</h4>
        <p>12.1 本公司并不实质性介入您与其他用户之间的交易，对此，您充分理解并认可。</p>
        <p>12.2 你无任何附加条件的接受，本公司、本公司的关联公司和相关实体或本公司的服务商在任何情况下均不就因本公司的网站、本公司的服务或本协议而产生或与之有关的利润损失或任何特别、间接或直接性的损害（无论以何种方式产生，包括疏忽）承担任何责任。</p>
        <p>12.3 您同意您就您自身行为之合法性单独承担责任。您同意，本公司和本公司的所有关联公司和相关实体对本公司用户的行为的合法性及产生的任何结果不承担责任。</p>
        <h5>十三、补偿及责任免除</h5>
        <div class="t">
          就任何第三方提出的，由于您违反本协议或纳入本协议的条款和规则或您违反任何法律或侵犯第三方的权利而产生或引起的任一种类和性质的任何索赔、要求、诉讼、损失和损害（包括直接或间接的），无论是已知或未知的，包括合理的律师费，您同意就此对本公司和（如适用）本公司的母公司、子公司、关联公司、合作伙伴、高级职员、董事、代理人和雇员进行补偿并使其免受损害。
        </div>
        <h5>十四、遵守法律</h5>
        <p>14.1 您使用本公司的服务及因此所进行的交易，应当遵守所有适用的国内及国际法律、法令、条例和法规。</p>
        <p>14.2 仅仅是您，而非本公司，应负责确认您在使用本公司及众易融平台期间的所有活动是合法的。您必须确保您遵守所有适用法律。您还必须确保您遵守本协议及纳入本协议的所有其它条款和规则的所有规定。</p>
        <h5>十五、无代理关系</h5>
        <div class="t">
          用户和本公司是独立的合同方，本协议无意建立也没有创立任何代理、合伙、合营、雇员与雇主或特许经营关系。本公司也不对任何用户及其网上交易行为做出明示或默许的推荐、承诺或担保。上述性质不因任何事由而改变。
        </div>
        <h5>十六、通知</h5>
        <p>16.1 除非另行明示载明，任何通知将发往您在注册过程中向本公司提供的电邮地址。或者，本公司认为适当的其他方式。</p>
        <p>16.2 任何通知应视为于以下时间发出：</p>
        <p>  （i） 如通过电邮发送，则电邮发送后24个小时，但发送方被告知电邮地址无效的，则属例外；</p>
        <p>  （ii） 如以预付邮资的信件发送，则投邮之日后三个营业日；</p>
        <p>  （iii）★如寄往或寄自中国，则在投邮后第七个营业日；</p>
        <p>  （iv） 如通过传真发送，则传真发出的该个营业日（只要发送人收到载明以上传真号码、发送页数和发送日期的确认报告）。</p>
        <h5>十七、其他条款</h5>
        <div class="t">
          以下文件被纳入本协议，且您同意受该等文件所载的条款和规则约束。对下列规则的任何变更将在本公司公告栏上刊登（常见问题公告）。
        </div>
        <p>17.1 《交易规则》，</p>
        <p>17.2 《信用评价规则》，</p>
        <p>17.3 《社区协议》，</p>
        <p>17.4 您应当遵守的其他本公司不时公布的规则和文件。</p>
        <h5>十八、协议的修改、补充和终止</h5>
        <p>18.1 您充分理解，本公司无法与所有的用户就本协议及本协议所纳入或被提及的文件、条款和条件进行逐一的协商。</p>
        <p>18.2 您无任何附加条件的认可，本协议及本协议所纳入或被提及的文件、条款和条件可以由本公司自行酌情做出，惟本公司应当至少提前于该等修改和补充生效日前[ 7 ]日，在众易融公告栏内公布。</p>
        <p>18.3 若您对于该等修改和补充不予接受的，您应当立即停止使用本公司的服务，而本公司亦有权终止您的用户资格。</p>
        <p>18.4 本协议自您注销您的用户账户的申请被本公司审核通过之日，或者本公司依据本协议及本协议所纳入或被提及的文件、条款和条件终止您的用户资格之日终止。</p>
        <h5>十九、一般规定</h5>
        <p>19.1 本协议在所有方面均受中华人民共和国法律管辖。</p>
        <p>19.2 任何争议，如协商不能解决，均应提交本公司注册地有管辖权的法院诉讼解决。</p>
        <p>19.3 本协议的规定是可分割的，如本协议任何规定被裁定为无效或不可执行，该规定可被删除而其余条款应予以执行。</p>
        <p>19.4 您同意，在发生并购时，本公司在本协议和所有纳入协议的条款和规则项下的所有或者部分权利和义务，可由本公司自行酌情决定向第三方自动转让。</p>
        <p>19.5 标题仅为参考之用，在任何方面均不界定、限制、解释或描述该条的范围或限度。</p>
        <p>19.6 本公司未就您或其他方的违约采取行动并不等于本公司放弃就随后或类似的违约采取行动的权利。</p>
        <p>19.7 您同意，本协议不得仅由于系本公司制订而以对本公司不利的方式予以解释。</p>
        <p>19.8 ★本协议和本协议所含条款和条件载明我们双方之间就本协议标注的全部予以理解和协议。</p>
        <p>19.9 本协议在您提交的注册为众易融用户的申请获得本公司审核通过时生效。</p>
        <p>19.10第4.3条、第6条、第9条、第11条和第12条在本协议终止继续有效。</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import LoanService from '@/services/LoanService';
import BaseApplicationFormSucess from './BaseApplicationFormSucess';

export default {
  data() {
    // 电话号码验证
    const validateTelephone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('电话不能为空'));
      }
      if (!(/^1[3|4|5|7|8]\d{9}$/.test(value))) {
        return callback(new Error('电话号码格式不正确'));
      }
      return callback();
    };
    return {
      dialogVisible: false,
      sucessDialogVisible: false,
      getCaptchaDisabled: false,
      count: '',
      show: true,
      timer: null,
      applicationForm: {
        userName: '',
        telephone: '',
        custProvinceName: '',
        custCityName: '',
        captcha: '',
        checked: true,
      },
      rule: {
        telephone: [
          { validator: validateTelephone, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.apply(formName);
        }
        return false;
      });
    },
    /**
     * 立即申请
     * @return {Promise} [description]
     */
    async apply(formName) {
      try {
        const response = await LoanService.apply({

          code: this.applicationForm.captcha,
          zdCust: {
            custRelName: this.applicationForm.userName,
            custTel: this.applicationForm.telephone,
            custProvinceName: this.applicationForm.custProvinceName,
            custCityName: this.applicationForm.custCityName,
          },
        });
        if (response.data.code !== 0) {
          this.$message.error(response.data.msg);
          this.applicationForm.captcha = '';
          return;
        }
        this.sucessDialogVisible = true;
        this.$refs[formName].resetFields();
      } catch (error) {
        // this.error = error.response.data.error
        this.$message.error('申请失败');
      }
    },
    /**
     * 获取验证码
     * @return {Promise} [description]
     */
    async getCaptcha() {
      try {
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.applicationForm.telephone))) {
          this.$message({
            showClose: true,
            message: '请填入正确手机号码',
            type: 'error',
          });
          return;
        }
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.getCaptchaDisabled = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count -= 1;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.getCaptchaDisabled = false;
              this.timer = null;
            }
          }, 1000);
        }
        const response = await LoanService.getCaptcha({
          params: {
            custTel: this.applicationForm.telephone,
          },
        });
        if (response.code !== 0) {
          this.timer = null;
          this.$message.error(response.msg);
        }
      } catch (e) {
        // this.$message.error('获取验证码失败');
      }
    },
    closeDiolog(val) {
      this.sucessDialogVisible = val;
    },
    confirm() {
      this.dialogVisible = false;
      this.applicationForm.checked = true;
    },
  },
  components: {
    BaseApplicationFormSucess,
  },
  mounted() {
    /* eslint-disable */
    this.applicationForm.custProvinceName = remote_ip_info.province;
    this.applicationForm.custCityName = remote_ip_info.city;
    /* eslint-disable */
  }
};
</script>

<style lang="scss">
.base-application-form{
  .applicationForm{
    padding: 100px 50px;
    .captcha{
      width: 120px;
    }
    .getCaptcha{
      font-size: 12px;
      position: absolute;
      right: 0px;
      bottom: 0;
      width: 80px;
      span{
        margin-left: -5px;
      }
    }
    .checkbox{
      text-align: center;
      .text{
        color: $title-color;
        font-size: 12px;
      }
      .agreement{
        cursor: pointer;
        color: #0785d1;
      }
      .submit{
        margin-top: 10px;
        width: 202px;
      }
    }
  }
  .main{
    height: 700px;
    overflow: auto;
    .t{
      color:$title-color;
      line-height: 22px;
      text-indent: 26px;
      font-size: 12px;
    }
    p{
      margin: 0;
      line-height: 22px;
      font-size: 12px;
    }
  }
}
</style>
