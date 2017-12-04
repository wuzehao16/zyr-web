import Api from '@/services/Api'

export default {
  //立即申请
  apply (credentials) {
    return Api().post('saveCust', credentials)
  },
  // 获取验证码
  getCaptcha (custTel) {
    return Api().get('sendSmsIndex',custTel)
  },
  //最新放款动态
  loan () {
    return Api().get('lendingList')
  },
  //最佳服务之星
  serviceStarList () {
    return Api().get('serviceStarList')
  },
  //意见反馈
  feedback (feedback) {
    return Api().post('feedback', feedback)
  },
  //index/contentList?channelIds=107
  //98(行业新闻);107(贷款资讯);109(常识讲堂);110(平台公告)
  contentList (params) {
    return Api().get('contentList', params)
  },
  payrollLoan () {
    return Api().get('payroll_loan')
  }
}
