<template>
    <div class="container">
        <form  @submit.prevent="createPortfolio">
            <div class="Create-portfolio-header">
                <h1>Create Portfolio</h1>
            </div>
            <!-- image url -->
            <div class="mb-3 row">
                <label for="Imgurl" class="col-sm-2 col-form-label"><i class="bi bi-image-fill"></i> Url</label>
                <div class="col-sm-9">
                  <input type="url" class="form-control" id="Imgurl" name="Imgurl" v-model="portfolioiImage" required>
                </div>
              </div>
              <!-- portfolio name -->
              <div class="mb-3 row">
                <label for="portfolioname" class="col-sm-2 col-form-label"><i class="bi bi-person-fill"></i> Portfolio Name</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="portfolioname" name="portfolioname" v-model="accountName" required>
                </div>
              </div>
              
              <!-- subject -->
              <div class="mb-3 row">
                <label for="Subject" class="col-sm-2 col-form-label"><i class="bi bi-person-workspace"></i> Subject</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Subject" name="Subject" v-model="subject" required>
                </div>
              </div>
                 
              <!-- description -->
              <div class="mb-3 row">
                <label for="description" class="col-sm-2 col-form-label"><i class="bi bi-person-workspace"></i> description</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="description" name="description" v-model="Description" required>
                </div>
              </div>
              <!-- years  -->
              <div class="mb-3 row">
                <label for="experience" class="col-sm-2 col-form-label"><i class="bi bi-123"></i> years experience</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="experience" name="experience" v-model="experience" required>
                </div>
              </div>
                <!-- price  -->
                <div class="mb-3 row">
                  <label for="price" class="col-sm-2 col-form-label"><i class="bi bi-coin"></i> price</label>
                  <div class="col-sm-9">
                    <input type="number" class="form-control" id="price" name="price" v-model="price" required>
                  </div>
                </div>
                 <!-- email  -->
                 <div class="mb-3 row">
                  <label for="emailAdd" class="col-sm-2 col-form-label"><i class="bi bi-envelope-at-fill"></i> email</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="emailAdd" name="emailAdd" v-model="emailAdd" required>
                  </div>
                </div>
                   <!-- phone  -->
                   <div class="mb-3 row">
                    <label for="emailAdd" class="col-sm-2 col-form-label"><i class="bi bi-phone"></i> phone</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="emailAdd" name="emailAdd" v-model="phone" required>
                    </div>
                  </div>
                <!-- country -->
            <div class="mb-3 row">
                <label for="Country" class="col-sm-2 col-form-label"><i class="bi bi-map"></i> Country</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Country" name="Country" v-model="country" required>
                </div>
              </div>
              <!-- city -->
              <div class="mb-3 row">
                <label for="City" class="col-sm-2 col-form-label"><i class="bi bi-geo-alt-fill"></i> City</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="City" name="City" v-model="city" required>
                </div>
              </div>
              <!-- linkedin -->
              <div class="mb-3 row">
                <label for="linkedin" class="col-sm-2 col-form-label"><i class="bi bi-linkedin"></i> Url</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="linkedin" name="linkedin" v-model="linkedinUrl" required>
                </div>
              </div>
              <!-- instagram -->
              <div class="mb-3 row">
                <label for="insta" class="col-sm-2 col-form-label"><i class="bi bi-instagram"></i> Url</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="insta" name="insta" v-model="instaUrl" required>
                </div>
              </div>
                <!-- facebook -->
                <div class="mb-3 row">
                  <label for="facebook" class="col-sm-2 col-form-label"><i class="bi bi-facebook"></i> facebook</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="facebook" name="facebook" v-model="facebookUrl" required>
                  </div>
                </div>
              <center>
                <button type="submit">
                    Register
                </button>
              </center>
        </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      newPortfolioData: {
      portfolioiImage: "",
      accountName: "",
      subject: "",
      Description: "",
      experience: "",
      price: "",
      emailAdd: "",
      phone:"",
      country: "",
      city: "",
      linkedinUrl: "",
      instaUrl: "",
      facebookUrl: "",
      },
    };
  },
  methods: {
    createPortfolio() {
   
    }
  },
};
</script>


<style scoped>
.container{
    background-color: #D5D5D5;
    width: 90%;
    border: #D5D5D5 1px solid;
    border-radius:10px ;
    margin-top: 5px;
}
button{
    background-color: #030212;
    width: 20%;
    color: white;
    font-weight: 700;
    padding: 10px;
    border: 1px solid #030212 ;
    border-radius: 10px;
    margin: 5px;
}
.Create-portfolio-header{
    background-color: #030212;
    border: 1px solid #030212;
    border-radius: 10px;
    margin:5px 20px;
    text-align: center;
    color: white;
    margin: 5px;
}
form{
    margin: 5px;
}
</style>