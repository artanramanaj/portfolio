<template>
  <div
    class="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-white px-2 py-20"
  >
    <div class="flex flex-col gap-4">
      <h4>AR</h4>
      <p>Crafting exceptional websites to bring your vision to life.</p>
      <div class="flex gap-4">
        <a href="https://github.com/artanramanaj" target="_blank">
          <img src="/img/github-logo.png" alt="" class="w-[24px]" />
        </a>

        <a href="https://www.linkedin.com/in/artan-ramanaj/" target="_blank">
          <img src="/img/primary-linkedin.svg" alt="" class="w-[24px]" />
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4>Navigation</h4>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About me</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Knowledge Base</h4>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <li>
          <router-link to="/faqs"> FAQ-s </router-link>
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Contact</h4>
      <div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4">
            <img src="/img/envelope.png" alt="email" />

            <p>
              <a href="mailto:artan.rramanaj@gmail.com"
                >artan.rramanaj@gmail.com</a
              >
            </p>
          </div>
          <div class="flex gap-4">
            <img src="/img/telephone.png" alt="phone" />
            <p><a href="tel:+38349-565-644"> +383 49 565 644</a></p>
          </div>
          <div class="flex gap-4">
            <img src="/img/location.png" alt="location" />
            <p>Pristina, Kosovo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appfooter",
};
</script>
