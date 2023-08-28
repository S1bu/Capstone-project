const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// const { veryfyToken } = require('../middleware/AuthenticateUser');
// const {users, books,authors,orders} = require('../model')


//----import all model objects----
const { users } = require("../model");
const { products } = require("../model");

//--------------------------------------
//----------------------------------------------------
//-----------routing to USERS-----------------------
//fetch all user
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
//fetch 1 user
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
 
//register user
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
//update user
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
//delete user
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
//login a user 
routes.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res);
  });
//---------------------------------------------------
//-----------routing to PRODUCTS-----------------------

//get all orders
routes.get("/products", (req, res) => {
  products.fetchProducts(req, res);
});
// getting one order
routes.get("/product/:id", (req, res) => {
  products.fetchProduct(req, res);
});
 
//register user
routes.post("/product/register", bodyParser.json(), (req, res) => {
  products.registerProduct(req, res);
});
// delete user
routes.delete("/product/:id", (req, res) => {
  products.deleteProduct(req, res);
});
// update user
routes.patch("/product/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
 

module.exports = {
  express,
  routes,
}