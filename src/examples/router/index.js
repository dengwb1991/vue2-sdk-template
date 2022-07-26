import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../pages/list.vue'),
  },
  {
    path: '*',
    redirect: '/index'
  }
]
export default new Router({ routes })