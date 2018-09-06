/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../view/pages/index.vue'
import UserCenter from '../view/pages/userCenter.vue'
import UserInfo from '../view/pages/userInfo.vue'
import Vue01 from '../view/pages/vue01'
import Vue02 from '../view/pages/vue02'
Vue.use(Router)

export default new Router({
  routes: [
    {
      /* 打开网站第一眼看见的 */
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      children: [
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        }
      ]
    },
    {
      path: '/vue01',
      name: 'vue01',
      component: Vue01
    },
    {
      path: '/vue02',
      name: 'vue02',
      component: Vue02
    }
  ]
})
