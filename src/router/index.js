import Vue from 'vue'
import VueRouter from 'vue-router'
// import Text from '../views/Text.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
