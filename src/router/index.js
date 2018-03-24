import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '../components/login/Login'
import Register from '../components/login/Register'
import itemDetail from '../components/item/itemDetail'
import createEvent from '../components/item/createEvent'
import eventDetail from '../components/item/eventDetail'
import userInfo from '../components/userinfo/userInfo.vue'
import userEvent from '../components/userinfo/userEvent.vue'
import teamDetail from '../components/team/teamDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/eventDetail/:id',
      name:'eventDetail',
      component:eventDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/itemDetail',
      name: 'itemDetail',
      component: itemDetail
    },
    {
      path: '/createEvent',
      name: 'createEvent',
      component: createEvent
    },
    {
      path:'/userInfo',
      name:'userInfo',
      component:userInfo
    },
    {
      path:'/userEvent',
      name:'userEvent',
      component:userEvent
    },
    {
      path:'/teamDetail',
      name:'teamDetail',
      component:teamDetail
    }
  ]
})
