<template>
  <div id="app" class="hib-app">
    <div class="hib-title">
      <headNav :title="title" />  
    </div> 
    <router-view></router-view>
  </div>
</template>
<style> 
.hib-app{
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
  box-sizing: border-box;
  background: #f6f6f6;
}
.hib-title{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    border-bottom: 1px solid #eee;
    background-color: #f8f8f8;
}
</style>
<script>
import headNav from "./components/header"
export default {
  name: "app", 
  data(){
    return{
      title:"豆瓣音影"
    }
  },
  components:{headNav},
  watch: { 
    $route(to, from) {
      this.title =this.$route.meta.title 
      console.log(this.$route.meta);
    }
  },
};
</script> 
