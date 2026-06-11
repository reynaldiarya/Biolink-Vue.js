import './assets/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faTelegram,
  faSteam,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBagShopping,
  faStore,
  faArrowLeft,
  faShareNodes,
  faCertificate,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

library.add(
  faFacebook,
  faInstagram,
  faTelegram,
  faSteam,
  faYoutube,
  faXTwitter,
  faBagShopping,
  faStore,
  faArrowLeft,
  faShareNodes,
  faCertificate,
  faCheck
);
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .use(router)
  .mount('#app');
