<template>
    <div> 
        {{theType}}
        {{this.$store.state.infiniteloading}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            theType:this.$store.state.infiniteloading
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
    // mounted:{

    // },
}
</script>