<template>
  <div>
  <NavBar/>
  <div class="container">
      <router-link to="/admin">
          <i class="bi bi-backspace-fill"></i>
      </router-link>
  </div>
  <footerComp/>
</div>
</template>
<script>
import  footerComp from '@/components/footerComp.vue'
import NavBar from '@/components/navComp.vue'
export default {
  components:{
     NavBar,
     footerComp
   },
data() {
  return {
   
    errorMsg: null
  };
},

methods: {

  }
};
</script>


<style scoped>
.container{
    background-color: #D5D5D5;
    width: 90%;
    border: #D5D5D5 1px solid;
    border-radius:10px ;
    margin-top: 5px;
}
button{
    background-color: #030212;
    width: 20%;
    color: white;
    font-weight: 700;
    padding: 10px;
    border: 1px solid #030212 ;
    border-radius: 10px;
    margin: 5px;
}
.Create-portfolio-header{
    background-color: #030212;
    border: 1px solid #030212;
    border-radius: 10px;
    margin:5px 20px;
    text-align: center;
    color: white;
    margin: 5px;
}
form{
    margin: 5px;
}

.container a{
    color: black;
    font-size: 30px;
}
</style>