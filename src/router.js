import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/order/Home.vue'
// import Order from './views/order/Order.vue'
// import Deal from './views/order/Deal.vue'
// import Account from './views/account/Account.vue'
import Manage from './views/account/components/Manage.vue'
import Info from './views/account/components/Info.vue'
// import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      component: () => import('./views/order/Home.vue')
    },
    {
      path: '/order',
      name: 'order',
      // 懒加载
      component: () => import('./views/order/Order.vue')
    },
    {
      path: '/deal',
      name: 'deal',
      component: () => import('./views/order/Deal.vue')
    },
    {
      path: '/account',
      component: () => import('./views/account/Account.vue'),
      children: [
        {
          path: 'manage',
          name: 'manage',
          component: Manage
        },
        {
          path: 'info',
          name: 'info',
          component: Info
        },
        {
          path: '*',
          redirect: '/'
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "account" */ './views/Account.vue')
    },
    {
      path: '*',
      redirect: '/'
      // component: NotFound
    }
  ]
})

// 可以在跳转之前判断跳转的组件的名字并用window.document.title赋值
// Router
// beforeEnter: (to, from, next) => {
//   // window.document.title = to.meta.title
//   // 使用方法和上面的beforeEach一毛一样
//   to.push({ path: 'order' })
// }
