<template>
    <div>
        <div class="container text-center">
            <div class="row align-items-start">
             
                <div class="col">
                    <ul>
                        <li>
                            <router-link to="/contact">
                                <i class="bi bi-envelope-at-fill"></i> contact
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard">
                                <i class="bi bi-person-vcard"></i>  dashboard
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/fav">
                                <i class="bi bi-heart-fill"></i>  favourtites
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/portfolio">
                                <i class="bi bi-person-plus-fill"></i>  add portfolio
                            </router-link>
                        </li>
                    </ul>
                
              </div>
              <div class="col">
                <ul>
                    <li>
                        <router-link to="/contact">
                            <i class="bi bi-envelope-at-fill"></i> contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            <i class="bi bi-person-vcard"></i>  dashboard
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fav">
                            <i class="bi bi-heart-fill"></i>  favourtites
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio">
                            <i class="bi bi-person-plus-fill"></i>  add portfolio
                        </router-link>
                    </li>
                </ul>
              </div>
              <div class="col">
                <ul>
                    <li>
                        <p>
                            <i class="bi bi-telephone-fill"></i>  0609479185
                        </p>
                    </li>
                    <li>
                        <p>
                            <i class="bi bi-envelope-at-fill"></i> Sibusisodyan@gmail.com
                        </p>
                    </li>
                    <li>
                        <p>
                            <i class="bi bi-geo-alt-fill"></i> 314 Imam Haron Rd, Lansdowne, Cape Town, South Africa
                        </p>
                    </li>
                </ul>
              </div>
              <div class="copy-right">
                <center>
                    <p> &copy; 2023 IntelliCoach. All rights reserved.</p>
                </center>
              </div>
            </div>
          </div>
    </div>

    <!-- <router-link to="/fav"><i class="bi bi-heart-fill"></i>  Favourites</router-link>
</li>
<li>
    <router-link to="/dashboard"><i class="bi bi-person-vcard"></i> Dashboard</router-link>
</li>
<li>
    <router-link to="/portfolio"><i class="bi bi-person-plus-fill"></i> add portfolio</router-link>
</li>
<li>
    <router-link to="/contact"><i class="bi bi-telephone-fill"></i>  Contact</router-link> -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.col img{
    margin-top:5%;
}
.copy-right{
   
    color: #d5d5dd;
    font-weight: 700;
    padding: 10px;
    height: 10vh;
    width: 100%;
}
li{
    list-style-type: none;
    margin: 50px;
}
p{
    color: #d5d5dd;
    font-weight: 700; 
}

a{
text-decoration: none;
color: #d5d5dd;
font-weight: 700;
}
.container{
    margin-top: 200px;
    background-color:#030212;
    padding: 10px;
}
</style>