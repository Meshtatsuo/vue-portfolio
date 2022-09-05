import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiTwitter,
  BiLinkedin,
  BiGithub,
  MdEmailOutlined,
} from "oh-vue-icons/icons";

addIcons(BiTwitter, BiLinkedin, BiGithub, MdEmailOutlined);

import "./assets/main.css";

const app = createApp(App);
app.use(VueSplide);
app.component("v-icon", OhVueIcon);
app.mount("#app");
