import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Recommend from '@/components/recommend'

import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueAxios, axios)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/',
          name: 'Recommend',
          component: Recommend,
          redirect: '/recommend'
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        }
      ]
    },
  ]
})
