<template>
    <div class="container">
        <div class="register-header">
          Register
        </div>
        <form  @submit.prevent="register">
          <!-- Profile pic -->
            <div class="mb-3 row">
              <label for="userPic" class="col-sm-2 col-form-label">profile pic</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="userPic" v-model="payload.userPic" name="userPic">
              </div>
            </div>
            <!-- name -->
          <div class="mb-3 row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="name" v-model="payload.FirstName" name="name" required oninvalid="this.setCustomValidity('Please enter your name')" oninput="this.setCustomValidity('')">
            </div>
          </div>
          <!-- surname -->
          <div class="mb-3 row">
            <label for="Surname" class="col-sm-2 col-form-label">Surname</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="Surname" v-model="payload.LastName" name="Surname" required oninvalid="this.setCustomValidity('Please enter your Surname')" oninput="this.setCustomValidity('')">
            </div>
          </div>
          <!-- age -->
          <div class="mb-3 row">
            <label for="age" class="col-sm-2 col-form-label">age</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="age" v-model="payload.age" name="age" required oninvalid="this.setCustomValidity('Please enter your age')" oninput="this.setCustomValidity('')">
            </div>
          </div>
          <!-- role -->
          <div class="mb-3 row">      
            <label for="role" class="col-sm-2 col-form-label">role</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" placeholder="Leave blank if your are registering as a user" id="role" v-model="payload.userRole" name="role" >
            </div>
          </div>
          <!-- email -->
          <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">e-mail</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="email" v-model="payload.emailAdd" name="email" required oninvalid="this.setCustomValidity('Please enter your email')" oninput="this.setCustomValidity('')">
            </div>
          </div>
          <!-- password -->
          <div class="mb-3 row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="password" v-model="payload.uPassword" name="password" required oninvalid="this.setCustomValidity('Please enter your password')" oninput="this.setCustomValidity('')">
            </div>
          </div>
         
          <button type="submit" class="btn btn-primary">Register</button> 
          <br>
          <router-link to="login">Login</router-link>
        </form>
     
    </div>
</template>

<script>
 export default {
  data() {
    return {
      payload: {
    userPic:"https://postimg.cc/V0n8m1Nh",
    FirstName:"",
    LastName:"",
    emailAdd :"",
    userRole:"",
    age:"",
    uPassword:""
          }
        }
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.payload)
    }
  }
    }
</script>

<style scoped>
.container{
    background-color: #D5D5D5;
    width: 90%;
    border: #D5D5D5 1px solid;
    border-radius:10px ;
    margin-top:5%;
   text-align: center;
}
.register-header{
    background-color: #030212;
    border: 1px solid #030212;
    border-radius: 10px;
    margin:5px 20px;
    text-align: center;
    color: white;
    padding: 10px;
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
</style>