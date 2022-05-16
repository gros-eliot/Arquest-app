<template>
  <div class="flex w-full items-center justify-between bg-gray-800 p-3">
    <button
      class="relative z-50 text-xl"
      aria-haspopup="true"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
    >
      <MenuAlt1Icon class="h-10 w-10 stroke-white" />
      <span class="sr-only">Menu</span>
    </button>

    <div
      id="menu"
      class="fixed inset-0 translate-x-full bg-red-200 motion-safe:transition-transform motion-safe:duration-1000"
      :class="{ 'translate-x-0': menuOuvert }"
    >
      <ul>
        <li><router-link to="/">Un</router-link></li>
        <li><router-link to="/">Deux</router-link></li>
        <li><router-link to="/">Trois</router-link></li>
      </ul>
    </div>

    <RouterLink to="/"><ArquestPremium class="h-14 w-14" /></RouterLink>
    <RouterLink to="/social"><img src="../../assets/social.webp" alt="Réseau social" class="w-8" /></RouterLink>

    <!--<RouterLink to="/upgrade"><h1 class="text-indigo-500">UP!</h1></RouterLink>-->
  </div>
</template>

<script>
import { MenuAlt1Icon } from "@heroicons/vue/outline";
import ArquestPremium from "../icons/ArquestPremium.vue";

export default {
  name: "HeaderView",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: {
    MenuAlt1Icon,
    ArquestPremium,
  },
};
</script>

<style>
</style>