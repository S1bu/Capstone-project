<template>
  <div class="container-fluid">
   
    <div class="container">
        <div class="row" v-for="user in User" :key="user.userID">
          <div class="col text-center">
            <img :src="user.userPic" alt="">
          </div>
          <div class="col">
            <h3>{{ user.userID }}</h3>
            <h3>Name: {{ user.FirstName }}</h3>
            <h3>Surname:{{ user.LastName }}</h3>
            <h3>Gender:{{ user.gender }}</h3>
            <h3>Email:{{ user.emailAdd }}</h3> 
              <!-- <h3>Phone: {{ user.phone}} </h3> -->
            <h3></h3>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        computed:{
            User() {
      return this.$store.state.user;
    },
        },
        mounted() {
    this.$store.dispatch('fetchUser');
  }
    }
</script>

<style  scoped>
.container-fluid{
background-color: #d5d5d5;
border: 1px solid #d5d5d5;
border-radius: 10px;
width: 90%;
}
.col{
    border: 1px solid black;
    width: auto;
}
.col img{
    width: 200px;
}
</style>