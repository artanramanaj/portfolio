<template>
  <div
    class="container flex flex-col justify-center items-center gap-4 text-white px-2 py-20"
  >
    <p class="text-primary-green">Portfolio</p>
    <h1 class="text-white">Projects</h1>
    <div
      class="w-full flex flex-col md:flex-row flex-wrap gap-4 justify-between"
    >
      <div
        class="flex flex-col flex-wrap gap-4 justify-center items-center px-4 py-8 rounded-md w-full md:w-[30%] min-h-[300px]"
        v-for="(el, index) in mainProjects"
        :key="index"
      >
        <div class="flex flex-col items-center justify-center w-full p-4 gap-2">
          <img :src="el.img" alt="logo" />
          <h4>{{ el.name }}</h4>
          <p class="text-center">{{ el.description }}</p>
          <router-link to="/">
            <button class="bg-transparent">More details</button>
          </router-link>
        </div>
      </div>
    </div>
    <button class="primary-btn" @click="checkPorjects" v-if="hideBtn">
      Load More
    </button>
    <button class="primary-btn" @click="showLess" v-if="!hideBtn">
      Show Less
    </button>
  </div>
</template>

<script>
import { servicesStore } from "../stores/services.js";
export default {
  name: "projects",
  data() {
    return {
      projects: servicesStore(),
      mainProjects: [],
      shownProjects: 3,
      hideBtn: true,
    };
  },
  mounted() {
    this.mainProjects = this.projects.projects.slice(0, this.shownProjects);
    this.hideBtn = true;
  },
  methods: {
    checkPorjects() {
      this.mainProjects = this.projects.projects.slice(
        0,
        this.projects.projects.length
      );
      this.hideBtn = false;
    },
    showLess() {
      this.mainProjects = this.projects.projects.slice(0, this.shownProjects);
      this.hideBtn = true;
    },
  },
};
</script>
