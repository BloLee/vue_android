<template>
    <div> 
        {{theType}}
        {{this.$store.state.infiniteloading}}
        <nut-skeleton class="my-skeleton" v-if="list.length <= 0">  
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
        <div class="listInfo">
          <nut-infiniteloading 
            @loadmore="onInfinite"
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
        </div>
    </div>
</template>
<script>
import { coming_soon } from "@/until/api";
export default {
    data () {
        return {
            theType:this.$store.state.infiniteloading,
            list:[],
            start:0,
            count:10,
            total:"", 
            isHasMore: true,
            isLoading: false,
            isErr: false,
            timer: null, 
        }
    },
    watch:{
        gettype(val){
            this.theType = val;
        }
    },
    computed:{
        gettype(){
            return this.$store.state.infiniteloading;
        }
    },
    created(){
        this.getData();
    },
    methods :{
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