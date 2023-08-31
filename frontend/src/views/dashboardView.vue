<template>
    <div>
        <div class="search-container">
            <form class="d-flex text-center" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
        </div>
        <div class="content" v-if="Portfolios">
            <div class="card" v-for="portfolio in Portfolios" :key="portfolio.portfolioID">
                <div class="row">
                    <button>
                        <div class="col-9">
                            <h4>{{ portfolio.accountName }}</h4>
                            <h5>{{ portfolio.subject }}</h5>
                            <h6>R {{ portfolio.price }} <i class="bi bi-cash-coin"></i></h6>
                        </div>
                        <div class="col-3">
                           <img :src="portfolio.portfolioiImageUrl" :alt="portfolio.portfolioiImageUrl">
                        </div>
                    </button>
                </div>
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
 import Spinner from '@/components/spinnerComp.vue'
    export default {
        components:{
        Spinner
    },
    computed: {
        Portfolios() {
            return this.$store.state.Portfolios;
        },
    },
    mounted() {
        this.$store.dispatch('fetchPortfolios');
    },
    }
</script>
<style  scoped>
 .content{
   margin: 0 5%;
 }
 .search-container{
    width: 90%;
    margin:2% 5%;
 }
 .card{
    border: 1px solid black;
    font-weight: 700;
    margin: 5px;
 }
 h4+h5+h6{
    font-weight: 700;
 }
 .col-9{
    float: left;
    text-align: left;
 }
 .col-3{
    float: right;
 }
 .col-3 img{
    width: 90px;
    height: 90px;
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
    grid-template-columns:auto auto auto ;
    justify-content: space-around;
 }
</style>