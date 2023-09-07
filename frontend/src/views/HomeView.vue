<template>
  <div class="landing">
    <img src="https://i.postimg.cc/LXcsPVqh/logo-200x200-1.png" alt="logo" >
    <br>
    <button >
       <router-link to="/register">Register</router-link> 
    </button>
    <button >
        <router-link to="/login">login</router-link>
    </button>
  </div>

</template>
<script>
// import { register } from 'register-service-worker';

export default {
  data() {
 
  },
 
    }
</script>
<style  scoped>
.landing{
  margin-top:5% ;
  text-align: center;
}
img{
  width: 300px;
}
button{
  margin: 5%;
  padding:10px ;
  width: 20%;
  background-color: #030212;
  font-weight: 700;
  border: 1px solid #030212;
  border-radius:10px ;
  color: white;
}
.modal-header{
  text-align: center;
  background-color: #030212;
  color: white;
  margin: 5px;
}
.modal-body{
  margin-top: 5px;
  background-color: #D5D5D5
}
.modal-dialog{
  background-color: #D5D5D5;
border-radius: 10px;
}
.modal-footer{
  background-color: #D5D5D5;
}
</style>