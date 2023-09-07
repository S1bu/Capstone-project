<template>
    <div class="container">
        <div class="register-header">
          Register
        </div>
        <form  @submit.prevent="register">
            <div class="mb-3 row">
              <label for="linkedin" class="col-sm-2 col-form-label">profile pic</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="linkedin" v-model="payload.userPic" name="linkedin" required>
              </div>
            </div>
          <div class="mb-3 row">
            <label for="linkedin" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="linkedin" v-model="payload.FirstName" name="linkedin" required>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="Surname" class="col-sm-2 col-form-label">Surname</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="Surname" v-model="payload.LastName" name="Surname" required>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">e-mail</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="email" v-model="payload.emailAdd" name="email" required>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="password" v-model="payload.uPassword" name="password" required>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="re-password" class="col-sm-2 col-form-label">age</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="re-password" v-model="payload.age" name="re-password" required>
            </div>
          </div>
          <button type="submit" class="btn btn-primary"><i class="bi bi-check"></i></button> 
        </form>
     
    </div>
</template>

<script>
 export default {
  data() {
    return {
      payload: {
    userPic:"https://avatars.githubusercontent.com/u/74048211?v=4",
    FirstName:"",
    LastName:"",
    emailAdd :"",
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