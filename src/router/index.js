import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import prop from '@/pages/api/prop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'prop',
      component: prop
    }
  ]
})
