import { createStore } from 'vuex';
import axios from 'axios';
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
import authenticateUser from '@/services/authenticateUser';

const { cookies } = useCookies();

const intelliCoach = "https://intellicoach.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    Portfolios: null,
    portfolio: null,
    favourites:null,
    favourite:null,
    spinner: false,
    token: null,
    msg: null
  },
  getters: {
    // Define your getters if needed
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setPortfolios(state, Portfolios) {
      state.Portfolios = Portfolios;
    },
    setPortfolio(state, portfolio) {
      state.portfolio = portfolio;
    },
    setFavourites(state, favourites) {
      state.favourites = favourites;
    },
    setFavourite(state, favourite) {
      state.favourite = favourite;
    },
    addPortfolio(state, newPortfolio) {
      state.portfolio.push(newPortfolio);
    },
    deleteFav(state, favID) {
      state.favourites = state.favourites.filter(fav => fav.favID !== favID);
    },
    deleteUser(state, userID) {
      state.users = state.users.filter(users => users.userID !== userID);
    },
    deletePortfolio(state, portfolioID) {
      state.Portfolios = state.Portfolios.filter(users => users.portfolioID !== portfolioID);
    },

    setSpinner(state, value) {
      state.spinner = value;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    removeUser(state, userId) {
      // Implement logic to remove the user from the state
      state.users = state.users.filter(user => user.id !== userId);
    },
    updatePortfolio(state, {portfolioID, updatedPortfolio}){
      const index = state.portfolios.findIndex((portfolio)=>portfolio.id===portfolioID)
        if (index!==-1){
          state.portfolios[index]=updatedPortfolio
        }
    },

  },
  actions: {
   //---------------------------------------------------------------------------------------------------------------
  //----Fetch all----------
   //---------------------------------------------------------------------------------------------------------------
    //fetching all portfolios
    async fetchPortfolios(context) {
      try {
        const { data } = await axios.get(`${intelliCoach}portfolios`);
        context.commit("setPortfolios", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
 // fetching all favourites
 async fetchFavourites(context) {
  try {
    const { data } = await axios.get(`${intelliCoach}favourites`);
    context.commit("setFavourites", data.results);
  } catch (e) {
    context.commit("setMsg", "An error occurred");
  }
},
    // fetching all users
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${intelliCoach}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
  //---------------------------------------------------------------------------------------------------------------
  //----Fetch one-------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------------
    //fetching one user
    async fetchUser(context) {
      try {
        const cookieValue = cookies.get("human");
        const { result } = cookieValue;
        context.commit("setUser", { result });
        await axios.get(`${intelliCoach}user/${result.userID}`)
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
    //---------------------------------------------------------------------------------------------------------------
  //----delete ----------
    //---------------------------------------------------------------------------------------------------------------   
    //delete user
    async deleteUser(context, userID) {
      try {
      
        await axios.delete(`${intelliCoach}user/${userID}`); //delete request
        context.commit("deleteUser", userID); //commit remover mutation
        context.commit("setMsg", "User deleted successfully"); //success msg
      } catch (e) {
        context.commit("setMsg", "An error occurred while deleting the user");//error handling
      }
    },
      //delete portfolio
      async deletePortfolio(context, portfolioID) {
        try {
          await axios.delete(`${intelliCoach}portfolio/${portfolioID}`); //delete request
          context.commit("deletePortfolio", portfolioID); 
          context.commit("setMsg", "Portfolio deleted successfully");//success msg
        } catch (e) {
          context.commit("setMsg", "An error occurred while deleting the portfolio");//error msg
        }
      },
     //delete fav
     async deleteFav(context, favID) {
      try {
        await axios.delete(`${intelliCoach}favourite/${favID}`); //delete request
        context.commit("deleteFav", favID); 
        context.commit("setMsg", "fav deleted successfully");//success msg
      } catch (e) {
        context.commit("setMsg", "An error occurred while deleting the fav");//error msg
      }
    },
  //---------------------------------------------------------------------------------------------------------------
  //----update ----------
  //---------------------------------------------------------------------------------------------------------------
     //update user
     async updateUser(context, userID) {
      try {

        await axios.patch(`${intelliCoach}user/${userID}`); //delete request
        context.commit("updateUser", userID); //commit remover mutation
        context.commit("setMsg", "User updated successfully"); //success msg
      } catch (e) {
        context.commit("setMsg", "An error occurred while deleting the user");//error handling
      }
    },
    async updatePortfolios(context, payload) {
      try {
        const res = await axios.put(`${intelliCoach}user/${payload.ID}`, payload);
        const { result, err, msg } = await res.data;
        if (result) {
          context.commit('updateUser', result);
          context.commit('setMessage', msg)
        } else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error);
        context.commit('setMessage', 'Error updating user');
      }
    },
    //---------------------------------------------------------------------------------------------------------------
  //----register ----------
   //--------------------------------------------------------------------------------------------------------------- 
    //register user
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${intelliCoach}register`, payload)).data; //post request
        if (msg) { //if payload posted give us a sweet message
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else { //if not posted then give us this sweet error
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
 //create Portfolio
 async registerPortfolio(context, newPortfolio) {
  try {
    
    const { msg,token, result } = (await axios.post(`${intelliCoach}portfolio/register`, newPortfolio)).data;
    if (result) {
      context.commit("setPortfolios", { result, msg });
      cookies.set("human", { msg, token, result });
      authenticateUser.applyToken(token);
      sweet({
        title: "msg",
        text: `Registered under user ${result?.userID} ` ,
        icon: "success",
        timer: 4000,
      });
      context.dispatch("fetchPortfolios");
      router.push({ name: "dashboard" }); //Programmatically navigate to a new URL
    } else {
      sweet({
        title: "Error",
        text: msg,
        icon: "error",
        timer: 4000
      });
    }
  } catch (e) {
    context.commit("setMsg", "An error has occured");
  }
},
  //fav Portfolio
  async registerFavourite(context, addThem) { 
    try {

      const { msg,token, result } = (await axios.post(`${intelliCoach}favourite/register`, addThem)).data;
      if (result) {
        context.commit("setFavourites", { result, msg });
        cookies.set("human", { msg, token, result });
        authenticateUser.applyToken(token);
        sweet({
          title: "msg",
          text: `Registered under user ${result?.userID} ` ,
          icon: "success",
          timer: 4000,
        });
        context.dispatch("fetchFavourites");
        router.push({ name: "fav" }); //Programmatically navigate to a new URL
      } else {
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 4000
        });
      }
    } catch (e) {
      context.commit("setMsg", "An error has occured");
    }
  },
   //---------------------------------------------------------------------------------------------------------------
  //----login ----------
  //---------------------------------------------------------------------------------------------------------------
    //login user
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${intelliCoach}login`, payload) //login request`
        ).data;
        // console.log( msg, token, result);
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("human", { msg, token, result });
          authenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.FirstName} ${result?.LastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "dashboard" }); //page i want to go after
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
     //---------------------------------------------------------------------------------------------------------------
  //----logout ----------
  //---------------------------------------------------------------------------------------------------------------
  //logout user
  async logOut(context) {
    context.commit("setUser")
    cookies.remove("human")
},
  },
  modules: {},
});

