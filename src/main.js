import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createApp } from "vue";
import App from "./App.vue";
import router from './router';

library.add(faFacebook, faInstagram, faXTwitter, faTelegram, faBagShopping);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
