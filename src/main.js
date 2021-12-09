import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: "#App",
  router,
  render: h => h(App)
})