<template>
  <div class="container">
      <router-link to="/admin">
          <i class="bi bi-backspace-fill"></i>
      </router-link>
      
      <form @submit.prevent="show">
        <div class="Create-portfolio-header">
          <h1>Edit Portfolio</h1>
        </div>
        
        <!-- Image URL -->
        <div class="mb-3 row">
          <label for="imgUrl" class="col-sm-2 col-form-label">
            <i class="bi bi-image-fill"></i> Image URL
          </label>
          <div class="col-sm-9">
            <input type="url" class="form-control" id="imgUrl" name="imgUrl" v-model="updateProfile.portfolioiImageUrl" required>
          </div>
        </div>
        
        <!-- Portfolio Name -->
        <div class="mb-3 row">
          <label for="portfolioName" class="col-sm-2 col-form-label">
            <i class="bi bi-person-fill"></i> Portfolio Name
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="portfolioName" name="portfolioName" v-model="updateProfile.accountName" required>
          </div>
        </div>
        
        <!-- Subject -->
        <div class="mb-3 row">
          <label for="subject" class="col-sm-2 col-form-label">
            <i class="bi bi-person-workspace"></i> Subject
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="subject" name="subject" v-model="updateProfile.subject" required>
          </div>
        </div>
        
        <!-- Description -->
        <div class="mb-3 row">
          <label for="description" class="col-sm-2 col-form-label">
            <i class="bi bi-person-workspace"></i> Description
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="description" name="description" v-model="updateProfile.Description" required>
          </div>
        </div>
        
        <!-- Years of Experience -->
        <div class="mb-3 row">
          <label for="experience" class="col-sm-2 col-form-label">
            <i class="bi bi-123"></i> Years of Experience
          </label>
          <div class="col-sm-9">
            <input type="number" class="form-control" id="experience" name="experience"  v-model="updateProfile.experience" required>
          </div>
        </div>
        
        <!-- Price -->
        <div class="mb-3 row">
          <label for="price" class="col-sm-2 col-form-label">
            <i class="bi bi-coin"></i> Price
          </label>
          <div class="col-sm-9">
            <input type="number" class="form-control" id="price" name="price" v-model="updateProfile.price" required>
          </div>
        </div>
        
        <!-- Email Address -->
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">
            <i class="bi bi-envelope-at-fill"></i> Email Address
          </label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="email" name="email" v-model="updateProfile.emailAdd" required>
          </div>
        </div>
        
        <!-- Phone Number -->
        <div class="mb-3 row">
          <label for="phone" class="col-sm-2 col-form-label">
            <i class="bi bi-phone"></i> Phone Number
          </label>
          <div class="col-sm-9">
            <input type="tel" class="form-control" id="phone" name="phone" v-model="updateProfile.phone" required>
          </div>
        </div>
        
        <!-- Country -->
        <div class="mb-3 row">
          <label for="country" class="col-sm-2 col-form-label">
            <i class="bi bi-map"></i> Country
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="country" name="country" v-model="updateProfile.country" required>
          </div>
        </div>
        
        <!-- City -->
        <div class="mb-3 row">
          <label for="city" class="col-sm-2 col-form-label">
            <i class="bi bi-geo-alt-fill"></i> City
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="city" name="city" v-model="updateProfile.city" required>
          </div>
        </div>
        
        <!-- LinkedIn URL -->
        <div class="mb-3 row">
          <label for="linkedinUrl" class="col-sm-2 col-form-label">
            <i class="bi bi-linkedin"></i> LinkedIn URL
          </label>
          <div class="col-sm-9">
            <input type="url" class="form-control" id="linkedinUrl" name="linkedinUrl" v-model="updateProfile.linkedinUrl" required>
          </div>
        </div>
        
        <!-- Instagram URL -->
        <div class="mb-3 row">
          <label for="instaUrl" class="col-sm-2 col-form-label">
            <i class="bi bi-instagram"></i> Instagram URL
          </label>
          <div class="col-sm-9">
            <input type="url" class="form-control" id="instaUrl" name="instaUrl" v-model="updateProfile.instaUrl" required>
          </div>
        </div>
        
        <!-- Facebook URL -->
        <div class="mb-3 row">
          <label for="facebookUrl" class="col-sm-2 col-form-label">
            <i class="bi bi-facebook"></i> Facebook URL
          </label>
          <div class="col-sm-9">
            <input type="url" class="form-control" id="facebookUrl" name="facebookUrl" v-model="updateProfile.facebookUrl" required>
          </div>
        </div>
        
        <center>
          <button type="submit">
            Update
          </button>
        </center>
      </form>
      
  </div>
</template>
<script>
export default {
data() {
  return {
    updateProfile: {
      portfolioID:this.$route.query.portfolioID,
    
    },
    errorMsg: null
  };
},

methods: {
 
}
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

.container a{
    color: black;
    font-size: 30px;
}
</style>