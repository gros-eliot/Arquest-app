<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-5 rounded-xl border-4 border-indigo-500 bg-black">
      <div class="flex items-end justify-end">
        <BoutonClose class="" />
      </div>
      <h2 class="m-1 w-10/12 text-center font-roboto text-2xl font-bold uppercase text-white">IL EST TROP TÔT POUR VALIDER !</h2>

      <BontonBlue>Fermer</BontonBlue>
    </div>
  </div>
</template>

<script>
import BoutonClose from "../boutons/BoutonClose.vue";
import BontonBlue from "../boutons/BoutonBlue.vue";
export default {
  components: { BoutonClose, BontonBlue },
};
</script>
