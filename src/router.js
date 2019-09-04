import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/components/Login/login.vue'
import Userslist from '@/views/Users-list.vue'
//模块化开发时，需要用Vue.use(Router)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'Users-list',
          name: 'users-list',
          component: Userslist
        }
      ]
    },
    {
      path: '/login',
      name:'login',
      component: Login
    }
  ]
})
