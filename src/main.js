import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';
import VueGoogleMaps from '@fawmi/vue-google-maps'  
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css"
library.add(fas,fab,far);
const app = createApp(App);

app.use(router);
app.use(VueGoogleMaps, {
    load: {
        key: '',
    },
})
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");

import "bootstrap/dist/js/bootstrap.js"