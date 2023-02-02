<template>
<AppHero />
<AppServices />
</template>

<script>
import AppHero from "../components/AppHero.vue"
import AppServices from "../components/AppServices.vue"
export default {
    name:"Home",
    components: {
        AppHero,
        AppServices
    }
}
</script>