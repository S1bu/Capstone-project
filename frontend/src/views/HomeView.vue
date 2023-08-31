<template>
  <div class="landing">
    <img src="https://i.postimg.cc/LXcsPVqh/logo-200x200-1.png" alt="logo" >
    <br>
    <button data-bs-toggle="modal" data-bs-target="#register">
        Register
    </button>
    <button data-bs-toggle="modal" data-bs-target="#login">
        login
    </button>
    <!-- Modal for register -->
<div class="modal fade" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Register</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3 row">
          <label for="linkedin" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="linkedin" name="linkedin" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="Surname" class="col-sm-2 col-form-label">Surname</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="Surname" name="Surname" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">e-mail</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="email" name="email" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="password" name="password" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="re-password" class="col-sm-2 col-form-label">Re-Type password</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="re-password" name="re-password" required>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x"></i></button>
        <button type="button" class="btn btn-primary"><i class="bi bi-check"></i></button>
      </div>
    </div>
  </div>
</div>

<!-- Modal for login -->
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5">Login</h1> 
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
     </div>
      <div class="modal-body">
      <form >
        <div class="mb-3 row">
         <label for="linkedin" class="col-sm-2 col-form-label">email</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="linkedin" name="linkedin" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password" class="col-sm-2 col-form-label">password</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="password" name="password" required>
          </div>
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x"></i></button>
        <button type="button" class="btn btn-primary"><i class="bi bi-check"></i></button>
      </div>
    </div>
  </div>
</div>
  </div>

</template>
<script>
  export default {
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