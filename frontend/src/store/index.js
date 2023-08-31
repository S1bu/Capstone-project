import { createStore } from 'vuex'
import axios from 'axios'
const intelliCoach = "https://intellicoach.onrender.com/"
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
  },
  mutations: { // allows us to modify the state
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    setPortfolios(state,Portfolios){
      state.Portfolios = Portfolios
    },
    setPortfolio(state, portfolio){
      state.portfolio = portfolio
    },
    setSpinner(state, value){
      state.spinner= value
    },
    setToken (state, token){
      state.token = token
    },
    setMsg (state, msg){
      state.msg = msg
    },
  },
  actions: {
    async fetchPortfolios(context){
      try{
          const {data} = await axios.get(`${ intelliCoach }portfolios`)
          context.commit("setPortfolios", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async fetchUsers(context){
      try{
          const {data} = await axios.get(`${ intelliCoach }users`)
          context.commit("setUsers", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    }
  },
  modules: {
  }
})