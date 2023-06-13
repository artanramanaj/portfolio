<template>
  <div
    class="container w-full flex flex-col lg:items-center lg:justify-between lg:flex-row py-10 px-2 overflow-hidden"
  >
    <div
      class="w-full flex flex-col items-center lg:items-start justify-between gap-4 text-white text-center lg:text-left lg:w-1/2 fade1"
    >
      <h1>
        Hi I’m Artan Ramanaj I am a
        <h1 class="inline text-secondary-green">Frontend developer</h1>
        and a UI/UX Designer.
      </h1>
      <p>
        With expertise in front-end and UI/UX technologies, I design and develop
        custom websites that enhance your online presence and drive business
        growth. Let's build something great together!
      </p>
      <router-link to="/contact">
        <button class="primary-btn">Contact Me</button>
      </router-link>
    </div>
    <img
      src="/img/newmainbackground.svg"
      alt="background"
      class="md:w-1/2 md:h-1/2 w-full full fade2"
    />
  </div>
</template>

<script>
export default {
  name: "herosection",
};
</script>

<style scoped>
.fade1 {
  animation: fadeinAnimation1 1s ease-out forwards;
}
.fade2 {
  animation: fadeinAnimation2 1s ease-out forwards;
}

@keyframes fadeinAnimation1 {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes fadeinAnimation2 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
