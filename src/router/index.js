import Vue from 'vue'
import Router from 'vue-router'
import Loan from '@/components/Loan'
import Home from '@/components/Home'
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
    }
  ]
})
