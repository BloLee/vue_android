import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter); 
const home = () => import(/* webpackChunkName: "home" */ './views/home/home.vue');
const comsoon = () => import(/* webpackChunkName: "home" */ './views/videoList/list.vue');
const family = () => import(/* webpackChunkName: "family" */ './views/Family/index.vue');
const routes = [ 
  { 
    path:"/" ,
    component:home,
    meta: { 
      requiresAuth: true,
      title:'豆瓣音影'
    }
  },{
    path:'/comsoon',
    component:comsoon,
    meta: { 
      requiresAuth: false,
      title:"院线电影"
    }
  },{
    
    path:'/family',
    component:family,
    meta: { 
      requiresAuth: false,
      title:"家谱"
    }
  }
]
const router = new VueRouter({
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
export default router; 