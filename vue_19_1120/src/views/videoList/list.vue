<template>
  <div class="wrap"> 
    <nut-tab class="nut-tab-wrap" positionNav="top">
      <nut-tab-panel class="ppp" tabTitle="即将上映">
         <nut-skeleton class="my-skeleton">  
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
      </nut-tab-panel>
      <nut-tab-panel tabTitle="正在热映">正在热映</nut-tab-panel>
      <nut-tab-panel tabTitle="11月观影指南">11月观影指南</nut-tab-panel>
    </nut-tab> 
  </div>
</template>
<style lang="scss">
.nut-tab-wrap{ padding: 0 !important; background-color: red;}
.nut-tab{ padding-top:15.34vw; background-color: #fff; }
.nut-tab-title{ position: fixed; left: 0; right: 0; top: 0; z-index: 10000; }
.nut-tab-item{ height: auto !important; padding: 10px 10px 0 0;}
.ppp .nut-tab-item{ height: auto; }
.nut-tab-wrap{  overflow: hidden;}

.my-skeleton{ position: relative; }

</style>
<script>
export default {
  name:"comsoon",
  data () {
    return {
      list:[],
      positionNavCurr:'top',
      disableTabs:[
        {
          'tabTitle':'衣物',
          'disable':false,
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          'content':'<p>衣物内容</p>'
        },
        {
          'tabTitle':'日用品',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'content':'<p>日用品内容</p>'
        },
        {
          'tabTitle':'运动器材',
          'tabUrl':'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          'content':'<p>运动器材内容</p>'
        },
        {
          'tabTitle':'电影票',
          'tabUrl':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'content':'<p>电影票内容</p>'
        }
      ] 
    }
  },
  methods: {
      tabSwitch:function(index,event){
        console.log(index+'--'+event.target);
      }
  }
}
</script>