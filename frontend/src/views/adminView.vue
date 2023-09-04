<template>
    <div class="text-align-center">
        <br>
        <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <form class="d-flex text-center" role="search">
                    <input class="form-control me-2" type="search" v-model="searchQueryUser" placeholder="Search Users" aria-label="Search">
                  </form>
              </div>
              <br>
            
              <div class="col">
                <form class="d-flex text-center" role="search">
                    <input class="form-control me-2" type="search" v-model="searchQueryPorfolio" placeholder="Search Portfolios" aria-label="Search">
                  </form>
              </div>
            </div>
          </div>
          <br>
      <table border="1" v-if="Users">
        <table border="1" v-if="Users">
            <tr>
              <th>userID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>emailAdd</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
            <tr v-for="user in filteredUsers" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.FirstName }}</td>
              <td>{{ user.LastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td><button class="btn btn-danger"><i class="bi bi-pen-fill"></i></button></td>
              <td><button class="btn btn-success"><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
          </table> 
      </table>
      <div class="spin" v-else>
        <center>
          <Spinner />
        </center>
      </div>
      <br>
      <br>
      <table border="1" v-if="Portfolios">
        <tr>
          <th>userID</th>
          <th>portfolioID</th>
          <th>accountName</th>
          <th>emailAdd</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        <tr v-for="portfolio in filteredPortfolios" :key="portfolio.portfolioID">
          <td>{{ portfolio.userID }}</td>
          <td>{{ portfolio.portfolioID }}</td>
          <td>{{ portfolio.accountName }}</td>
          <td>{{ portfolio.emailAdd }}</td>
          <td><button class="btn btn-danger"><i class="bi bi-pen-fill"></i></button></td>
          <td><button class="btn btn-success"><i class="bi bi-trash3-fill"></i></button></td>
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
          
          
          return( accountName.includes(searchQueryPorfolio) ||
          emailAdd.includes(searchQueryPorfolio)
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
          
          return(
          FirstName.includes(searchQueryUser) ||
          emailAdd.includes(searchQueryUser) ||
          LastName.includes(searchQueryUser)
          )
        });
      }
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
  </style>
  