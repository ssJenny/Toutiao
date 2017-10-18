import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Recommend from '@/components/recommend'
import Video from '@/components/video'
import Hot from '@/components/hot'
import Society from '@/components/society'
import Entertainment from '@/components/entertainment'
import Military from '@/components/military'

import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueAxios, axios);
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
        },
        {
          path: '/video',
          name: 'video',
          component: Video
        },
        {
          path: '/hot',
          name: 'hot',
          component: Hot
        },
        {
          path: '/society',
          name: 'society',
          component: Society
        },
        {
          path: '/entertainment',
          name: 'entertainment',
          component: Entertainment
        },
        {
          path: '/military',
          name: 'military',
          component: Military
        },

      ]
    },
  ]
})
