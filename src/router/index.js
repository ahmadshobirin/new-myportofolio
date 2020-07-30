import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: () => import('../views/Portofolio.vue')
  },
  {
    path: '/karya',
    name: 'Karya',
    component: () => import('../views/Creation.vue')
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
