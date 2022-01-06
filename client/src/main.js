import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./scss/main.scss";

import instance from "./plugin/axios.js";

Vue.config.productionTip = false;
Vue.prototype.$axios = instance;

const app = new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
});

app.$mount("#app");
