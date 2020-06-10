import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import Cinama from '../views/Cinama.vue'
import Cszj from '../components/cszj'
import Csdq from '../components/csdq'
import MovieDetail from '../views/MovieDetail.vue'
import CinemaDetail from '../views/CinemaDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta:{requiresAuth:true}
    },
    {
      path: '/cinama',
      name:'aaa',
      component: Cinama,
      meta:{requiresAuth:true}
    },
    {
      path: '/me',
      component: Me,
      meta:{requiresAuth:true}
    },
    {
      path:'/chengshi',
      component:Cszj
     },
     {
      path:'/csdq',
      component:Csdq
     },
     {
      path : '/movie/detail/:id',
      name: 'detail',
      component : MovieDetail
    },
    {
      path : '/cdetail/:id',
      name: 'cdetail',
      component : CinemaDetail
    },
  ]
})
