import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import {store} from "./store/store.js";
import {router} from "./router/router.js";

library.add(faCheckCircle);
library.add(faExclamationCircle);

createApp(App)
    .use(store)
    .use(router)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')
