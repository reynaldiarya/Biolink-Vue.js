import './assets/main.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'

library.add(fab)
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
