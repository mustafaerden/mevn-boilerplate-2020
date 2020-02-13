import Vue from "vue";
import Main from "./pages/Main.vue";
import "./styles/main.css";
import router from "./routes";
import Router from "vue-router";

Vue.use(Router);

const app = new Vue({
  el: "#app",
  router,
  render: h => h(Main)
});
