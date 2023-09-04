<template>
    <div>
<div class="single-container">
    <center>
        <div class="back">
            <router-link to="/dashboard"><i class="bi bi-backspace-fill"></i></router-link>
        </div>
  
      
        <h1>{{$route.query.accountName}}</h1>
        <div class="img-holder">
            <img :src="$route.query.portfolioiImageUrl" class="card-img-top" alt="...">
        </div>
        <div class="infor-holder">
            <div class="container">
                <div class="row align-items-start">
                  <div class="col">
                    <p>{{ $route.query.subject}}</p>
                    <p>{{$route.query.experience}} years of experience</p>
                    <p><i style="color:green" class="bi bi-cash-coin"></i> R {{$route.query.price}} </p>
                  </div>
                  <div class="col">
                    <p><i class="bi bi-phone"></i> {{$route.query.phone}}</p>
                    <p><i class="bi bi-envelope-at-fill"></i> {{$route.query.emailAdd}}</p>
                    <p><i class="bi bi-globe-europe-africa"></i> {{$route.query.country}}</p>
                    <p><i class="bi bi-geo-alt-fill"></i> {{$route.query.city}}</p>
                    <p><a href="#"><i class="bi bi-linkedin"></i></a> <a href="#"><i class="bi bi-instagram"></i></a></p>
                  </div>
                </div>
                <div class="row">
                  <p><i class="bi bi-pencil-fill"></i> {{$route.query.Description}}</p>
                </div>
              </div>
        </div>
    </center>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.single-container{
    margin: 2%;
    background-color: #d5d5d5;
    border: 1px solid black;
    border-radius: 10px;
}
.img-holder img{
    width: 200px;
    height: 200px;
    object-fit: contain;
    aspect-ratio: 3/4;
}
.back i{
color: black;
font-size: 20px;
}
i{
    color: #12021E;
}
</style>