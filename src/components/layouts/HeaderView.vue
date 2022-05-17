<template>
  <div class="flex w-full items-center justify-between bg-gray-800 p-3">
    <!--BOUTON MENU-->

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

    <!--MENU-->
    <div
      id="menu"
      class="fixed inset-0 top-0 z-50 translate-x-full bg-black text-white motion-safe:transition-transform motion-safe:duration-1000"
      :class="{ 'translate-x-52': menuOuvert }"
    >
      <ul class="relative z-50 p-3">
        <li><router-link to="/">Un</router-link></li>
        <li><router-link to="/">Deux</router-link></li>
        <li><router-link to="/">Trois</router-link></li>
      </ul>
    </div>
    <!--FIN MENU-->

    <RouterLink to="/">
      <div>
        <!--ESSAIE D'UN LOGO RESPONSIVE : Compliqué car logo long trop gros-->
        <!--class="block md:hidden"-->
        <ArquestPremium class="h-14 w-14" />
      </div>

      <!--ESSAIE D'UN LOGO RESPONSIVE : Compliqué car logo long trop gros-->

      <!--
      <div class="hidden md:block">
        <ArquestPremiumLong />
      </div>-->
    </RouterLink>
    <RouterLink to="/social"><img src="../../assets/social.webp" alt="Réseau social" class="w-8" /></RouterLink>
  </div>
</template>

<script>
import { MenuAlt1Icon } from "@heroicons/vue/outline";
import ArquestPremium from "../icons/ArquestPremium.vue";
import ArquestPremiumLong from "../icons/ArquestPremiumLong.vue";

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
    ArquestPremiumLong,
  },
};
</script>

<style></style>
