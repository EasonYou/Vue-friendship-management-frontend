import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Edit from '@/views/Edit'
import Charts from '@/views/Charts'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }, {
    path: '/charts/:id',
    name: 'Charts',
    component: Charts
  }]
})