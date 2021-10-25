import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/pages/Contact'
import About from '@/pages/About'
import User from '@/pages/User_Login'
import Vehicle_Models from '@/pages/Vehicle_Models'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/vehicle-Models',
      name: 'Vehicle_Models',
      component: Vehicle_Models
    },
  ]
})
