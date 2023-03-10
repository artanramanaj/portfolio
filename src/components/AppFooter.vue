<template>
  <div
    class="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-white px-2 py-20"
  >
    <div class="flex flex-col gap-4">
      <h4>AR</h4>
      <p>Crafting exceptional websites to bring your vision to life.</p>
      <div class="flex gap-4">
        <img src="/img/instagram.svg" alt="" class="w-[24px]" />
        <a href="https://bitbucket.org/ar38263/">
          <img src="/img/bitbucket1.png" alt="" class="w-[24px]" />
        </a>
        <img src="/img/linkedin.svg" alt="" class="w-[24px]" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4>Company</h4>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Resources</h4>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <li>Blog</li>
        <li>FAQ-s</li>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Contact</h4>
      <div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4">
            <img src="/img/envelope.png" alt="email" />
            <p>artan.rramanaj@gmail.com</p>
          </div>
          <div class="flex gap-4">
            <img src="/img/telephone.png" alt="phone" />
            <p>+383 49 565 644</p>
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
