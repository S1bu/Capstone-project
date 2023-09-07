const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// const { veryfyToken } = require('../middleware/AuthenticateUser');
// const {users, books,authors,orders} = require('../model')


//----import all model objects----
const { users } = require("../model");
const { portfolio } = require("../model");
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
routes.get("/portfolios", (req, res) => {
  portfolio.fetchPortfolios(req, res);
});
// getting one order
routes.get("/portfolio/:id", (req, res) => {
  portfolio.fetchPortfolio(req, res);
});
 
//register user
routes.post("/portfolio/register", bodyParser.json(), (req, res) => {
  portfolio.registerPortfolio(req, res);
});
// delete user
routes.delete("/portfolio/:id", (req, res) => {
  portfolio.deletePortfolio(req, res);
});
// update user
routes.patch("/portfolio/:id", bodyParser.json(), (req, res) => {
  portfolio.updatePortfolio(req, res);
});
 

module.exports = {
  express,
  routes,
}
