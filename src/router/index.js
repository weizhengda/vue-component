import Vue from 'vue'
import Router from 'vue-router'
import Api from '@/pages/Api'
import fatherToChild from '../components/api/prop/fatherToChild/fatherToChild'
import childToFather from '../components/api/prop/childToFather/childToFather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Api,
      direction: '/child-to-father',
      children: [
        {
          path: 'child-to-father',
          component: childToFather
        },
        {
          path: 'father-to-child',
          component: fatherToChild
        }
      ]
    }
  ]
})
