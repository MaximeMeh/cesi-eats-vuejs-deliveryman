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
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialsList.vue")
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
