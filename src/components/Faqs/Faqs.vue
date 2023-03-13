<template>
  <div class="flex flex-col items-center justify-center text-white">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-2 p-2 mt-4 border-primary-black rounded-lg w-3/4"
      :class="{ 'bg-primary-green text-black ': item.open }"
    >
      <button
        @click="toggle(index)"
        class="w-full py-4 flex justify-between items-center"
      >
        <span class="text-lg">{{ item.title }}</span>
        <span
          :class="{ 'transform rotate-180 text-black': item.open }"
          class="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div v-show="item.open" class="p-4">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    toggle(index) {
      this.items[index].open = !this.items[index].open;
    },
  },
};
</script>

<style>
/* Add Tailwind CSS classes here */
</style>
