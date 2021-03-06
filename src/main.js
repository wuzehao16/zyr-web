// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
import 'normalize.css';
import App from './App';
import router from './router';
import './assets/font/iconfont.css';
import './assets/scss/element-variables.scss';

Vue.config.productionTip = false;
Vue.use(Element);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
