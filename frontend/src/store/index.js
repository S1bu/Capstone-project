import { createStore } from 'vuex';
import axios from 'axios';

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
    addPortfolio(state, newPortfolio) {
      state.portfolio.push(newPortfolio);
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    removeUser(state, userId) {
      // Implement logic to remove the user from the state
      state.users = state.users.filter(user => user.id !== userId);
    },
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
    async addPortfolio(context, newPortfolioData) {
      try {
        // Send a POST request to your API to create a new portfolio
        const response = await axios.post(`${intelliCoach}portfolio/register`, newPortfolioData);
  
        // Assuming the response contains the created portfolio
        const newPortfolio = response.data;
  
        // Commit the mutation to add the portfolio to the state
        context.commit('addPortfolio', newPortfolio);
  
        // You can also set a success message or perform any other necessary actions.
        context.commit('setMsg', 'Portfolio added successfully');
      } catch (e) {
        // Handle errors, such as network issues or server errors
        context.commit('setMsg', 'An error occurred while adding the portfolio');
      }
    },
    
  },
  modules: {},
});

