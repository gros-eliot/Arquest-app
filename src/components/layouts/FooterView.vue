<template>
  <div class="bg-gray-900 text-white flex flex-col gap-10">
    <ArquestPremium class="m-5 w-14 h-14" />
    <div class="grid grid-cols-3 text-center">
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
      <RouterLink to="/mentionslegales"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/apropos"><p>À propos</p></RouterLink>
    </div>
    <div class="flex justify-start items-center gap-3 p-4">
      <MMIIcon class="w-16 h-16" />
      <p>
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

<style>
</style>