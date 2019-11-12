<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ msg }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      msg:"1231312313",
    }
  },
  components: {
    HelloWorld
  }
}
</script>
