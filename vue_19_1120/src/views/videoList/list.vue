<template>
  <div class="wrap">  
    <nut-tab class="nut-tab-wrap" positionNav="top" @tab-switch="tabSwitch">
      <nut-tab-panel class="ppp" tabTitle="即将上映">
        <infinite></infinite> 
      </nut-tab-panel> 
      <nut-tab-panel tabTitle="正在热映"> 
        <nut-skeleton class="my-skeleton" v-if="NowList.length <= 0">  
            <div class="" v-for="(item,index) in 10" :key="index">
              <row padding="0 0 15px 0" class="skeleton-row" >
                <skeleton-square width="75px" height="75px"></skeleton-square> 
                <column padding="0 0 0 10px" >
                  <skeleton-square height="10px" width="275px" margin="0px 0 10px 0"></skeleton-square>
                  <skeleton-square width="275px" height="10px" margin="0 0 10px 0"></skeleton-square>
                  <skeleton-square width="275px" height="10px"></skeleton-square> 
                </column> 
              </row>
            </div> 
        </nut-skeleton>
        <!-- <div class="listInfo">
          <nut-infiniteloading 
              @loadmore="onInfinite" trrrrr
              :is-show-mod="true" 
              :has-more="isHasMore" 
              :is-loading="isLoading" 
              :threshold="10"
          >
              <div class="List-item" v-for="(item,index) in list" :key="index">
            <div class="list-info-box">
              <div class="list-item-img"  
                v-lazy:background-image="item.images.large">
              </div>
              <div class="list-info-lf">
                <h3 class="list-info-tit">{{item.title}}</h3>
                <div class="hot-item-rate" v-show="item.rating.average > 0">
                  <span class="hot-rate-box">
                    <nut-rate :size="8"  :value="3" :spacing="2" :readOnly="true"></nut-rate>
                  </span>
                  <span class="hot-rate-num">{{item.rating.average}}</span>
                </div>
                <p class="list-info-deta">
                  <span>{{item.year}}</span>
                  <span> / 中国大陆</span>
                  <span v-for="(item,index) in item.genres" :key="index"> / {{item}}</span>
                  <span v-for="(item) in item.casts" :key="item.id"> / {{item.name}}</span>

                </p>
              </div>
            </div> 
            <div class="list-info-rt">
              <span class="buy-item">购票</span>
              <p class="loknum"> 3.45万人看过</p>
            </div> 
          </div> 
          </nut-infiniteloading> 
        </div> -->
      </nut-tab-panel>
      <nut-tab-panel tabTitle="11月观影指南">
        11月观影指南 
        
        <nut-skeleton class="my-skeleton" v-if="Monthlist.length <= 0">  
            <div class="" v-for="(item,index) in 10" :key="index">
              <row padding="0 0 15px 0" class="skeleton-row" >
                <skeleton-square width="75px" height="75px"></skeleton-square> 
                <column padding="0 0 0 10px" >
                  <skeleton-square height="10px" width="275px" margin="0px 0 10px 0"></skeleton-square>
                  <skeleton-square width="275px" height="10px" margin="0 0 10px 0"></skeleton-square>
                  <skeleton-square width="275px" height="10px"></skeleton-square> 
                </column> 
              </row>
            </div> 
        </nut-skeleton>
        <!-- <div class="listInfo">
          <nut-infiniteloading 
              @loadmore="onInfinite" trrrrr
              :is-show-mod="true" 
              :has-more="isHasMore" 
              :is-loading="isLoading" 
              :threshold="10"
          >
              <div class="List-item" v-for="(item,index) in list" :key="index">
                <div class="list-info-box">
                  <div class="list-item-img"  
                    v-lazy:background-image="item.images.large">
                  </div>
                  <div class="list-info-lf">
                    <h3 class="list-info-tit">{{item.title}}</h3>
                    <div class="hot-item-rate" v-show="item.rating.average > 0">
                      <span class="hot-rate-box">
                        <nut-rate :size="8"  :value="3" :spacing="2" :readOnly="true"></nut-rate>
                      </span>
                      <span class="hot-rate-num">{{item.rating.average}}</span>
                    </div>
                    <p class="list-info-deta">
                      <span>{{item.year}}</span>
                      <span> / 中国大陆</span>
                      <span v-for="(item,index) in item.genres" :key="index"> / {{item}}</span>
                      <span v-for="(item) in item.casts" :key="item.id"> / {{item.name}}</span>

                    </p>
                  </div>
                </div> 
                <div class="list-info-rt">
                  <span class="buy-item">购票</span>
                  <p class="loknum"> 3.45万人看过</p>
                </div> 
              </div> 
          </nut-infiniteloading> 
        </div> -->
      </nut-tab-panel>
    </nut-tab> 
  </div>
