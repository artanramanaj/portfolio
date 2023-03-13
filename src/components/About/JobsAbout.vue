<template>
  <div class="container text-white px-2 flex flex-col items-center gap-8">
    <h1>Work Experience</h1>
    <CompanyAbout />
  </div>
</template>

<script>
import CompanyAbout from "./CompanyAbout.vue";
export default {
  name: "jobsAbout",
  components: {
    CompanyAbout,
  },
};
</script>
