import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";
import store from "./config/store";
import router from "./config/route";
import "./config/messages";
import "./config/bootstrap";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
