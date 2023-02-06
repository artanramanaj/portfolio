<template>
    <HeroServices />
    <MainServices />
</template>

<script>
import HeroServices from "../components/Services/HeroServices.vue";
import MainServices from "../components/Services/MainServices.vue";
export default {
    name:"servicesViews",
    components : {
        HeroServices,
        MainServices
    }
}
</script>