<template>
  <div>
  <NavBar/>
    <div class="text-align-center">
        <br>
       <br>
       <div class="search-holder">
        <form class="d-flex text-center" role="search">
          <input class="form-control w-100" type="search" v-model="searchQueryUser" placeholder="Search Users" aria-label="Search">
        </form>
       </div>
          <br>
          <br>
   
        <table border="1" v-if="Users">
            <tr>
              <th>userID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>emailAdd</th>
              <th>user image</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
            <tr v-for="user in filteredUsers" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.FirstName }}</td>
              <td>{{ user.LastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td><img :src="user.userPic" alt=""></td>
              <td><button class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#editUser"><i class="bi bi-pen-fill"></i></button></td>
              <td><button class="btn btn-danger"  @click="deleteUser(user.userID)"><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
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
          </table> 
     
      <div class="spin" v-else>
        <center>
          <Spinner />
        </center>
      </div>
      <br>
      <br>
    
      <div class="search-holder">
        <form class="d-flex text-center" role="search">
          <input class="form-control w-100"  type="search" v-model="searchQueryPorfolio" placeholder="Search Portfolios" aria-label="Search">
        </form>
      </div>

      <br>
      <table border="1" v-if="Portfolios" >
        <tr>
          <th>userID</th>
          <th>portfolioID</th>
          <th>accountName</th>
          <th>emailAdd</th>
          <th>Subject</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        <tr v-for="portfolio in filteredPortfolios" :key="portfolio.portfolioID">
          <td>{{ portfolio.userID }}</td>
          <td>{{ portfolio.portfolioID }}</td>
          <td>{{ portfolio.accountName }}</td>
          <td>{{ portfolio.emailAdd }}</td>
          <td>{{ portfolio.subject }}</td>
          <td><button class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#editPortfolio"><i class="bi bi-pen-fill"></i></button></td>
          <td><button class="btn btn-danger" @click="deletePortfolio(portfolio.portfolioID)"><i class="bi bi-trash3-fill"></i></button></td>
        </tr> 
<!-- Modal for portfolio -->
<div class="modal fade" id="editPortfolio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Portfolio</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="updatePortfolio">
  
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
     
      </table>
      <div class="spin" v-else>
        <center>
          <Spinner />
        </center>
      </div>
    </div>
    <footerComp/>
  </div>

  </template>
  
  <script>
  import NavBar from '@/components/navComp.vue'
  import  footerComp from '@/components/footerComp.vue'
  import Spinner from '@/components/spinnerComp.vue';
  
  export default {
    components: {
      footerComp,
      Spinner,
      NavBar
    },
    data() {
      return {
        searchQueryPorfolio: "",
        searchQueryUser:"",
        sortBy: "", // Store the current sorting option ("name" or "price")
        payload: {
    userPic:"",
    FirstName:"",
    LastName:"",
    emailAdd :"",
    userRole:"",
    age:"",
    uPassword:""
          },
        updateProfile: {
      portfolioID:null,
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
      };
    },
    computed: {
      Users() {
        return this.$store.state.users;
      },
      Portfolios() {
        return this.$store.state.Portfolios;
      },
      filteredPortfolios() {
        // Convert searchQuery to lowercase for case-insensitive search
        const searchQueryPorfolio = this.searchQueryPorfolio.toLowerCase();
  
        return this.Portfolios.filter((portfolio) => {
          const emailAdd = portfolio.emailAdd.toLowerCase();
          const accountName = portfolio.accountName.toLowerCase(); // filter on accountname
          const subject = portfolio.subject.toLowerCase();
          
          return(
          accountName.includes(searchQueryPorfolio) ||
          emailAdd.includes(searchQueryPorfolio) ||
          subject.includes(searchQueryPorfolio)
          )
        });
      },
      filteredUsers() {
        // Convert searchQuery to lowercase for case-insensitive search
        const  searchQueryUser = this. searchQueryUser.toLowerCase();
  
        return this.Users.filter((user) => {
          const emailAdd = user.emailAdd.toLowerCase();
          const FirstName = user.FirstName.toLowerCase(); // filter on accountname
          const LastName = user.LastName.toLowerCase();
          const userID = user.userID.toString().toLowerCase();
          
          return(
          FirstName.includes(searchQueryUser) ||
          emailAdd.includes(searchQueryUser) ||
          LastName.includes(searchQueryUser) ||
          userID.includes(searchQueryUser) 
        
          )
        });
      },
    },
    methods:{
      deleteUser(userId) {
  // Dispatch an action to delete the user by userId
  this.$store.dispatch('deleteUser', userId)
},
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
updatePortfolio() {
      const portfolioID = this.updateProfile.portfolioID; // Added this line to get the portfolio ID
      let portfolioToUpdate = this.Portfolios.find(portfolio => portfolio.portfolioID == portfolioID);

      // const updated = {
      //   accountName: portfolio.accountName || portfolioToUpdate.accountName,
      //   portfolioiImageUrl:portfolio.portfolioiImageUrl || portfolioToUpdate.portfolioiImageUrl,
      // subject:portfolio.subject || portfolioToUpdate.subject,
      // Description:portfolio.Description || portfolioToUpdate.Description,
      // experience:portfolio.experience || portfolioToUpdate.experience,
      // price:portfolio.price || portfolioToUpdate.price,
      // emailAdd:portfolio.emailAdd || portfolioToUpdate.emailAdd,
      // country:portfolio.country || portfolioToUpdate.country,
      // city:portfolio.city || portfolioToUpdate.city,
      // phone:portfolio.phone || portfolioToUpdate.phone,
      // linkedinUrl:portfolio.linkedinUrl || portfolioToUpdate.linkedinUrl,
      // instaUrl:portfolio.instaUrl || portfolioToUpdate.instaUrl,
      // facebookUrl:portfolio.facebookUrl || portfolioToUpdate.facebookUrl,
      // }
      if(portfolioToUpdate) {
        portfolioToUpdate = {
          ...this.updateProfile
        }
      }
      this.$store.dispatch('updatePortfolio',{portfolioID, portfolioToUpdate })
      this.updateProfile = {
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
deletePortfolio(portfolioID) {
  // Dispatch an action to delete the user by userId
  this.$store.dispatch('deletePortfolio', portfolioID)
},
 
    },
    mounted() {
      this.$store.dispatch('fetchPortfolios');
      this.$store.dispatch('fetchUsers');
    }
  };
  </script>
  
  <style scoped>
  .submit-form{
    width:40%; 
    padding:10px; 
    background-color:#030212;
    color: #d5d5d5;
    font-weight: 800;
    border: 1px solid white;
    border-radius: 10px;
  }
  table {
    width: 99%;
    color: #d5d5d5;
    margin:auto;
    overflow-x:auto;
  }
  
  th, td {
    border: 1px solid #d5d5d5;
    padding: 1px;
    text-align: center;
    width: auto;
  }

  .form-control{
    border: 1px solid white;
    border-radius: 10px;
    text-align: center;
  }
  .search-holder{
    border: none;
    text-align: center;
    margin:0 10% ;
  }
  img{
    width: 70px;
    height: 70px;
    object-fit: contain;
    aspect-ratio: 3/4;
  }

  form{
    background-color: #d5d5d5;
    color: black;
  }
  .modal-header{
    background-color:#030212;
    text-align: center !important;
  }
  .modal-body{
    width: 100%;
  }
 /* table{
    overflow-x: auto;
  }*/
 label{
  font-size: 12px;
  font-weight: 900;
  margin:1px
 }
 @media (width < 300px) {
  table{
    overflow-x:auto;
  }
 }

  </style>
  