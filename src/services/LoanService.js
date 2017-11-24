import Api from '@/services/Api'

export default {
  apply (credentials) {
    return Api().post('apply', credentials)
  },
  loan () {
    return Api().get('loan')
  },
  payrollLoan () {
    return Api().get('payroll_loan')
  }
}
