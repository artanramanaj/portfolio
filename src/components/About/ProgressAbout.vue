<template>
  <div>
    <div class="relative min-h-40">
      <div class="flex" v-for="(el, index) in progressList" :key="index">
        <div
          class="text-white m-2 rounded p-2"
          :style="{ width: el.progress + '%', background: el.color }"
        >
          {{ el.name }} {{ el.progress + "%" }}
        </div>
      </div>
    </div>
    <BoxAbout />
  </div>
</template>

<script>
import BoxAbout from "./BoxAbout.vue";
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
      ],
    };
  },
  components: {
    BoxAbout,
  },
};
</script>
