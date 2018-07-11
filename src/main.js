// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex/store'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 样式需要单独引入
Vue.use(ElementUI);


import '../node_modules/mint-ui/lib/style.min.css' // mint-ui
// import * as filters from './assets/js/filters'
import './assets/js/browser.js'
import './assets/js/rem'
import './assets/less/public.less'

import resource from 'vue-resource'
Vue.use(resource);
Vue.config.productionTip = false;
// 自定义指令页面title实时更新
Vue.directive('title', {

  inserted: function (el, binding) {
    document.title = binding.value
  }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
