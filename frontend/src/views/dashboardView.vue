<template>
  <div>
  <NavBar/>
    <div>
      <div id="up-target">

      </div>
        <div class="search-container">
            <form class="d-flex text-center" role="search">
                <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="Search" aria-label="Search">
                <!-- <button class="btn" @click="filteredPortfolios">Search</button> -->
              </form>
              <br>
              <br>
              <div class="row">
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort
                    </button>
                    <ul class="dropdown-menu">
                      <li><button @click="sortByName">A-z <i class="bi bi-sort-alpha-up"></i></button></li>
                      <li><button @click="sortByPrice">Price <i style="color:green" class="bi bi-cash-coin"></i></button></li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    filter
                    </button>
                    <ul class="dropdown-menu">
                      <li><button @click="filterByPriceRange(0, 500)">Below 500 <i class="bi bi-sort-alpha-up"></i></button></li>
                      <li><button @click="filterByPriceRange(500, 1000)">Above 500 <i style="color:green" class="bi bi-cash-coin"></i></button></li>
    
                    </ul>
                  </div>
                </div>
              </div>
             
            
        </div>
        <div class="content" v-if="Portfolios">
            
            <div class="row" v-for="portfolio in sortedPortfolios" :key="portfolio.portfolioID">

                  
                    <button>
                        <div class="col-9">
                            <h4 >{{ portfolio.accountName }}</h4>
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
                    <button class="btn"><i class="bi bi-three-dots-vertical"></i>Details</button>
                     </router-link>
                     <button class="btn" @click="Fav(portfolio)"><i class="bi bi-hand-thumbs-up-fill"> favourite</i></button>
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
  data() {
    return {
      searchQuery: "", //store the search
      sortBy: "", // Store the current sorting option ("name" or "price")
      addToFav: {
      portfolioiImageUrl: '',
      accountName: '',
      subject: '',
      Description: '',
      experience: '',
      price: '',
      emailAdd: '',
      phone: '',
      country: '',
      city: '',
      linkedinUrl: '',
      instaUrl: '',
      facebookUrl: ''
    }
    };
  },
  computed: {
    Portfolios() {
      return this.$store.state.Portfolios;
    },
 filteredByPrice() {
    return this.filterPrice();
  },

  // sort
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
    //filter
    filterPrice() {
  return this.Portfolios.filter(portfolio => {
    const price = portfolio.price;
    const range1 = price >= 0 && price < 500;
    const range2 = price >= 500 && price < 1000;
    return range1 || range2;
  });
    },
    // search
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
    filterByPriceRange(minPrice, maxPrice) {
      this.filteredPortfolios = this.Portfolios.filter(portfolio => {
        const price = portfolio.price;
        return price >= minPrice && price < maxPrice;
      });
    },
    // add to favour
    Fav(portfolio) {  
    const cookieValue = cookies.get("human");
    const { result } = cookieValue;
    this.addToFav.userID = result.userID;
    this.addToFav.portfolioiImageUrl = portfolio.portfolioiImageUrl;
    this.addToFav.accountName = portfolio.accountName;
    this.addToFav.subject = portfolio.subject;
    this.addToFav.Description = portfolio.Description;
    this.addToFav.experience = portfolio.experience;
    this.addToFav.price = portfolio.price;
    this.addToFav.emailAdd = portfolio.emailAdd;
    this.addToFav.phone = portfolio.phone;
    this.addToFav.country = portfolio.country;
    this.addToFav.city = portfolio.city;
    this.addToFav.linkedinUrl = portfolio.linkedinUrl;
    this.addToFav.instaUrl = portfolio.instaUrl;
    this.addToFav.facebookUrl = portfolio.facebookUrl;

   
    this.$store.dispatch('registerFavourite',this.addToFav);
  }
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
    border:1px solid #12021E;
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
 .search-container{
    width: 90%;
    margin:2% 5%;
 }
 .row{
    font-weight: 700;
    margin: 10px 5px;
    width:90%;
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
    justify-content: center;
    margin: 0 5%;
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
    .row{
      width: 100%;
      margin: 5px 2px;
    }
    .col-3 img{
      width: 30px;
      height: 30px;
      object-fit: contain;
      aspect-ratio: 3/4;
   } 
   .col-3{
    width:30px
   }

   .content{
    justify-content:start;
   }
 
  }
</style>