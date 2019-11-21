<template>
   <div>
    <!-- <nut-tabbar 
      @tab-switch="tabSwitch3" 
      type="card" 
      :bottom="true" 
      :tabbarList="tabList3"
    ></nut-tabbar> -->
    <nut-tab @tab-switch="tabSwitch">
        <nut-tab-panel tabTitle="影院热映">
          <div class="aaa">1231231</div>
        </nut-tab-panel>
        <nut-tab-panel tabTitle="即将上映">即将上映</nut-tab-panel>
        <nut-tab-panel tabTitle="页签3">页签3</nut-tab-panel>
    </nut-tab>
   </div>
</template>
<style scoped>
.aaa{ font-size: 14px; }
</style>
<script>
import { indexArtice } from "@/until/api";
export default {
  name:'home',
  data(){
    return{
      tabList3:[
        {
          'tabTitle':'主页',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg',
          'href':'###'
        },
        {
          'tabTitle':'分类',
          'curr':false,
          'icon':'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
          'href':'###'
        },
        {
          'tabTitle':'发现',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
          'href':'###'
        },
        {
          'tabTitle':'购物车',
          'curr':false,
          'num':2,
          'icon':'http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg',
          'activeIcon':'http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg',
          'href':'###'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
          'href':'###'
        }
      ]
    }
  },
  props: {
    msg: String
  },
  methods:{
    tabSwitch3:function(value,index){
      console.log(index);
    },
    getData:async function() {
      const res = await indexArtice();
      console.log(res)
    },
    tabSwitch:function(index,event){
      console.log(index+'--'+JSON.stringify(event.target));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
