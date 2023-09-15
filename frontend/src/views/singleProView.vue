<template>
  <div>
  <NavBar/>

    <div>
<div class="single-container">
    <center>
        <div class="back">
            <router-link to="/profile"><i class="bi bi-backspace-fill"></i></router-link>
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
                <center>
                  <button class="btn" data-bs-toggle="modal" data-bs-target="#editPortfolio">
                      edit
                  </button>
              </center>
              </div>
        </div>
    </center>
</div>
<div class="report">

<!-- Modal for portfolio -->
<div class="modal fade" id="editPortfolio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Portfolio</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="updatePortfolio(portfolio) ">
  
          <!-- Image URL -->
          <div class="mb-3 row">
            <label for="imgUrl" class="col-sm-2 col-form-label">
              <i class="bi bi-image-fill"></i> Image URL
            </label>
            <div class="col-sm-9">
              <input type="url" class="form-control" id="imgUrl" name="imgUrl" v-model="updateProfile.portfolioiImageUrl">
            </div>
          </div>
          
          <!-- Portfolio Name -->
          <div class="mb-3 row">
            <label for="portfolioName" class="col-sm-2 col-form-label">
              <i class="bi bi-person-fill"></i> Portfolio Name
            </label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="portfolioName" name="portfolioName" v-model="updateProfile.accountName">
            </div>
          </div>
          
          <!-- Subject -->
          <div class="mb-3 row">
            <label for="subject" class="col-sm-2 col-form-label">
              <i class="bi bi-person-workspace"></i> Subject
            </label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="subject" name="subject" v-model="updateProfile.subject">
            </div>
          </div>
          
          <!-- Description -->
          <div class="mb-3 row">
            <label for="description" class="col-sm-2 col-form-label">
              <i class="bi bi-person-workspace"></i> Description
            </label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="description" name="description" v-model="updateProfile.Description">
            </div>
          </div>
          
          <!-- Years of Experience -->
          <div class="mb-3 row">
            <label for="experience" class="col-sm-2 col-form-label">
              <i class="bi bi-123"></i> Years Exp
            </label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="experience" name="experience"  v-model="updateProfile.experience">
            </div>
          </div>
          
          <!-- Price -->
          <div class="mb-3 row">
            <label for="price" class="col-sm-2 col-form-label">
              <i class="bi bi-coin"></i> Price
            </label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="price" name="price" v-model="updateProfile.price">
            </div>
          </div>
          
          <!-- Email Address -->
          <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">
              <i class="bi bi-envelope-at-fill"></i> Email Address
            </label>
            <div class="col-sm-9">
              <input type="email" class="form-control" id="email" name="email" v-model="updateProfile.emailAdd">
            </div>
          </div>
          
          <!-- Phone Number -->
          <div class="mb-3 row">
            <label for="phone" class="col-sm-2 col-form-label">
              <i class="bi bi-phone"></i> Phone Number
            </label>
            <div class="col-sm-9">
              <input type="tel" class="form-control" id="phone" name="phone" v-model="updateProfile.phone">
            </div>
          </div>
          
          <!-- Country -->
          <div class="mb-3 row">
            <label for="country" class="col-sm-2 col-form-label">
              <i class="bi bi-map"></i> Country
            </label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="country" name="country" v-model="updateProfile.country">
            </div>
          </div>
          
          <!-- City -->
          <div class="mb-3 row">
            <label for="city" class="col-sm-2 col-form-label">
              <i class="bi bi-geo-alt-fill"></i> City
            </label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="city" name="city" v-model="updateProfile.city">
            </div>
          </div>
          
          <!-- LinkedIn URL -->
          <div class="mb-3 row">
            <label for="linkedinUrl" class="col-sm-2 col-form-label">
              <i class="bi bi-linkedin"></i> LinkedIn URL
            </label>
            <div class="col-sm-9">
              <input type="url" class="form-control" id="linkedinUrl" name="linkedinUrl" v-model="updateProfile.linkedinUrl">
            </div>
          </div>
          
          <!-- Instagram URL -->
          <div class="mb-3 row">
            <label for="instaUrl" class="col-sm-2 col-form-label">
              <i class="bi bi-instagram"></i> Instagram URL
            </label>
            <div class="col-sm-9">
              <input type="url" class="form-control" id="instaUrl" name="instaUrl" v-model="updateProfile.instaUrl">
            </div>
          </div>
          
          <!-- Facebook URL -->
          <div class="mb-3 row">
            <label for="facebookUrl" class="col-sm-2 col-form-label">
              <i class="bi bi-facebook"></i> Facebook URL
            </label>
            <div class="col-sm-9">
              <input type="url" class="form-control" id="facebookUrl" name="facebookUrl" v-model="updateProfile.facebookUrl">
            </div>
          </div>
          
          <center>
            <button type="submit" class="submit-form" >
              Update
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</div>
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
   },
        data(){
          return{
            updateProfile: {
      portfolioID:'',
      portfolioiImageUrl:'',
      accountName:'',
      subject:'',
      Description:'',
      experience:'',
      price:'',
      emailAdd:'',
      country:'',
      city:'',
      phone:'',
      linkedinUrl:'',
      instaUrl:'',
      facebookUrl:''
    },
          }
        },
        methods:{
          updatePortfolio(portfolio) {
      const portfolioID = portfolio.portfolioID; // Added this line to get the portfolio ID
      const portfolioToUpdate = this.Portfolios.find(portfolio => portfolio.portfolioID == portfolioID);

      const updated = {
        accountName: portfolio.accountName || portfolioToUpdate.accountName,
        portfolioiImageUrl:portfolio.portfolioiImageUrl || portfolioToUpdate.portfolioiImageUrl,
      subject:portfolio.subject || portfolioToUpdate.subject,
      Description:portfolio.Description || portfolioToUpdate.Description,
      experience:portfolio.experience || portfolioToUpdate.experience,
      price:portfolio.price || portfolioToUpdate.price,
      emailAdd:portfolio.emailAdd || portfolioToUpdate.emailAdd,
      country:portfolio.country || portfolioToUpdate.country,
      city:portfolio.city || portfolioToUpdate.city,
      phone:portfolio.phone || portfolioToUpdate.phone,
      linkedinUrl:portfolio.linkedinUrl || portfolioToUpdate.linkedinUrl,
      instaUrl:portfolio.instaUrl || portfolioToUpdate.instaUrl,
      facebookUrl:portfolio.facebookUrl || portfolioToUpdate.facebookUrl,
      }

      this.$store.dispatch('updatePortfolio',{portfolioID,portfolio:updated })
      this.portfolio = {
        accountName: '',
        portfolioiImageUrl:'',
      subject:'',
      Description:'',
      experience:'',
      price:'',
      emailAdd:'',
      country:'',
      city:'',
      phone:'',
      linkedinUrl:'',
      instaUrl:'',
      facebookUrl:'',
      }
    },
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

.btn{
  width: 40%;
  padding: 10px;
  border: 1px solid #030212;
  border-radius: 10px;
  background-color:#030212 ;
  margin: 2px;
  color: #D5D5D5;
  font-weight: 900;
}
</style>