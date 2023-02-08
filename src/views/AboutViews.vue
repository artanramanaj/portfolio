<template>
  <HeroAbout />
  <SkillsAbout />
</template>

<script>
import HeroAbout from "../components/About/HeroAbout.vue";
import SkillsAbout from "../components/About/SkillsAbout.vue";
export default {
  name: "aboutViews",
  components: {
    HeroAbout,
    SkillsAbout,
  },
};
</script>

