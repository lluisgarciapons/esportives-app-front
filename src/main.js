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

Vue.directive("disable-all", {
  // When all the children of the parent component have been updated
  componentUpdated: function (el, binding) {
    if (!binding.value) return;
    const tags = ["input", "button", "textarea", "select"];
    tags.forEach(tagName => {
      const nodes = el.getElementsByTagName(tagName);
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].disabled = true;
        nodes[i].tabIndex = -1;
      }
    });
  }
});

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
