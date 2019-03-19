import Vue from "vue";
import Canvas from "./components/Canvas.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Canvas)
}).$mount("#app");
