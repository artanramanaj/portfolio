<template>
<AppHero />
<AppServices />
<AppProjects />
<AppTestimonial/>
</template>

<script>
import AppHero from "../components/AppHero.vue"
import AppServices from "../components/AppServices.vue"
import AppProjects from "../components/AppProjects.vue"
import AppTestimonial from "../components/AppTestimonial.vue"
export default {
    name:"Home",
    components: {
        AppHero,
        AppServices,
        AppProjects,
        AppTestimonial
    }
}
</script>