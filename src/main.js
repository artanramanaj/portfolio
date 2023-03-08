import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeeValidatePlugin from "./includes/validation.js";

import "./assets/main.css";
import "./style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeeValidatePlugin);

app.mount("#app");
