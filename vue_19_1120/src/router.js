import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter); 
const home = () => import(/* webpackChunkName: "home" */ './views/home/home.vue')
const comsoon = () => import(/* webpackChunkName: "home" */ './views/videoList/list.vue')
const routes = [ 
  { 
    path:"/" ,
    component:home,
  },{
    path:'/comsoon',
    component:comsoon,
  }
]
const router = new VueRouter({
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
export default router; 