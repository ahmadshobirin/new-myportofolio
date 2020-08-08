import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/style.css'

Vue.use(VueRouter, VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
