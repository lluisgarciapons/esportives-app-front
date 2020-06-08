import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { mapActions } from "vuex";
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
loadProgressBar();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  methods: {
    ...mapActions(["loginFromLocalStorage"])
  },
  created() {
    if (localStorage.getItem("jwtToken")) {
      this.loginFromLocalStorage(localStorage.getItem("jwtToken"));
    }
  }
}).$mount('#app');
