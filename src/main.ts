import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";

import "./assets/main.css";

const app = createApp(App);
app.use(VueSplide);
app.mount("#app");
