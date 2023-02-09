<template>
  <div class="container py-20">
    <div class="flex justify-center gap-4">
      <button class="primary-btn">Vue</button>
      <button class="primary-btn">React</button>
      <button class="primary-btn">Javascript</button>
      <button class="primary-btn">WordPress</button>
    </div>
    <div class="flex flex-col justify-center gap-8 flex-wrap pt-20 md:flex-row">
      <div
        class="even:mt-8 max-w-[20%]"
        v-for="(el, index) in projects.projects"
        :key="index"
      >
        <img :src="el.img" />
      </div>
    </div>
  </div>
</template>

<script>
import { servicesStore } from "../../stores/services.js";

export default {
  name: "contentPortfolio",
  data() {
    return {
      projects: servicesStore(),
    };
  },
};
</script>
