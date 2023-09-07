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
    // addPortfolio(state, newPortfolio) {
    //   state.portfolio.push(newPortfolio);
    // },
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
    // updatePortfolios(state, portfolio){
    //   state.Portfolios = state.Portfolios.map(u => u.id === portfolio.id ? portfolio : u)
    // },

  },
  actions: {
    async fetchPortfolios(context) {
      try {
        const { data } = await axios.get(`${intelliCoach}portfolios`);
        context.commit("setPortfolios", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${intelliCoach}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred");
      }
    },
    async deleteUser(context, userID) {
      try {
        // Send a DELETE request to your API to delete the user
        await axios.delete(`${intelliCoach}user/${userID}`);
        // If the deletion is successful, you can commit the removeUser mutation
        context.commit("deleteUser", userID);
        // You can also set a success message or perform any other necessary actions.
        context.commit("setMsg", "User deleted successfully");
      } catch (e) {
        // Handle errors, such as network issues or server errors
        context.commit("setMsg", "An error occurred while deleting the user");
      }
    },
    async deletePortfolio(context, portfolioID) {
      try {
        // Send a DELETE request to your API to delete the portfolio
        await axios.delete(`${intelliCoach}portfolio/${portfolioID}`);
        context.commit("deletePortfolio", portfolioID);
        context.commit("setMsg", "Portfolio deleted successfully");
      } catch (e) {
        context.commit("setMsg", "An error occurred while deleting the portfolio");
      }
    },
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${intelliCoach}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
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
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${intelliCoach}login`, payload)
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
          router.push({ name: "dashboard" });
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
    async logOut(context) {
        context.commit("setUser")
        cookies.remove("human")
    },
    async registerPortfolio(context, newPortfolio) {
      try {
        const { msg } = (await axios.post(`${intelliCoach}portfolio/register`, newPortfolio)).data;
        if (msg) {
          sweet({
            title: "Register Portfolio",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchPortfolio");
          router.push({ name: "dashboard" });
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
    }
 
  },
  modules: {},
});

