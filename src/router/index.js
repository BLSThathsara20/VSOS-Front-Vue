import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/pages/Contact'
import About from '@/pages/About'
import User from '@/pages/User_Login'
import Vehicle_Models from '@/pages/Vehicle_Models'
import Car_Care from '@/pages/Car_Care'
import Tools_Consumables from '@/pages/Tools_Consumables'
import Dynolite_Oils from '@/pages/Dynolite_Oils'

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
    {
      path: '/car-care',
      name: 'Car_Care',
      component: Car_Care
    },
    {
      path: '/tools-consumables',
      name: 'Tools_Consumables',
      component: Tools_Consumables
    },
    {
      path: '/dynolite-oils',
      name: 'Dynolite_Oils',
      component: Dynolite_Oils
    },
  ]
})
