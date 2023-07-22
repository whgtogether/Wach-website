import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的插件
import pathArr from '@/router/pathArr.js'
import Login from '@/views/Login/Login'
import Sign from '@/views/Login/Sign.vue'
import Home from '@/views/Home/Home.vue'
import AritcleList from '@/components/Home/AritcleList.vue'
import Edit from '@/views/Edit/Edit.vue'
Vue.use(VueRouter)

const routes = [
  // 定义路由规则
  { path: '/', redirect: '/home/rec' },
  { path: '/login', component: Login },
  { path: '/sign', component: Sign },
  {
    path: '/home',
    component: Home,
    redirect: '/home/rec',
    children: [
      { path: '/home/:lang', props: true, component: AritcleList }
    ]
  },
  { path: '/edit', component: Edit }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
