import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
