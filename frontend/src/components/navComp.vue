<template>
    <nav>
        <div class="menu" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            <button>
                <i class="bi bi-list"></i>
            </button>
        </div>
        <center>
            <button class="btn" type="button">
                <img src="https://i.postimg.cc/LXcsPVqh/logo-200x200-1.png" alt="logo" >
              </button>
        </center>
          <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
              <button type="button" style="background-color:#030212;border:none"  data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <div class="offcanvas-body">
             
                    <ul>
                        <li>
                            <router-link to="/profile"><i class="bi bi-person-circle"></i> Profile</router-link>
                        </li>
                        <li>
                            <router-link to="/"><i class="bi bi-house-fill"></i>  home</router-link>
                        </li>
                        <li>
                            <router-link to="/fav"><i class="bi bi-heart-fill"></i>  Favourites</router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard"><i class="bi bi-person-vcard"></i> Dashboard</router-link>
                        </li>
                       
                        <li>
                            <router-link to="/contact"><i class="bi bi-envelope-at-fill"></i>  Contact</router-link>
                        </li>
                        <li>
                            <router-link to="/admin"><i class="bi bi-journal"></i>  admin</router-link>
                        </li>
                        <li>
                            <router-link to="/register"><i class="bi bi-box-arrow-in-right"></i> register</router-link>
                        </li>
                        <li>
                            <router-link to="/login" @click="logOut"><i class="bi bi-box-arrow-left"></i> logout</router-link>
                        </li>
                     </ul>
            
            </div>
          </div>
    </nav>
</template>
<script>
    export default {
        methods: {
    logOut() {
      this.$store.dispatch("logOut")
    }
    }}
</script>
<style scoped>

.menu button{
    background-color: #030212;
    padding: 5px;
    border: 1px solid #030212;
    margin: 10px;
}
.menu button i{
    color: #d5d5d5;
    font-size: 20px;

}
nav{
    background-color: #030212;
}
img[alt="logo"]{
    width: 70px;
}
.btn{
    border: none;
    background-color: #030212;
    color: white;
}
.offcanvas-body{
    background-color: #030212;
}
.offcanvas-header{
    background-color: #030212;
}
.btn-close{
    color: white;
}
ul{
    list-style: none;
}
li{
    margin: 23% 0;
}
a{
    text-decoration: none;
    color: white;
    font-weight: 700;
}
i{
    color: white;
}
</style>