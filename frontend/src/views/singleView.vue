<template>
  <div>
  <NavBar/>
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
<div class="report">
</div>
    </div>
    <footerComp/>
  </div>
</template>

<script>
import NavBar from '@/components/navComp.vue'
import  footerComp from '@/components/footerComp.vue'
    export default {
      components:{
     NavBar,
     footerComp
   }
    }
</script>

<style  scoped>
.single-container{
    margin: 2%;
    background-color: #d5d5d5;
    border: 1px solid black;
    border-radius: 10px;
    animation: backInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
}
.btn{
    animation: backInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
}
 
.close i{
    color: #D5D5D5;
    font-weight: 900;
    padding: 5px;
    background-color: #030212;
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
.submit{
        background-color: #030212;
        color: white;
        border: 1px solid #030212;
        border-radius:10px ;
        width: 30%;
        padding: 10px;
}
</style>