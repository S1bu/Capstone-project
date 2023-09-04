<template>
    <div>
        <div class="search-container">
            <form class="d-flex text-center" role="search">
                <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="Search" aria-label="Search">
                <!-- <button class="btn" @click="filteredPortfolios">Search</button> -->
              </form>
              <br>
              <br>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><button @click="sortByName">A-z <i class="bi bi-sort-alpha-up"></i></button></li>
                  <li><button @click="sortByPrice">Price <i style="color:green" class="bi bi-cash-coin"></i></button></li>
                </ul>
              </div>
        </div>
        <div class="content" v-if="Portfolios">
            
            <div class="row" v-for="portfolio in sortedPortfolios" :key="portfolio.portfolioID">

                  
                    <button>
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
                            <p>{{ portfolio.subject }}</p>
                            <p>{{ portfolio.country }}</p>
                            <p>R {{ portfolio.price }} <i style="color:green" class="bi bi-cash-coin"></i></p>
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

export default {
  components: {
    Spinner
  },
  data() {
    return {
      searchQuery: "",
      sortBy: "", // Store the current sorting option ("name" or "price")
    };
  },
  computed: {
    Portfolios() {
      return this.$store.state.Portfolios;
    },
    sortedPortfolios() {
      const filteredPortfolios = this.filteredPortfolios;

      if (this.sortBy === "name") {
        return filteredPortfolios.slice().sort((a, b) => {
          return a.accountName.localeCompare(b.accountName);
        });
      } else if (this.sortBy === "price") {
        return filteredPortfolios.slice().sort((a, b) => {
          return a.price - b.price;
        });
      }

      return filteredPortfolios;
    },
    filteredPortfolios() {
      // Your existing filtering code
         // Convert searchQuery to lowercase for case-insensitive search
    const searchQuery = this.searchQuery.toLowerCase();

return this.Portfolios.filter((portfolio) => {
  const accountName = portfolio.accountName.toLowerCase(); //filter on accountname
  const subject = portfolio.subject.toLowerCase();  //filter on subject
  const country = portfolio.country.toLowerCase(); //filter on country
  const city = portfolio.city.toLowerCase(); //filter on city
  const price = portfolio.price.toString().toLowerCase(); //filter on price

  return (
    accountName.includes(searchQuery) || 
    subject.includes(searchQuery) ||
    country.includes(searchQuery) ||
    city.includes(searchQuery) ||
    price.includes(searchQuery)
  );
});
    },
  },
  methods: {
    sortByName() {
      this.sortBy = "name";
    },
    sortByPrice() {
      this.sortBy = "price";
    },
  },
  mounted() {
    this.$store.dispatch('fetchPortfolios');
  }
};
</script>

<style  scoped>
.btn{
    background-color: #D5D5DD;
    color: #12021E;
}
.btn:hover{
    background-color: #12021E ;
    color: #D5D5DD;
}

 .content{
   margin: 0 5%;
 }
 .search-container{
    width: 90%;
    margin:2% 5%;
 }
 .row{
    border: 1px solid black;
    font-weight: 700;
    margin: 10px;
    width:95%
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
 button{
    background-color: #D5D5DD;
    border: 1px solid #D5D5DD;
    border-radius: 10px;
 }
 
 .content{
    display: grid;
    grid-template-columns:auto auto;
 }

 /*media query for  < 700*/
 @media (width < 700px) {
        .content{ 
        grid-template-columns:auto;
     }
  }
   /*media query for  < 300*/
   @media (width < 300px) {
    h1 {
      margin-top: 60%;  
    }
  }
</style>
filteredPortfolios() {
 
  },