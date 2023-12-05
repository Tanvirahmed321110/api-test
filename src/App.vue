<template>
  <div id='app'>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>

  import AppHeader from './Component/AppHeader.vue'
export default {
   data(){
    return{
      sms:"hell world"
    }
   },
   components :{
    AppHeader,
   }
}
</script>

<style>

</style>