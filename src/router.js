import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import About from './views/about'
import Home from './views/home'
import Memberships from './views/memberships'
import Download from './views/download'
import PrivacyPolicy from './views/privacy-policy'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Memberships',
      path: '/memberships',
      component: Memberships,
    },
    {
      name: 'Download',
      path: '/download',
      component: Download,
    },
    {
      name: 'Privacy-Policy',
      path: '/privacy-policy',
      component: PrivacyPolicy,
    },
  ],
})
