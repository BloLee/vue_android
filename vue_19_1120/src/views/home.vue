<template>
   <div class="wrap">
     <div class="title-box-more">
        <div class="title-list">
          <span class="title-nav title-nav-active">影院热映</span>
          <span class="title-nav">即将上映</span>
        </div> 
        <span class="title-more">全部(161)</span>
     </div> 
     <div class="hot-list-wrap">
       <div class="hot-item-box" v-for="(item,index) in intheaters.slice(0,6)" :key="index"> 
          <div class="hot-item-img" v-lazy:background-image="item.images.small"></div>
          <div class="hot-item-fot">
            <h3 class="ellipsis">{{item.title}}</h3>
            <div class="hot-item-rate">
              <span class="hot-rate-box">
                <nut-rate :size="10"  value="3" :spacing="2" :readOnly="true"></nut-rate>
              </span>
              <span class="hot-rate-num">{{item.rating.average}}</span>
            </div>
          </div>
       </div>
     </div>
   </div>
</template>
<style lang="scss" scoped>
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;}
.title-box-more{ 
  display: flex; flex-wrap: wrap; 
  flex-flow: row; align-items: center; border-bottom:1px solid #ddd;
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
.hot-list-wrap{
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; 
    padding-top: 20px;
    margin: 0 15px;
    position: relative;
    -webkit-overflow-scrolling: touch;
  .hot-item-box{ 
    width: calc((100% - 20px) / 3);
    margin-right: 10px;
    .hot-item-img{ border-radius: 4px; background-position: center center; background-size: cover; background-repeat: no-repeat;
      //  width: 100%; height: 120px;
      padding-top: 140%;
    }
    .hot-item-fot{margin-top: 4px; font-size: 13px; }
    .hot-item-rate{ 
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex; 
      align-items: center;
      .hot-rate-box{    
         -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start; 
      }
      .hot-rate-num{     
        font-weight: 500;
        font-size: 12px;
        // -webkit-transform: scale(.916) translateY(1px);
        transform: scale(1) translateY(2px);
        // -webkit-transform-origin: top left;
        // transform-origin: top left;
        color: rgba(0,0,0,.5); 
        margin: -3px 0;
        margin-left: 4px; }
    }
  }
  .hot-item-box:nth-child(2),.hot-item-box:nth-child(3){margin-bottom: 15px;}
  .hot-item-box:nth-child(3n){ margin-right: 0}
}
</style>
<script>
import { in_theaters,top250,weekly,new_movies,coming_soon,us_box } from "@/until/api";
export default {
  name:'home',
  data(){
    return{
      intheaters:[],
    }
  }, 
  mounted(){
    console.log(this)
    this.getData();
  },
  methods:{
    tabSwitch3:function(value,index){
      console.log(index);
    },
    getData:async function() {
      const res = await in_theaters();
      const _top250 = await top250();
      const _use_box = await us_box();
      const _weekly = await weekly();
      const _new_movies = await new_movies();
      const _coming_soon = await coming_soon();  //即将上映
      this.intheaters = res.subjects;  
       
    }, 
  }
};
</script> 
