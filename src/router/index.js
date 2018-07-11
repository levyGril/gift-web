import Vue from 'vue'
import Router from 'vue-router'
import LuckGift from '../components/LuckGift'
import Lottery from '../components/Lottery.vue'

Vue.use(Router);

export default new Router({
  mode : 'history',
  base: '/gift/',  //添加的地方
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/gift', redirect: '/' //test为所放置的文件夹名称，不修改的话可能会无法显示页面
    // },
    {
      path: '/luck',
      name: 'LuckGift',
      component: LuckGift
    },
    {
      path: '/',
      name: 'Lottery',
      component: Lottery
    }
  ]
})
