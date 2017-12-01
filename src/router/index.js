import Vue from 'vue'
import Router from 'vue-router'
import Api from '@/pages/api/Api'
import fatherToChild from '../components/api/prop/fatherToChild/fatherToChild'
import childToFather from '../components/api/prop/childToFather/childToFather'
import myComp from '../pages/myComp/MyComp'
// 引入异步组件模块
const asyncComp = r => require.ensure([], () => r(require('../components/api/asybcComp/asyncComp')), 'chunkname1')

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
        },
        {
          // 重定向，再加载组件
          path: '/asyncComp',
          component: asyncComp
        }
      ]
    },
    {
      path: '/myComp',
      component: myComp,
    }
  ]
})
