<template>
  <div>
    <div class="relative min-h-40">
      <div class="flex" v-for="(el, index) in progressList" :key="index">
        <div
          class="text-white m-2 rounded p-1"
          :style="{ width: el.progress + '%', background: el.color }"
        >
          {{ el.name }} {{ el.progress + "%" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressAbout",
  data() {
    return {
      progressList: [
        {
          name: "HTML",
          progress: 95,
          color: "#00CE79",
        },
        {
          name: "CSS",
          progress: 95,
          color: "#00CE79",
        },
        {
          name: "Tailwind",
          progress: 95,
          color: "#00CE79",
        },
        {
          name: "Javascript",
          progress: 90,
          color: "#00CE79",
        },
        {
          name: "Vue",
          progress: 95,
          color: "#00CE79",
        },
        {
          name: "React",
          progress: 90,
          color: "#00CE79",
        },
        {
          name: "WordPress",
          progress: 95,
          color: "#00CE79",
        },
        {
          name: "Elementor",
          progress: 95,
          color: "#00CE79",
        },
        {
          name: "WooCommerce",
          progress: 90,
          color: "#00CE79",
        },
        {
          name: "Shopify",
          progress: 80,
          color: "#00CE79",
        },
        {
          name: "Figma",
          progress: 90,
          color: "#00CE79",
        },
      ],
    };
  },
};
</script>
