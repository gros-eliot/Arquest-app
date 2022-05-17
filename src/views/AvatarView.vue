<template>
  <div>
    <div class="flex h-[70vh] w-full flex-col justify-between bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
      <div class="flex justify-end">
        <RouterLink to="/custom"><PencilAltIcon class="w-11" /></RouterLink>
      </div>

      <h3 class="font-roboto text-xl font-bold">Insérer du texte</h3>
    </div>
  </div>

  <div class="m-5 text-white">
    <h2>Badges</h2>

    <div class="my-5 flex flex-wrap items-center justify-center gap-10">
      <img src="../assets/BADGES/sport/ultime.png" alt="Badge 'sport' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/maison/argent.png" alt="Badge 'maison' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/social/gold.png" alt="Badge 'social' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/gestion/bronze.png" alt="Badge 'gestion' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/sante/gold.png" alt="Badge 'sante' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/DIY/fer.png" alt="Badge 'DIY' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/travail/diamond.png" alt="Badge 'travail' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/culture/ultime.png" alt="Badge 'culture' ultime dévérouillé" class="w-12" />
      <img src="../assets/BADGES/admin.png" alt="Badge 'culture' ultime dévérouillé" class="w-12" />
    </div>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/outline";
import BadgeTEST from "../components/icons/BadgesIcon.vue";

export default {
  name: "AvatarView",
  components: { PencilAltIcon, BadgeTEST },
};
</script>
