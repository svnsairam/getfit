import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import(/* webpackChunkName: "about" */ '../views/Activities.vue')
  },
  {
    path: '/activityDetails/:id',
    name: 'ActivityDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivityDetails.vue'),
    props: true,
  },
  {
    path: '/user',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
