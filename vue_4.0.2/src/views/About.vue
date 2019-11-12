<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-on:click="great" > {{ message }} </div> 
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      message:'这是一个测试123131',
    }
  },
  methods:{
    great () {
      alert("1231231231323221")
    }
  }
}
</script>
