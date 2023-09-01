<template>
    <div>
        <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <img src="https://i.postimg.cc/LXcsPVqh/logo-200x200-1.png" alt="">
              </div>
              <div class="col">
                <ul>
                    <li>
                        <router-link to="/contact">
                            contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            dashboard
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fav">
                            favourtites
                        </router-link>
                    </li>
                </ul>
              </div>
              <div class="col">
                <ul>
                    <li>
                        <router-link to="/contact">
                            contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            dashboard
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fav">
                            favourtites
                        </router-link>
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
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.copy-right{
   
    color: white;
    font-weight: 700;
    padding: 10px;
    height: 10vh;
    width: 100%;
}
li{
    list-style-type: none;
    margin: 50px;
}

a{
text-decoration: none;
color: white;
font-weight: 700;
}
.container{
    margin-top: 200px;
    background-color:#030212;
    padding: 10px;
}
</style>