</template>
<style  lang="scss">
.nut-tab-wrap{ padding: 0 !important; background-color: red;}
.nut-tab{ padding:15.34vw 5px 5px 5px; background-color: #fff; }
.nut-tab-title{ position: fixed; left: 0; right: 0; top: 0; z-index: 10000; }
.nut-tab-item{ height: auto !important; padding:0;}
.ppp .nut-tab-item{ height: auto; }
.nut-tab-wrap{  overflow: hidden;}

.my-skeleton{ position: relative; }
.List-item{
  display: flex; align-items: center; padding:15px 0; border-bottom: 1px dashed #ddd;
  .list-info-box{
    display:flex; 
    flex: 1;
    border-right: 1px dashed #ddd; padding-right: 5px;
    flex-wrap: nowrap;
    .list-item-img{ 
      border-radius: 4px; background-position: center center; background-size: cover; background-repeat: no-repeat;
        width:190px; height: 120px;
    }
    .list-info-lf{
      padding-left: 10px;
      overflow: hidden;
      .list-info-tit{ font-size: 16px; margin-top:5px; margin-bottom: 10px;}
      .hot-item-rate{ 
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex; 
        align-items: center; 
        margin:0 0 10px 0;
        .hot-rate-box{    
            -webkit-box-align: start;
          -webkit-align-items: flex-start;
          -ms-flex-align: start;
          align-items: flex-start; 
          line-height: 0;
        }
        .hot-rate-num{     
          font-weight: 500;
          font-size: 9px;
          // -webkit-transform: scale(.916) translateY(1px);
          transform: scale(1) translateY(2px);
          // -webkit-transform-origin: top left;
          // transform-origin: top left;
          color: rgba(0,0,0,.5); 
          margin: -3px 0;
          margin-left: 4px; }
      }
      .list-info-deta{font-size:9px; color: #999}
    }  
  }
  .list-info-rt{
    padding-left: 10px;
    text-align: center;
    overflow: hidden;
    .buy-item{ display: inline-block; margin: auto; border: 1px dashed red; color: red; width: 70%; text-align: center; border-radius: 4px;}
    .loknum{ font-size: 12px; color: #999;margin-top: 10px; }
  }
}
.List-item:last-child{border: 0}
</style>
<script>
import { coming_soon,in_theaters } from "@/until/api";
import Rateist from "@/components/rateLook/rateList";
import infinite from "./comsoonLoad";    //即将上映的列表
export default {
  name:"comsoon",
  data () {
    return { 
      NowList:[],
      Monthlist:[],
      positionNavCurr:'top',  
    }
  },
  components:{Rateist,infinite},
  created(){
    // this.getData()
  },
  
  methods: {
    tabSwitch:function(index,event){
      console.log(index+'--'+event.target);
      if( typeof index === "number" ){
        index = String(index)
      }
      // this.$store.commit(changVideoList,index)
      this.$store.commit('changVideoList', index)
    },
    //获取即将上映的数据
    getData:async function(data){
      const _data={
        start:this.start,
        count:this.count,
      }
      const res = await coming_soon(_data);
      // console.log(res) 
      for(let i = 0;i<res.subjects.length; i++){
        this.list.push(res.subjects[i])
      }
      this.isLoading = false;
      
      console.log(this.list)
      // this.list = res.subjects;
      this.start = this.list.length;
      this.total = res.total;
    },
    //获取正在上映的列表数据
    getIntheaters:async function(){
      const _data={
        start:this.start,
        count:this.count,
      }
      const res = await in_theaters(_data);
      // console.log(res) 
      for(let i = 0;i<res.subjects.length; i++){
        this.list.push(res.subjects[i])
      }
      this.isLoading = false;
      
      console.log(this.list)
      // this.list = res.subjects;
      this.start = this.list.length;
      this.total = res.total;
    },
    onInfinite () { 
      this.isLoading = true;
      if( this.list.length == this.total ){
        this.isLoading = false;
        this.isHasMore = false;
        return true;
      }
      this.getData(); 
    }
  }
}
</script>