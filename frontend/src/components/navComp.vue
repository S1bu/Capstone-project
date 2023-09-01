<template>
    <nav>
        <center>
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
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
                            <router-link to="/"><i class="bi bi-house-fill"></i>  home</router-link>
                        </li>
                        <li>
                            <router-link to="/fav"><i class="bi bi-heart-fill"></i>  Favourites</router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard"><i class="bi bi-person-vcard"></i> Dashboard</router-link>
                        </li>
                        <li>
                            <router-link to="/portfolio"><i class="bi bi-person-plus-fill"></i> add portfolio</router-link>
                        </li>
                        <li>
                            <router-link to="/contact"><i class="bi bi-telephone-fill"></i>  Contact</router-link>
                        </li>
                     </ul>
            
            </div>
          </div>
    </nav>
</template>
<script>
    export default {
    }
</script>
<style scoped>
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