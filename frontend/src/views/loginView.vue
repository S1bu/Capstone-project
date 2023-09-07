<template>
    <div class="container">
<div class="login-header">
    Login
</div>
<center>
    <form @submit.prevent="login">
        <div class="mb-3 row">
         <label for="linkedin" class="col-sm-2 col-form-label">email</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="linkedin" v-model="payload.emailAdd" name="linkedin" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password" class="col-sm-2 col-form-label">password</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="password" v-model="payload.uPassword" name="password" required>
          </div>
        </div>
                <button type="submit" class="btn"><i class="bi bi-check"></i></button>
      </form>
</center>
<br>
<button class="btn"><router-link to="/register">Register</router-link></button>
    </div>
</template>

<script>
  export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        uPassword: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>

<style scoped>
.container{
    background-color: #D5D5D5;
    width: 60%;
    border: #D5D5D5 1px solid;
    border-radius:10px ;
    margin-top: 10%;
   text-align: center;
}

.login-header{
    background-color: #030212;
    border: 1px solid #030212;
    border-radius: 10px;
    margin:5px 20px;
    text-align: center;
    color: white;
    padding: 10px;
}
.btn{
    padding:10px ;
    width: 20%;
    background-color: #030212;
    font-weight: 700;
    border: 1px solid #030212;
    border-radius:10px ;
    color: white;
}
a{
    text-decoration: none;
    color: #D5D5D5;
}
form{
    margin-top:10px ;
}
</style>