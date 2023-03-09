<template>
  <div class="container py-20">
    <div class="flex justify-center gap-4">
      <button class="primary-btn" @click="allProjects">All</button>
      <button class="primary-btn" @click="filterProjects('vue')">Vue</button>
      <button class="primary-btn" @click="filterProjects('react')">
        React
      </button>
      <button class="primary-btn" @click="filterProjects('javascript')">
        Javascript
      </button>
      <button class="primary-btn" @click="filterProjects('wordpress')">
        WordPress
      </button>
    </div>
    <div class="flex flex-col justify-center gap-8 flex-wrap pt-20 md:flex-row">
      <div
        class="even:mt-8 max-w-[20%]"
        v-for="(el, index) in filteredPorjects"
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
      filteredPorjects: [],
    };
  },
  mounted() {
    this.allProjects();
  },
  methods: {
    allProjects() {
      this.filteredPorjects = this.projects.projects;
    },
    filterProjects(tech) {
      this.filteredPorjects = this.projects.projects.filter(
        (el) => el.tech == tech
      );
    },
  },
};
</script>
