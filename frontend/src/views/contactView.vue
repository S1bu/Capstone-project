<template>
  <div class="container">
     <div class="contact-body">
         <div class="contact-header">
             <h1>Contact</h1>
         </div>
         <form  action="https://formspree.io/f/mqkvbkor" method="POST">
             <div class="mb-3 row">
                 <label for="name" class="col-sm-2 col-form-label">Name</label>
                 <div class="col-sm-9">
                   <input type="text" class="form-control" id="name" name="name" required>
                 </div>
               </div>
               <div class="mb-3 row">
                 <label for="surname" class="col-sm-2 col-form-label">Surname</label>
                 <div class="col-sm-9">
                   <input type="text" class="form-control" id="surname" name="surname" required>
                 </div>
               </div>
               <div class="mb-3 row">
                 <label for="email" class="col-sm-2 col-form-label">e-mail</label>
                 <div class="col-sm-9">
                   <input type="text" class="form-control" id="email" name="email" required>
                 </div>
               </div>
               <div class="mb-3 row">
                 <label for="message" class="col-sm-2 col-form-label">Message</label>
                 <div class="col-sm-9">
                   <textarea type="text" class="form-control" id="message" name="message" required></textarea>
                 </div>
               </div>
               <center>
                 <button type="submit">
                     send
                 </button>
               </center>
         </form>
 </div>
  </div>
 </template>
 <script>
     export default {
     }
 </script>
 <style scoped>
 .container{
     text-align: center;
 }
 .contact-body{
     margin: 10px;
     width: 90%;
     background-color: #D9D9D9;
     height: 60vh;
     border: 1px solid #D9D9D9;
     border-radius: 10px;
 }
 .contact-header{
     background-color: #030212;
     border: 1px solid #030212;
     border-radius: 10px;
     margin:5px 20px;
 }
 h1{
     color: white;
 }
 button{
     padding: 10px;
     background-color: #030212;
     width: 30%;
     border: 1px solid #030212;
     border-radius: 10px;
     color: white;
     float: right;
     margin-right: 25px;
 }
 </style>