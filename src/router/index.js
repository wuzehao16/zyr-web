import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Loan from '@/components/Loan'
import MortgageLoan from '@/components/loan/MortgageLoan'
import HelpCenter from '@/components/HelpCenter'
import AboutUs from '@/components/AboutUs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loan',
      name: 'Loan',
      component: Loan
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helpcenter',
      name: 'HelpCenter',
      component: HelpCenter
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/mortgageloan',
      name: 'MortgageLoan',
      component: MortgageLoan
    }
  ]
})
