<template>
  <div class="flex w-full justify-between bg-gray-900 p-5 text-white">
    <RouterLink to="/">
      <div class="flex items-center justify-center gap-3">
        <HomeIcon id="nav1" class="h-8 w-8 fill-white active:fill-indigo-500" />
        <p class="hidden font-press-start-2p active:text-indigo-500 md:block">Accueil</p>
      </div>
    </RouterLink>

    <RouterLink to="/agenda">
      <div class="flex items-center justify-center gap-3">
        <CalendarIcon id="nav2" class="h-8 w-8 fill-white active:fill-indigo-500" />
        <p class="hidden font-press-start-2p active:text-indigo-500 md:block">Agenda</p>
      </div>
    </RouterLink>

    <RouterLink to="/avatar">
      <div class="flex items-center justify-center gap-3">
        <img
          src="../../assets/agenda.webp"
          alt="Profil"
          class="h-8 w-8 rounded-full border border-white active:border-indigo-500"
          id="nav3"
        />
        <p class="hidden font-press-start-2p active:text-indigo-500 md:block">Profil</p>
      </div>
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
  props: {
    activated: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
