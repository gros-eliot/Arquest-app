<template>
  <div class="flex w-full items-center justify-between bg-gray-extended-900 p-3">
    <!--BOUTON MENU-->

    <div>
      <button class="relative z-20 text-xl" aria-controls="menu" :aria-expanded="menuOuvert" id="btnMenu" @click="menuOuvert = !menuOuvert">
        <MenuAlt1Icon class="h-8 w-8 stroke-white" />
        <span class="sr-only">Menu</span>
      </button>
      <!--MENU-->
      <!--CONTAINER MENU : attention, vu que le translate x est à 10rem, 
      on a "ml-56" dans les div pour que les éléments du menu soient affichés 
      (décalés aussi de 10rem)-->

      <div
        id="menu"
        aria-labelledby="btnMenu"
        class="fixed inset-0 z-30 h-full -translate-x-full bg-black text-white motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ '-translate-x-[12rem]': menuOuvert }"
      >
        <!--CONTAINER CROIX + LOGO DE L'APP-->

        <div class="ml-48 flex flex-col">
          <div class="flex items-center justify-between p-3">
            <button
              class="relative z-40 text-xl"
              aria-haspopup="true"
              aria-controls="menu"
              :aria-expanded="menuOuvert"
              @click="menuOuvert = !menuOuvert"
            >
              <XIcon class="h-10 w-10 stroke-white" />
              <span class="sr-only">Menu</span>
            </button>

            <ArquestPremium class="h-12 w-12" />
          </div>

          <!--CONTAINER LISTE DES PAGES-->

          <div>
            <div class="flex justify-center">
              <ul
                class="relative z-40 flex flex-col gap-10 p-10 font-roboto text-2xl font-bold lg:flex-row lg:gap-8"
                @click="menuOuvert = !menuOuvert"
              >
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/avatar">Profil</router-link></li>
                <li><router-link to="/">Historique</router-link></li>
                <li><router-link to="/">Type de quête</router-link></li>
              </ul>
            </div>
            <hr />
            <div class="flex justify-center">
              <ul class="flex flex-col gap-6 p-10 lg:flex-row lg:gap-8" @click="menuOuvert = !menuOuvert">
                <li><router-link to="/mentionslegales">Mentions légales</router-link></li>
                <li><router-link to="/apropos">À Propos</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li class="font-bold text-red-500"><router-link to="/">Déconnexion</router-link></li>
              </ul>
            </div>
          </div>
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
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";
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
    XIcon,
  },
};
</script>

<style></style>
