import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/Home.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/home', component: home }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!window.sessionStorage.getItem('token')) return next('/login')
  next()
})

export default router
