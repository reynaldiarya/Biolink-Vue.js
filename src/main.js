import './assets/main.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createApp } from 'vue'
import App from './App.vue'

library.add(fab)
library.add(fas)
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
