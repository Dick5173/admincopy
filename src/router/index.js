import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const pageGroup = [
  {
    name: 'food',
    title: 'food',
    path: '/'
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/ui/homePage/index.vue'),
      meta: {
        menu: true,
        groups: pageGroup,
        title: 'group'
      },
      children: [
        {
          path: 'sichuan',
          name: 'SiChuan',
          component: () => import('@/ui/food/sichuan/index.vue'),
          meta: {
            showInSide: true,
            title: 'sichuan',
            group: 'food'
          }
        },
        {
          path: 'shandong',
          name: 'ShanDong',
          component: () => import('@/ui/food/shandong/index.vue'),
          meta: {
            showInSide: true,
            title: 'shandong',
            group: 'food'
          }
        },
        {
          path: '/travel',
          name: 'Travel',
          component: () => import('@/ui/travel/index.vue'),
          meta: {
            showInSide: true,
            title: 'travel'
          }
        },
        {
          path: '/first',
          name: 'First',
          component: () => import('@/ui/firstPage/index.vue'),
          meta: {
            showInSide: true,
            title: '首页'
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/ui/auth/login/index.vue')
    }
  ]
})
