<template>
  <div
    class="container px-2 py-20 flex flex-col items-center min-h-[80vh] justify-center gap-8"
  >
    <div class="flex">
      <h1 class="text-white">About Me</h1>
    </div>

    <div
      class="w-full flex flex-col items-center md:items-start justify-between gap-8 md:flex-row"
    >
      <AboutText class="w-full md:w-1/2" />
      <progress-about class="w-full md:w-1/2"></progress-about>
    </div>
  </div>
</template>

<script>
import AboutText from "./AboutText.vue";
import ProgressAbout from "./ProgressAbout.vue";
export default {
  name: "skillAbout",
  components: {
    AboutText,
    ProgressAbout,
  },
};
</script>
