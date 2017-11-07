import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(Router);

Router.prototype.goBack = function () {
  this.isBack = true;
  this.go(-1);
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => { require(['@/components/index'], resolve); },
      children:[
        {
          path: '/',
          name: 'Recommend',
          component: resolve => { require(['@/components/recommend'], resolve); },
          redirect: '/recommend'
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: resolve => { require(['@/components/recommend'], resolve); }
        },
        {
          path: '/video',
          name: 'video',
          component: resolve => { require(['@/components/video'], resolve); }
        },
        {
          path: '/hot',
          name: 'hot',
          component: resolve => { require(['@/components/hot'], resolve); }
        },
        {
          path: '/society',
          name: 'society',
          component: resolve => { require(['@/components/society'], resolve); }
        },
        {
          path: '/entertainment',
          name: 'entertainment',
          component: resolve => { require(['@/components/entertainment'], resolve); }
        },
        {
          path: '/military',
          name: 'military',
          component: resolve => { require(['@/components/military'], resolve); }
        },

      ]
    },
    {
      path: '/:tag_id/info',
      name: 'info',
      component: resolve => { require(['@/components/detail'], resolve); }
    }
  ]
})
