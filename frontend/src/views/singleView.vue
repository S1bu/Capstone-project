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
                    <p>R {{$route.query.price}} <i style="color:green" class="bi bi-cash-coin"></i></p>
                  </div>
                  <div class="col">
                    <p>{{$route.query.phone}}</p>
                    <p>{{$route.query.emailAdd}}</p>
                    <p>{{$route.query.country}}</p>
                    <p>{{$route.query.city}}</p>
                    <p><a href="#"><i class="bi bi-linkedin"></i></a> <a href="#"><i class="bi bi-instagram"></i></a></p>
                  </div>
                </div>
                <div class="row">
                  <p>{{$route.query.Description}}</p>
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
</style>