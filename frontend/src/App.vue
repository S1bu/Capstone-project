<template>
  <NavBar/>
 <router-view/>
</template>
<script>
import NavBar from '@/components/navComp.vue'
 export default {
   components:{
     NavBar
   }
 }
</script>
<style>
body{
 background-color: #12021E;
 font-family:monospace;
}
</style>