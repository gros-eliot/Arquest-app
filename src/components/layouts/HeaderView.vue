<template>
  <div class="w-full flex justify-between items-center p-3 bg-gray-900">
    <MenuAlt1Icon class="w-10 h-10 stroke-white" />
    <RouterLink to="/"><ArquestPremium class="w-14 h-14" /></RouterLink>
    <RouterLink to="/social"
      ><img src="../../assets/social.webp" alt="Réseau social" class="w-8"
    /></RouterLink>

    <!--<RouterLink to="/upgrade"><h1 class="text-indigo-500">UP!</h1></RouterLink>-->
  </div>
</template>

<script>
import { MenuAlt1Icon } from "@heroicons/vue/outline";
import ArquestPremium from "../icons/ArquestPremium.vue";

export default {
  name: "HeaderView",
  components: {
    MenuAlt1Icon,
    ArquestPremium,
  },
};
</script>

<style>
</style>