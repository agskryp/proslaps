import Vue from "vue";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHandPaper,
  faHandRock,
  faHandScissors,
  faHandLizard,
  faHandSpock
} from "@fortawesome/free-solid-svg-icons";

library.add(faHandPaper, faHandRock, faHandScissors, faHandLizard, faHandSpock);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
