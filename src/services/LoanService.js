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
  loan () {
    return Api().get('loan')
  },
  payrollLoan () {
    return Api().get('payroll_loan')
  }
}
