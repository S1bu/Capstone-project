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
<div class="report">
    <center>
        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#report">
            report this account
        </button>
    </center>
  
 
  
  <!-- Modal -->
  <div class="modal fade" id="report" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Reporting account</h1>
          <button type="button" style="background-color:#030212;border:none" class="close" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="modal-body">
        <form action="https://formspree.io/f/mqkvbkor" method="POST">
             <!-- name -->
             <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name">
              </div>
                <!-- email -->
             <div class="mb-3">
                <label for="surname" class="form-label">Surname</label>
                <input type="text" class="form-control" name="surname" id="surname">
              </div>
            <!-- email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" name="email" id="email">
                </div>
                <!-- report -->
                <div class="mb-3">
                  <label for="report" class="form-label">Explain the situation</label>
                  <textarea type="text" class="form-control" name="report" id="report" placeholder="Please specify name of the account you wish to report"></textarea>
                </div>
        
                <button type="submit" class="submit">Submit</button>
            
        </form>
        </div>
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