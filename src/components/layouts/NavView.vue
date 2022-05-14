<template>
  <div class="flex justify-between bg-gray-900 p-5 w-full">
    <RouterLink to="/"
      ><HomeIcon class="h-10 w-10 fill-white active:fill-indigo-500"
    /></RouterLink>

    <RouterLink to="/agenda"
      ><CalendarIcon class="h-10 w-10 fill-white"
    /></RouterLink>

    <RouterLink to="/gifts">
      <GiftIcon class="h-10 w-10 fill-white" />
    </RouterLink>

    <RouterLink to="/avatar">
      <img
        src="../../assets/agenda.webp"
        alt="Profil"
        class="border border-white rounded-full"
      />
    </RouterLink>
  </div>
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