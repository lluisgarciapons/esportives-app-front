import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "../router/index";
import isEmpty from "../validation/is-empty";
import setAuthToken from "../utils/setAuthToken";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nom: "",
    curs: "",
    isAuthenticated: false,
    error: {}
  },
  mutations: {
    canviNom: (state, payload) => state.nom = payload,
    canviCurs: (state, payload) => state.curs = payload,
    isAuth: (state, payload) => {
      state.isAuthenticated = !isEmpty(payload);
      router.push(localStorage.getItem("lastRoute"));
    },
    logout: state => state.isAuthenticated = false,
    setError: (state, payload) => state.error = payload
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_PROXY}/api/auth/login`, payload);
        // console.log(response.data);
        commit("setError", {});
        localStorage.setItem("jwtToken", response.data.token);
        setAuthToken(response.data.token);
        commit("isAuth", response.data.token);
      }
      catch (error) {
        // console.log(error.response);
        commit("setError", error.response.data);
      }

    },
    loginFromLocalStorage: (context, token) => {
      if (token !== undefined && token !== "") {
        // Set Token to Auth Header
        axios
          .get(`${process.env.VUE_APP_API_PROXY}/api/auth`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(() => {
            // console.log("!!!", res);

            setAuthToken(token);

            // Set token to local storage
            localStorage.setItem("jwtToken", token);

            context.commit("setError", {});
            context.commit("isAuth", token);
          })
          .catch(() => {
            // console.log(err.response);
            context.dispatch("logout");
          });
      }
    },
    logout: context => {
      // console.log("logout");
      axios.get(`${process.env.VUE_APP_API_PROXY}/api/auth/logout`).then(() => {
        // console.log(response);
        localStorage.removeItem("jwtToken");
        context.commit("logout");
        router.push("/login");
      });
    }

  },
  getters: {
    getNom: state => state.nom,
    getCurs: state => state.curs,
    getError: state => state.error,
    isError: state => !isEmpty(state.error)
  }
});
