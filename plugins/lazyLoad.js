import Vue from "vue";
import Lazyload from "vue-lazyload";

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: "/404.png",
  loading: "/loading.png",
  attempt: 1,
  listenEvents: ["scroll"],
});
