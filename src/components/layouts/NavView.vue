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

    <RouterLink to="/avatar">
      <img
        src="../../assets/agenda.webp"
        alt="Profil"
        class="border border-white rounded-full active:border-indigo-500"
        id="nav3"
      />
    </RouterLink>
  </div>
</template>

<script>
import { CalendarIcon, HomeIcon, GiftIcon } from "@heroicons/vue/solid";

export default {
  name: "NavView",
  components: {
    HomeIcon,
    CalendarIcon,
    GiftIcon,
  },
};

var navig1 = document.getElementById("nav1");
var navig2 = document.getElementById("nav2");
var navig3 = document.getElementById("nav3");

navig1.addEventListener("click", function () {
  navig1.classList.remove("fill-white");
  navig1.classList.add("fill-indigo-500");
  navig2.classList.add("fill-white");
  navig3.classList.add("fill-white");
});

navig2.addEventListener("click", function () {
  navig2.classList.remove("fill-white");
  navig2.classList.add("fill-indigo-500");
  navig1.classList.add("fill-white");
  navig3.classList.add("fill-white");
});

navig3.addEventListener("click", function () {
  navig3.classList.remove("border-white");
  navig3.classList.add("border-indigo-500");
  navig1.classList.add("fill-white");
  navig2.classList.add("fill-white");
});
</script>

<style>
</style>