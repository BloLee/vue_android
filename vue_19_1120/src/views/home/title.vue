<template>
  <div class="title-wrap">
    <div class="title-box-more" v-if="titType === 1 || titType === '1'"> 
      <div class="title-list">
        <span class="title-nav" :class="{ 'title-nav-active' : type === 1 }" @click="type = 1">影院热映</span>
        <span class="title-nav" :class="{ 'title-nav-active' : type === 2 }" @click="type = 2">即将上映</span>
      </div> 
      <span class="title-more">全部({{videoNum}})</span>
    </div> 
    <div class="title-box-more title-box-more-1" v-if="titType === 2 || titType === '2'"> 
      <div class="title-list">
        <span class="title-nav title-nav-active">{{name}}</span>
      </div> 
      <span class="title-more">全部({{videoNum}})</span>
    </div> 
  </div>
</template>
<style lang="scss" scoped>
.title-wrap{ overflow: hidden; }
.title-box-more{ 
  display: flex; flex-wrap: wrap; 
  flex-flow: row; align-items: center; 
  border-bottom:1px solid #ddd;
  padding: 0 10px;
  .title-list{ 
    flex: 1;  
    display: -webkit-box;
    display: -webkit-flex;
    display: flex; 
    line-height: 48px;
    box-sizing: border-box;
    position: relative;
    .title-nav{   
      margin-right:20px;
      padding: 0 5px; 
      font-size: 16px;
      cursor: pointer; 
    }
    .title-nav-active{
      font-size: 18px;
      font-weight: bold;
      border: 0;
      color: #333;
      border-bottom:2px solid #F0250F;
    } 
  }
  .title-more{ font-size:14px; padding: 0 10px 0 10px; }
  .nut-tab-active{ border-bottom:2px solid #F0250F;}
} 
.title-box-more-1{ border: 0;
  .title-list{
    .title-nav-active{ border: 0; }
  }
}
</style>
<script>

export default {
  props:{
    all:Boolean,
    titType:Number,
    videoNum:Number,
    name:String,
  },
  data(){
    return{
      type:1, 
    }
  }, 
}
</script>