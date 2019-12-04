<template>
    <!--  -->
    <nut-navbar 
        @on-click-back="back"   
        @on-click-more="more" 
        @on-click-title="geTitle"
        :leftShow="true" 
        :rightShow="false"
    >{{title}}</nut-navbar>
    <!-- <div>123123123123</div> -->
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
  name:'headNav',
  props:["title",],
  methods: {
      back(){
          alert('header头部， 点击返回')
      },
      geTitle(){
          alert('header头部， 点击title')
      },
      more(){
          alert('header头部， 点击更多')
      }
  }
}
</script>