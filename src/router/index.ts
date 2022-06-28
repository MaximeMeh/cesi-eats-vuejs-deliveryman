import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'


const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: Login
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  // { 
  //   name: 'profile',
  //   path: '/profile', 
  //   component: Profile, 
  //   props:true 
  // },
  {
    path: "/",
    alias: "/deliveryman",
    name: "deliveryman",
    component: () => import("../components/DeliverymanList.vue")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/TutorialDetails.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial.vue")
  },
  {
    path: "/login",
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
