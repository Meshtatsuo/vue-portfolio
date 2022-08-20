import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Timeline from "primevue/timeline";

import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue);
app.component("timeLine", Timeline);

app.mount("#app");
