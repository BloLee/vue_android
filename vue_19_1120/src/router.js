import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter); 
const home = () => import(/* webpackChunkName: "home" */ './views/home.vue')
const routes = [ 
  { 
    path:"/" ,
    component:home,
  }
]
const router = new VueRouter({
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
export default router; 