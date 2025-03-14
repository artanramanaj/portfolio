<template>
  <div>
    <div class="relative min-h-40">
      <div class="flex" v-for="(el, index) in progressList" :key="index">
        <div
          class=" m-2 rounded py-[4px] px-2 fade-in text-black font-semibold"
          :style="{
            width: el.progress + '%',
            background: el.color,
            '--progress': el.progress + '%',
          }"
        >
          {{ el.name }} 
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
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "CSS",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Tailwind",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Javascript",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Vue",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "React",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Nuxt.js",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Next.js",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "WordPress",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "WooCommerce",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Node.js",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Express.js",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Php",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "Laravel",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "MySQL",
          progress: 100,
          color: "#00CE79",
        },
        {
          name: "MongoDB",
          progress: 100,
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
