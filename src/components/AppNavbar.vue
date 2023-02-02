<template>
    <div class="flex justify-between items-center min-h-[100px]">
        <img src="/img/AR.svg" alt="">
        <ul class="  text-white hidden md:flex">
            <li class="py-2 px-4">
                <a href="#">Home</a>
            </li>
            <li class="py-2 px-4">
                <a href="#">Portfolio</a>
            </li>
            <li class="py-2 px-4">
                <a href="#">Services  </a>
            </li>
            <li class="py-2 px-4">
                <a href="#">Contact</a>
            </li>
            <li class="bg-primary-green py-2 px-4 rounded-lg cursor-pointer hover:bg-primary-grey ">
                <a href="#">Hire Me </a>
            </li>
        </ul>
        <img src="/img/menu.png" alt="" class="flex md:hidden">
    </div>
</template>

<script>
export default {
    name:"nav",
}
</script>