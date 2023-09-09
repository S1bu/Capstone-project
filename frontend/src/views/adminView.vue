<template>
    <div class="text-align-center">
        <br>
       <br>
       <div class="search-holder">
        <form class="d-flex text-center" role="search">
          <input class="form-control me-2" type="search" v-model="searchQueryUser" placeholder="Search Users" aria-label="Search">
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
              <td><button class="btn btn-warning"><i class="bi bi-pen-fill"></i></button></td>
              <td><button class="btn btn-danger"  @click="deleteUser(user.userID)"><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
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
          <input class="form-control me-2"  type="search" v-model="searchQueryPorfolio" placeholder="Search Portfolios" aria-label="Search">
        </form>
      </div>

      <br>
      <table border="1" v-if="Portfolios">
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
          <td>
            <router-link :to="{ name: 'editPortfolio', params: { id: portfolio.portfolioID }, query: {
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
            }}">
            <button class="btn btn-warning" ><i class="bi bi-pen-fill"></i></button></router-link></td>
          <td><button class="btn btn-danger" @click="deletePortfolio(portfolio.portfolioID)"><i class="bi bi-trash3-fill"></i></button></td>
        </tr>
     
      </table>
      <div class="spin" v-else>
        <center>
          <Spinner />
        </center>
      </div>
    </div>
  </template>
  
  <script>
  import Spinner from '@/components/spinnerComp.vue';
  
  export default {
    components: {
      Spinner
    },
    data() {
      return {
        searchQueryPorfolio: "",
        searchQueryUser:"",
        sortBy: "", // Store the current sorting option ("name" or "price")
        editPortfolioData: {
        // Initialize this object to store the data for editing
        userID: '',
        portfolioID: '',
        accountName: '',
        emailAdd: '',
        // Add other fields as needed
      },
      isEditing: false, // A flag to track if the edit mode is active
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
    .then(() => {
      window.location.reload();
    })
    .catch(error => {
      console.error("Error deleting user:", error);
    });
},
deletePortfolio(portfolioID) {
  // Dispatch an action to delete the user by userId
  this.$store.dispatch('deletePortfolio', portfolioID)
    .then(() => {
      window.location.reload();
    })
    .catch(error => {
      console.error("Error deleting portfolio:", error);
    });
},
 
    },
    mounted() {
      this.$store.dispatch('fetchPortfolios');
      this.$store.dispatch('fetchUsers');
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    color: #d5d5d5;
  }
  
  th, td {
    border: 1px solid #d5d5d5;
    padding: 10px;
    text-align: center;
  }

  .form-control{
    width: 90%;
    text-align: center;
  }
  .search-holder{
    text-align: center;
    margin:0 10% ;
  }
  img{
    width: 70px;
    height: 70px;
    object-fit: contain;
    aspect-ratio: 3/4;
  }

  </style>
  