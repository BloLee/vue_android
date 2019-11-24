<template>
  <div class="hot-list-wrap"> 
    <div class="hot-item-box" v-for="(item) in datasocue.slice(0,6)" :key="item.id"> 
        <div class="hot-item-img" v-lazy:background-image="item.images.small"></div>
        <div class="hot-item-fot">
          <h3 class="ell hot-tit">{{item.title}}</h3> 
          <div class="hot-item-rate">
            <span class="hot-rate-box">
              <nut-rate :size="10"  value="3" :spacing="2" :readOnly="true"></nut-rate>
            </span>
            <span class="hot-rate-num">{{item.rating.average}}</span>
          </div> 
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ell{ overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.hot-list-wrap{
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; 
    padding-top:15px;
    margin: 0 15px;
    position: relative;
    -webkit-overflow-scrolling: touch;
  .hot-item-box{ 
    width: calc((100% - 20px) / 3);
    margin-right: 10px; overflow: hidden;
    .hot-item-img{ border-radius: 4px; background-position: center center; background-size: cover; background-repeat: no-repeat;
      //  width: 100%; height: 120px;
      padding-top: 140%;
    }
    .hot-item-fot{margin-top: 4px; font-size: 13px; }
    .hot-tit{ margin-top:7px; }
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
    .hot-look-num{ margin:3px 0 5px 0; font-size: 12px; color:rgba(0,0,0,.5);
      -webkit-transform: scale(.916);
      transform: scale(.916);
      -webkit-transform-origin: left top;
      transform-origin: left top; }
    .hot-pubdate{ display:inline-block; border:1px solid #f67; color: #ff4055; font-size:9px; padding:3px 4px 2px; border-radius: 2px; }
  }
  .hot-item-box:nth-child(2),.hot-item-box:nth-child(3){margin-bottom: 15px;}
  .hot-item-box:nth-child(3n){ margin-right: 0}
}
</style>
<script>
import moment from "moment";
export default {
  name:'lookList',
  props:['datasocue'],
  data(){
    return{

    }
  },
  filters:{
    capitalize: function (value,format='YYYY-MM-DD') {
      if (!value) return '' 
      return moment(value).format(format)
    }
  }
}
</script>