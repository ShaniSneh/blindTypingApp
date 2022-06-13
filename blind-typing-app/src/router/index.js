import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Exercise from '@/components/Exercise'
import Timer from '@/components/Timer'
//import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/' || '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
