import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import { in_theaters,top250,weekly,new_movies,coming_soon,us_box } from "@/until/api";
Vue.use(Vuex);

export  default new Vuex.Store({
  state: {
    intheaters:[],  //首页热映电影的信息
    
  },
  /**
   * 更改 state 中的状态
   * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
   * 回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
   */
  mutations: {
    getData(state,res){
      state.intheaters = res;
    }
  },
  /**
   * Action 提交的是 mutation，而不是直接变更状态。
   * 
   */
  actions: {
    getData:async function( context ) { 
      const res = await in_theaters(); 
      context.commit('getData',res.subjects);
    }, 
  },
  /**
   * 模块 可以 将 store 分割成模块（module）
   * 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
   */
  modules: {
  }
})
