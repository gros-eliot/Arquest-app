<template>
  <div class="flex justify-between bg-gray-900 p-5 w-full">
    <RouterLink to="/"
      ><HomeIcon id="nav1" class="h-10 w-10 fill-white active:fill-indigo-500"
    /></RouterLink>

    <RouterLink to="/agenda"
      ><CalendarIcon
        id="nav2"
        class="h-10 w-10 fill-white active:fill-indigo-500"
    /></RouterLink>

    <RouterLink to="/gifts">
      <GiftIcon id="nav3" class="h-10 w-10 fill-white active:fill-indigo-500" />
    </RouterLink>

    <RouterLink to="/avatar">
      <img
        src="../../assets/agenda.webp"
        alt="Profil"
        class="border rounded-full active:border-indigo-500 active:border"
        id="nav4"
      />
    </RouterLink>
  </div>

  <!--var navig1 = document.getElementById("nav1");
var navig2 = document.getElementById("nav2");
var navig3 = document.getElementById("nav3");
var navig4 = document.getElementById("nav4");

navig1.addEventListener("click", function () {
  navig1.classList.remove("fill-white");
  navig1.classList.add("fill-indigo-500");
});-->
</template>

<script>
import { CalendarIcon, HomeIcon, GiftIcon } from "@heroicons/vue/solid";

export default {
  name: "App",
  components: {
    HomeIcon,
    CalendarIcon,
    GiftIcon,
  },
};
</script>

<style>
</style>