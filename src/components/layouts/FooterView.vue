<template>
  <div class="flex flex-col gap-10 bg-gray-extended-950 text-white">
    <ArquestPremium class="m-5 h-14 w-14" />

    <!--LISTE PAGES-->
    <div class="flex items-center justify-around text-center">
      <div class="w-full px-2 py-1">
        <RouterLink to="/contact"><p>Contact</p></RouterLink>
      </div>
      <div class="w-full border-x-2 px-2 py-1">
        <RouterLink to="/mentionslegales"><p>Mentions légales</p></RouterLink>
      </div>
      <div class="w-full px-2 py-1">
        <RouterLink to="/apropos"><p>À propos</p></RouterLink>
      </div>
    </div>

    <!-- MENTIONS LEGALES : MMI-->
    <div class="flex items-center justify-center gap-3 p-4">
      <MMIIcon class="h-16 w-16" />
      <p class="w-96 text-xs">
        Projet réalisé dans le cadre d’un exercice pédagogique au département
        <a href="http://mmimontbeliard.com/">MMi de Montbéliard</a>
      </p>
    </div>
  </div>
</template>

<script>
import ArquestPremium from "../icons/ArquestPremium.vue";
import MMIIcon from "../icons/MMIIcon.vue";
export default {
  name: "FooterView",
  components: {
    ArquestPremium,
    MMIIcon,
  },
};
</script>

<style></style>
