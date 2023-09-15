<template>
  <div>
  <NavBar/>
    <div>
<div class="container">
    <br>
    <center>
        <h1>
         Favourites list
        </h1>
    </center>
    <div class="content" v-if="Favourites">
            
        <div class="row" v-for="favourite in matchuserID " :key="favourite.favID">

              
                <button class="thebtn">
                    <div class="col-9">
                        <h4>{{ favourite.accountName }}</h4>
                        <p><i class="bi bi-phone"></i> {{ favourite.phone }}</p>
                        <p><i class="bi bi-bookshelf"></i> {{ favourite.subject }}</p>
                        <p><i class="bi bi-globe-europe-africa"></i> {{ favourite.country }}</p>
                        <p><i style="color:green" class="bi bi-cash-coin"></i> R {{ favourite.price }}</p>
                    </div>
                    <div class="col-3">
                        <i class="bi bi-heart-fill" style="color:rgb(227, 74, 100)"></i>
                        <br>
                       <img :src="favourite.portfolioiImageUrl" :alt="favourite.accountName">
                    </div>    
              
                  <div class="button_holder">
              <div class="col-12">
                <router-link :to="{ name: 'single', params: { id: favourite.portfolioID }, query: {
                  portfolioiImageUrl: favourite.portfolioiImageUrl,
                  accountName: favourite.accountName,
                  subject: favourite.subject,
                  Description: favourite.Description,
                  experience:favourite.experience,
                  price:favourite.price,
                  emailAdd:favourite.emailAdd,
                  country: favourite.country,
                  city:favourite.city,
                  phone:favourite.phone,
                  linkedinUrl:favourite.linkedinUrl,
                  instaUrl:favourite.instaUrl,
                  facebookUrl:favourite.facebookUrl
                }}"
            > 
                <button class="btn"><i class="bi bi-three-dots-vertical">Details</i></button>
                 </router-link>
                 <button class="btn" @click="deleteFav(favourite.favID)"><i class="bi bi-hand-thumbs-down-fill">remove</i></button>
              </div>
            </div>
                </button>
          
        </div>
    </div>
    <div class="spin" v-else >
        <center>
            <Spinner/>
        </center>
      </div>
</div>
    </div>
    <footerComp/>
  </div>
</template>

<script>
import NavBar from '@/components/navComp.vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import Spinner from '@/components/spinnerComp.vue';
import  footerComp from '@/components/footerComp.vue'

export default {
  components: {
    Spinner,
    NavBar,
    footerComp
  },
  computed: {
    Favourites() {
      return this.$store.state.favourites;
    },
    matchuserID() { 
      const cookieValue = cookies.get("human"); //getting values values from cookie named human
      const { result } = cookieValue; 
      const userId = result.userID;

      return this.Favourites.filter(favourite => favourite.userID == userId);
    },
    
  },
  methods:{
    deleteFav(favID) {
  // Dispatch an action to delete the user by userId
  console.log(`I was clicked`)
  this.$store.dispatch('deleteFav', favID)
},
  },
  mounted() {
    this.$store.dispatch('fetchFavourites');
  },
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
      h1{
        color:#d5d5d5;
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
         width: 400px;
      }
      
      .content{
         display: grid;
         grid-template-columns:auto auto;
         justify-content: center;
      }
    
    .btn{
      margin: 2px;
      color: #d5d5d5;
      background-color: #12021E;
    }
    
    .btn:hover{
      animation: tada; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 2s; /* don't forget to set a duration! */
      color: #12021E;
      background-color:#d5d5d5;
    }
    .btn i{
      color: #d5d5d5;
    }
    .btn i:hover{
      color: #12021E;
      background-color:#d5d5d5;  
    }
    .heading{
    color:#d5d5d5;
    font-weight:900;
      padding:10px;
      text-align:center;
    }
  
      @media (width < 700px) {
         .content{
         grid-template-columns:auto;
      }
      .thebtn{
        width: 90%;
     }
     .row{
      width:100%;
     }
      }
</style>