<template>
<div>
  <AppNavbar  />
<router-view></router-view>
  <AppFooter />

</div>
</template>
<script>
import AppNavbar from "./components/AppNavbar.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  name:"App",
  components : {
    AppNavbar,
    AppFooter
  }
}
</script>
