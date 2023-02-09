<template>
  <HeroPortfolio />
  <ContentPortfolio />
</template>

<script>
import HeroPortfolio from "../components/Portfolio/HeroPortfolio.vue";
import ContentPortfolio from "../components/Portfolio/ContentPortfolio.vue";
export default {
  name: "portfolio",
  components: {
    HeroPortfolio,
    ContentPortfolio,
  },
};
</script>
