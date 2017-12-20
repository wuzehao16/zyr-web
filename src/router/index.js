import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Loan from '@/components/Loan';
import CreditLoan from '@/components/CreditLoan';
import MortgageLoan from '@/components/loan/MortgageLoan';
import HelpCenter from '@/components/HelpCenter';
import AboutUs from '@/components/AboutUs';
import ApplyNow from '@/components/ApplyNow';
import PlatformAnnouncement from '@/components/PlatformAnnouncement';
import JoinUs from '@/components/JoinUs';
import ContactUs from '@/components/ContactUs';
import FeedBack from '@/components/FeedBack';
import Disclaimer from '@/components/Disclaimer';
import News from '@/components/News';
import NewsDetail from '@/components/NewsDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/loan',
      name: 'Loan',
      component: Loan,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/helpcenter',
      name: 'HelpCenter',
      component: HelpCenter,
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/mortgageloan',
      name: 'MortgageLoan',
      component: MortgageLoan,
    },
    {
      path: '/applynow',
      name: 'ApplyNow',
      component: ApplyNow,
    },
    {
      path: '/platformannouncement',
      name: 'PlatformAnnouncement',
      component: PlatformAnnouncement,
    },
    {
      path: '/joinus',
      name: 'JoinUs',
      component: JoinUs,
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs,
    },
    {
      path: '/feedback',
      name: 'FeedBack',
      component: FeedBack,
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/creditloan',
      name: 'CreditLoan',
      component: CreditLoan,
    },
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component: NewsDetail,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
