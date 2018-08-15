import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/order/Home.vue'
import Order from './views/order/Order.vue'
import Deal from './views/order/Deal.vue'
import Account from './views/account/Account.vue'
import Manage from './views/account/components/Manage.vue'
import Info from './views/account/components/Info.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/deal',
      name: 'deal',
      component: Deal
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
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
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "account" */ './views/Account.vue')
    }
  ]
})
