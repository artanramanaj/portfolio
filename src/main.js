import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeeValidatePlugin from "./includes/validation.js";

import Toaster from "@meforma/vue-toaster";

import "./assets/main.css";
import "./style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeeValidatePlugin);
app.use(Toaster);

app.mount("#app");
