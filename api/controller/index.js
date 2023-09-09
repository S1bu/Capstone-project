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
//fetch user along with its port
routes.get("/user_port/:id", (req, res) => {
  portfolio.fetchUser_Port(req, res);
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
//-----------PORTFOLIO-----------------------

//get all portfolio
routes.get("/portfolios", (req, res) => {
  portfolio.fetchPortfolios(req, res);
});
// getting one portfolio
routes.get("/portfolio/:id", (req, res) => {
  portfolio.fetchPortfolio(req, res);
});
 
//register portfolio
routes.post("/portfolio/register/:id", bodyParser.json(), (req, res) => {
  portfolio.registerPortfolio(req, res);
});
// delete portfolio
routes.delete("/portfolio/:id", (req, res) => {
  portfolio.deletePortfolio(req, res);
});
// update portfolio
routes.patch("/portfolio/:id", bodyParser.json(), (req, res) => {
  portfolio.updatePortfolio(req, res);
});
 

module.exports = {
  express,
  routes,
}
