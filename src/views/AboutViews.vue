<template>
  <HeroAbout />
  <SkillsAbout />
  <JobsAbout/>
</template>

<script>
import HeroAbout from "../components/About/HeroAbout.vue";
import SkillsAbout from "../components/About/SkillsAbout.vue";
import JobsAbout from "../components/About/JobsAbout.vue";
export default {
  name: "aboutViews",
  components: {
    HeroAbout,
    SkillsAbout,
    JobsAbout
  },
};
</script>

