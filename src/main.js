import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "buefy/dist/buefy.css";
import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
