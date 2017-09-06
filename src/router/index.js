import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import success from '@/page/success'
import picture from '@/page/picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/picture',
      name: 'picture',
      component: picture
    },
  ]
})
