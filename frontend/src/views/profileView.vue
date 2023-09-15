<template>
  <div>
  <NavBar/>
    <div>
  <div class="container-fluid">
   
    <div class="container">
        <div class="row" v-for="user in User" :key="user.userID">
          <div class="col ">
           <h4>Your details:</h4>
            <p>Name: {{ user.FirstName }}</p>
            <p>Surname:{{ user.LastName }}</p>
            <p>Email:{{ user.emailAdd }}</p> 
          </div>
          <div class="col text-center">
            <h3>Welcome  <span class="highlight">{{ user.FirstName }}</span></h3>
            <img src="https://i.postimg.cc/htGxvCHh/hand-drawn-flat-design-people-waving-illustration-23-2149218831.jpg" width="300px" style="border:1px solid #d5d5d5d;border-radius:10px;padding:5px" :alt="user.FirstName">
          </div>
         
      
        <div class="col-12 text-center">
          <button class="btn" data-bs-toggle="modal" data-bs-target="#editUser"><i class="bi bi-pen-fill"></i>edit details</button>
          <router-link to="/portfolio"><button class="btn"><i class="bi bi-person-plus-fill"></i>Create portfolio</button></router-link>
          <button class="btn"   @click="deleteUser(user.userID)"><i class="bi bi-trash3"></i>Delete Profile</button>
        </div>
      </div>
    </div>
  </div>
              <!-- Modal for updateuser -->
<div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header ">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="updateUser(user)">
          <!-- Profile pic -->
            <div class="mb-3 row">
              <label for="userPic" class="col-sm-2 col-form-label">profile pic</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="userPic" v-model="payload.userPic" name="userPic">
              </div>
            </div>
            <!-- name -->
          <div class="mb-3 row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="name" v-model="payload.FirstName" name="name"  >
            </div>
          </div>
          <!-- surname -->
          <div class="mb-3 row">
            <label for="Surname" class="col-sm-2 col-form-label">Surname</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="Surname" v-model="payload.LastName" name="Surname" >
            </div>
          </div>
          <!-- age -->
          <div class="mb-3 row">
            <label for="age" class="col-sm-2 col-form-label">age</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="age" v-model="payload.age" name="age">
            </div>
          </div>

          <!-- email -->
          <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">e-mail</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="email" v-model="payload.emailAdd" name="email">
            </div>
          </div>
          <!-- password -->
          <div class="mb-3 row">
            <label for="password" class="col-sm-2 col-form-label"><i class="bi bi-incognito">Password</i></label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="password" v-model="payload.uPassword" name="password">
            </div>
          </div>
         <center>
          <button type="submit" class="submit-form" ><i class="bi bi-check">Update</i></button> 
         </center>
         
        </form>
      </div>
    </div>
  </div>
</div>
 
  <br>
  <div class="heading">
    <h1>My portfolios</h1>
  </div>
  <div class="content" v-if="Portfolios">
         
    <div class="row" v-for="portfolio in  matchuserID" :key="portfolio.portfolioID">         
            <button class="thebtn">             
                <div class="col-9">
                    <h4>{{ portfolio.accountName }}</h4>
                    <p><i class="bi bi-phone"></i> {{ portfolio.phone }}</p>
                    <p><i class="bi bi-bookshelf"></i> {{ portfolio.subject }}</p>
                    <p><i class="bi bi-globe-europe-africa"></i> {{ portfolio.country }}</p>
                    <p><i style="color:green" class="bi bi-cash-coin"></i> R {{ portfolio.price }}</p>                
                </div>
                <div class="col-3">               
                   <img :src="portfolio.portfolioiImageUrl" :alt="portfolio.portfolioiImageUrl">
                </div>
                <div class="button_holder">
                  <div class="col-12">
                    <button class="btn" @click="deletePortfolio(portfolio.portfolioID)"><i class="bi bi-trash3-fill"></i>Delete</button> 
                    <router-link :to="{ name: 'Singlepro', params: { id: portfolio.portfolioID }, query: {
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
                    <button class="btn"><i class="bi bi-three-dots-vertical"></i>View more</button>
                     </router-link>
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
<footerComp/>

</div>
 
</template>
<script>
import NavBar from '@/components/navComp.vue'
import Spinner from '@/components/spinnerComp.vue';
import  footerComp from '@/components/footerComp.vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

    export default {
        components: {
    Spinner,
    NavBar,
    footerComp
  },
  data(){
return {
  payload: {
    userPic:"",
    FirstName:"",
    LastName:"",
    emailAdd :"",
    userRole:"",
    age:"",
    uPassword:""
          },
}
  },
        computed:{
            User() {
      return this.$store.state.user;
    },
    //calling portfolio info
    Portfolios() {
        return this.$store.state.Portfolios;
      },
      //calling info that matches the users cookie id
      matchuserID() { 
      const cookieValue = cookies.get("human"); //getting values values from cookie named human
      const { result } = cookieValue; 
      const userId = result.userID;

      return this.Portfolios.filter(portfolio => portfolio.userID == userId);
    }
        },
        methods:{
          deleteUser(userId) {
  // Dispatch an action to delete the user by userId
  this.$store.dispatch('deleteUser', userId)
},
          // update user info
          updateUser(user) {
      const userID = user.userID; // Added this line to get the portfolio ID
      const userToUpdate = this.Portfolios.find(user => user.userID == userID);

      const updated = {
      // -----------------------------
      userPic:user.userPic || userToUpdate.userPic,
    FirstName:user.FirstName || userToUpdate.FirstName,
    LastName:user.LastName || userToUpdate.LastName,
    emailAdd :user.emailAdd || userToUpdate.emailAdd,
    userRole:user.userRole || userToUpdate.userRole,
    age:user.age || userToUpdate.age,
    uPassword:user.uPassword || userToUpdate.uPassword
      }

      this.$store.dispatch('updatePortfolio',{userID,user:updated })
      this.user = {
        userPic:'',
    FirstName:'',
    LastName:'',
    emailAdd :'',
    userRole:'',
    age:'',
    uPassword:''
      }
    },
    // update portfolio
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
    // delete portfolio
          deletePortfolio(portfolioID) {
  this.$store.dispatch('deletePortfolio', portfolioID)
},
        },
        mounted() {
    this.$store.dispatch('fetchUser');
    // this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchPortfolios');
  }
    }
</script>

<style  scoped>
.highlight{
font-weight: 900;

}
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
