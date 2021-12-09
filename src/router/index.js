import Vue from "vue";
import VueRouter from "vue-router";
import About from '../components/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: '首页',
    component: Home
  }, {
    path: '/about',
    nmae: "关于",
    component: About
  }]
})

export default router