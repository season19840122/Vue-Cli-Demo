import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
// import Home from './views/order/Home.vue'
// import Order from './views/order/Order.vue'
// import Deal from './views/order/Deal.vue'
// import Account from './views/account/Account.vue'
import Manage from './views/account/components/Manage.vue'
import Info from './views/account/components/Info.vue'
// import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    component: () => import('./views/order/Home.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    // 懒加载
    component: () => import('./views/order/Order.vue')
  },
  {
    path: '/deal',
    name: 'deal',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () => import('./views/order/Deal.vue')
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () => import('./views/account/Account.vue'),
    children: [
      {
        path: 'manage',
        name: 'manage',
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Manage
      },
      {
        path: 'info',
        name: 'info',
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Info
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "account" */ './views/Account.vue')
  }
]

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  // mode: 'history',
  fallback: false,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.name) {
    next({
      path: '/'
    })
  }
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    // console.log(store.state.token)
    if (store.state.token) { // 通过 vuex state 获取当前的 token 是否存在
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath} // 将跳转的路由 path 作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
