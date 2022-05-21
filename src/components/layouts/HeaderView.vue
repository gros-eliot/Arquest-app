<template>
  <div class="flex w-full items-center justify-between bg-gray-extended-900 p-3">
    <!--BOUTON MENU-->

    <div>
      <button
        class="relative z-50 text-xl"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <MenuAlt1Icon class="h-8 w-8 stroke-white" />
        <span class="sr-only">Menu</span>
      </button>
      <!--MENU-->
      <div
        id="menu"
        class="fixed inset-0 top-0 z-30 -translate-x-full bg-black text-white motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ '-translate-x-[10rem]': menuOuvert }"
      >
        <div class="flex justify-end">
          <ul class="relative z-50 p-3">
            <li><router-link to="/">Profil</router-link></li>
            <li><router-link to="/">Historique</router-link></li>
            <li><router-link to="/">Type de quête</router-link></li>
            <li><router-link to="/">À Propos</router-link></li>
            <li><router-link to="/">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!--FIN MENU-->

    <div>
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
    </div>

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
