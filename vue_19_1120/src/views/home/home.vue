<template>
   <div class="wrap">
     <div class="Video-wrap"> 
      <div class="title-box-more"> 
          <div class="title-list">
            <span class="title-nav" :class="{ 'title-nav-active' : type === 1 }" @click="type = 1">影院热映</span>
            <span class="title-nav" :class="{ 'title-nav-active' : type === 2 }" @click="type = 2">即将上映</span>
          </div> 
          <router-link to="/comsoon" class="title-more">全部(161)</router-link>
      </div> 
      <div class="hot-list-all-wrap">
        <div class="hot-list-wrap" v-show="type === 1">
          <div class="hot-item-box" v-for="(item) in intheaters.slice(0,6)" :key="item.id"> 
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
        <div class="hot-list-wrap" v-show="type === 2">
          <div class="hot-item-box" v-for="(item,index) in coming_soon.slice(0,6)" :key="index"> 
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
     </div>
     <div class="Video-wrap"> 
        <Title :titType="2" :name="'豆瓣电影新片榜'" :videoNum="new_movies.subjects.length" />
        <Rateist v-bind:datasocue="new_movies.subjects" v-if="new_movies" />
     </div>
   </div>
</template>
<style lang="scss" scoped>
.Video-wrap{ margin-bottom: 15px; }
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
.hot-list-all-wrap{ padding-top:25px; }
.hot-list-wrap{
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; 
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
import Title from "./title";
import Rateist from "@/components/rateLook/rateList";
import { in_theaters,top250,weekly,new_movies,coming_soon,us_box } from "@/until/api";
export default {
  name:'home',
  data(){
    return{
      type:1,
      intheaters:[], 
      coming_soon:[],
      weekly:[],
      us_box:[],
      new_movies:{
        subjects:[]
      },
      All_movies:[],  //所有集合
    }
  }, 
  components:{ Title,Rateist },
  //通过计算属性读取 state 数据
  // computed:{
  //   intheaters(){
  //     return this.$store.state.intheaters;
  //   }
  // },
  created(){  
    this.getData();
  },
  mounted(){
    // this.getData();
  },
  methods:{
    tabSwitch3:function(value,index){
      console.log(index);
    },
    getData:async function() {
      this.axios.all([in_theaters({start:0,count:10}),coming_soon(),weekly(),us_box(),new_movies(),top250()])
      .then( this.axios.spread( (_in_theaters,_coming_soon,_weekly,_us_box,_new_movies,top250) => { 

        this.intheaters = _in_theaters.subjects;
        this.coming_soon = _coming_soon.subjects; 
        this.new_movies = _new_movies;
        this.All_movies.push({
          name:'weekly',
          data:weekly.subjects,
        });
        this.All_movies.push({
          name:'_us_box',
          data:_us_box.subjects,
        });
        this.All_movies.push({
          name:'new_movies',
          data:new_movies.subjects,
        });
        this.All_movies.push({
          name:'top250',
          data:top250.subjects,
        }); 
        console.log(this.All_movies)
      }))
      // const res = await in_theaters(); 
      // const _coming_soon = await coming_soon();  //即将上映
      // this.intheaters = res.subjects;  
      // this.coming_soon = _coming_soon.subjects; 
    }, 
  }
};
</script> 
