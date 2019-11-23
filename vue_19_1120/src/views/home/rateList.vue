<template>
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
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
  
}
</script>