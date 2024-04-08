<script>
import MainApp from './components/MainApp.vue'
import HeaderApp from './components/HeaderApp.vue'
export default {
        components:{
          MainApp,
          HeaderApp
        }
        
    }
</script>

<template>

<HeaderApp/>

<router-view></router-view>
  
</template>

<style scoped>

</style>
