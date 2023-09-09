<template>
    <div>
  <div class="container-fluid">
   
    <div class="container">
        <div class="row" v-for="user in User" :key="user.userID">
          <center>
            <img :src="user.userPic" :alt="user.FirstName">
          </center>
          <div class="col ">
            <p>{{ user.userID }}</p>
            <p>Name: {{ user.FirstName }}</p>
            <p>Surname:{{ user.LastName }}</p>
            <p>Age :</p>
            <p>Gender:</p> 
          </div>
          <div class="col">
            <p>Country:</p>
            <p>City:</p>
            <p>Email:{{ user.emailAdd }}</p> 
            <p>Phone: {{ user.phone}} </p>
            <p>Linkedin</p>
            <p>instaUrl</p>
            <p>facebookUrl</p>
            <h3></h3>
          </div>
        </div>
    </div>
  </div>
  <br>
  <div class="content" v-if="Portfolios">
            
    <div class="row" v-for="portfolio in  matchuserID" :key="portfolio.portfolioID">

          
            <button class="thebtn">
                <router-link :to="{ name: 'single', params: { id: portfolio.portfolioID }, query: {
                    portfolioiImageUrl: portfolio.portfolioiImageUrl,
                    accountName: portfolio.accountName,
                    subject: portfolio.subject,
                    Description: portfolio.Description,
                    experience:portfolio.experience,
                    price:portfolio.price,
                    emailAdd:portfolio.emailAdd,
                    country: portfolio.country,
                    city:portfolio.city,
                    phone:portfolio.phone,
                    linkedinUrl:portfolio.linkedinUrl,
                    instaUrl:portfolio.instaUrl,
                    facebookUrl:portfolio.facebookUrl
                  }}"
              >
                <div class="col-9">
                    <h4>{{ portfolio.accountName }}</h4>
                    <p><i class="bi bi-phone"></i> {{ portfolio.phone }}</p>
                    <p><i class="bi bi-bookshelf"></i> {{ portfolio.subject }}</p>
                    <p><i class="bi bi-globe-europe-africa"></i> {{ portfolio.country }}</p>
                    <p><i style="color:green" class="bi bi-cash-coin"></i> R {{ portfolio.price }}</p>
                    <button class="btn btn-danger" @click="deletePortfolio(portfolio.portfolioID)"><i class="bi bi-trash3-fill"></i></button> 
                    <button class="btn btn-warning"><i class="bi bi-pen"></i></button> 
                </div>
                <div class="col-3">
                   
                   <img :src="portfolio.portfolioiImageUrl" :alt="portfolio.portfolioiImageUrl">

                </div>
             
            </router-link>
            </button>
      
    </div>
</div>
<div class="spin" v-else >
    <center>
        <Spinner/>
    </center>
  </div>
</div>

 
</template>
<script>
import Spinner from '@/components/spinnerComp.vue';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

    export default {
        components: {
    Spinner
  },
        computed:{
            User() {
      return this.$store.state.user;
    },
    Portfolios() {
        return this.$store.state.Portfolios;
      },
      matchuserID() { 
      const cookieValue = cookies.get("human"); //getting values values from cookie named human
      const { result } = cookieValue; 
      const userId = result.userID;

      return this.Portfolios.filter(portfolio => portfolio.userID == userId);
    }
        },
        mounted() {
    this.$store.dispatch('fetchUser');
    this.$store.dispatch('fetchPortfolios');
  }
    }
</script>

<style  scoped>
.container-fluid{
background-color: #d5d5d5;
border: 1px solid #d5d5d5;
border-radius: 10px;
width: 90%;
}
.col{

    width: auto;
}
.col img{
    width: 200px;
}

.content{
    margin: 0 5%;
  }
  .search-container{
     width: 90%;
     margin:2% 5%;
  }
  .row{
   
     font-weight: 700;
     margin: 10px;
     width:95%;
  }
  
  h4{
     font-weight: 900;
     color: #12021E;
  }
  a{
     text-decoration: none;
     color:black
  }
  .col-9{
     float: left;
     text-align: left;
  }
  .col-3{
     float: right;
     margin-top: 5%;
  }
  .col-3 img{
     width: 70px;
     height: 70px;
     object-fit: contain;
     aspect-ratio: 3/4;
  } 
  .thebtn{
     background-color: #d5d5d5;
     border: 1px solid #d5d5d5;
     border-radius: 10px;
  }
  
  .content{
     display: grid;
     grid-template-columns:auto auto;
  }


  @media (width < 700px) {
     .content{
     grid-template-columns:auto;
  }
  }
</style>