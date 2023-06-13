<template>
  <div>
    <div class="relative min-h-40">
      <div class="flex" v-for="(el, index) in progressList" :key="index">
        <div
          class="text-white m-2 rounded py-[2px] px-2 fade-in"
          :style="{
            width: el.progress + '%',
            background: el.color,
            '--progress': el.progress + '%',
          }"
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
        {
          name: "Php",
          progress: 90,
          color: "#00CE79",
        },
        {
          name: "MySQL",
          progress: 90,
          color: "#00CE79",
        },
      ],
    };
  },
};
</script>

<style scope>
.fade-in {
  animation: fadeInAnimation 2s ease-in forwards;
}

@keyframes fadeInAnimation {
  0% {
    width: 0%;
    visibility: hidden;
  }
  20% {
    width: 20%;
    visibility: hidden;
  }
  100% {
    width: var(--progress, 100%);
  }
}
</style>
