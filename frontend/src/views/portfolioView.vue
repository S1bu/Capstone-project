<template>
    <div class="container">
        <form  >
            <div class="Create-portfolio-header">
                <h1>Create Portfolio</h1>
            </div>
            <!-- 1 -->
            <div class="mb-3 row">
                <label for="Imgurl" class="col-sm-2 col-form-label"><i class="bi bi-image-fill"></i> Url</label>
                <div class="col-sm-9">
                  <input type="url" class="form-control" id="Imgurl" name="Imgurl" required>
                </div>
              </div>
              <!-- 2 -->
              <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label"><i class="bi bi-person-fill"></i> Name</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="name" name="name" required>
                </div>
              </div>
              <!-- 3 -->
              <div class="mb-3 row">
                <label for="Surname" class="col-sm-2 col-form-label"><i class="bi bi-person-fill"></i> Surname</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Surname" name="Surname" required>
                </div>
              </div>
              <!-- 4 -->
              <div class="mb-3 row">
                <label for="Subject" class="col-sm-2 col-form-label"><i class="bi bi-person-workspace"></i> Subject</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Subject" name="Subject" required>
                </div>
              </div>
              <!-- 5 -->
              <div class="mb-3 row">
                <label for="experience" class="col-sm-2 col-form-label"><i class="bi bi-123"></i> years experience</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="experience" name="experience" required>
                </div>
              </div>
                <!-- 6 -->
            <div class="mb-3 row">
                <label for="Country" class="col-sm-2 col-form-label"><i class="bi bi-map"></i> Country</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Country" name="Country" required>
                </div>
              </div>
              <!-- 7 -->
              <div class="mb-3 row">
                <label for="City" class="col-sm-2 col-form-label"><i class="bi bi-geo-alt-fill"></i> City</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="City" name="City" required>
                </div>
              </div>
              <!-- 8 -->
              <div class="mb-3 row">
                <label for="linkedin" class="col-sm-2 col-form-label"><i class="bi bi-linkedin"></i> Url</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="linkedin" name="linkedin" required>
                </div>
              </div>
              <!-- 9 -->
              <div class="mb-3 row">
                <label for="insta" class="col-sm-2 col-form-label"><i class="bi bi-instagram"></i> Url</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="insta" name="insta" required>
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
    }
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