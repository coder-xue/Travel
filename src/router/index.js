// 路由配置

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home.vue'
// import City from '@/pages/city/City.vue'
// import Detail from '@/pages/detail/Detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      component: () => import('@/pages/home/Home.vue') //异步加载组件,表示当需要哪些文件的时候才会去加载,提高了页面首次加载的时间,当app.js大于1MB的时候才建议去使用异步加载组件
    },
    {
      path: '/city',
      name: 'City',
      // component: City
      component: () => import('@/pages/city/City.vue')
    },
    {
      path: '/detail/:id',  // 加一个冒号表示动态路由,表示路径前面必须是/detail/,后面可以带参数
      name: 'Detail',
      // component: Detail
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
  //每次的路由切换滚动条都会回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
