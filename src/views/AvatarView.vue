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
      <img :src="'../assets/BADGES/sport/' + badgeLevel + '.png'" alt="Badge sport" class="w-12" />
      <img :src="'../assets/BADGES/maison/' + badgeLevel + '.png'" alt="Badge maison" class="w-12" />
      <img :src="'../assets/BADGES/social/' + badgeLevel + '.png'" alt="Badge social" class="w-12" />
      <img :src="'../assets/BADGES/gestion/' + badgeLevel + '.png'" alt="Badge gestion" class="w-12" />
      <img :src="'../assets/BADGES/sante/' + badgeLevel + '.png'" alt="Badge santé" class="w-12" />
      <img :src="'../assets/BADGES/DIY/' + badgeLevel + '.png'" alt="Badge DIY" class="w-12" />
      <img :src="'../assets/BADGES/travail/' + badgeLevel + '.png'" alt="Badge travail" class="w-12" />
      <img :src="'../assets/BADGES/culture/' + badgeLevel + '.png'" alt="Badge culture" class="w-12" />
      <img :src="'../assets/BADGES/' + badgeLevel + '.png'" alt="Badge administrateur" class="w-12" />
    </div>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/outline";
import BadgeTEST from "../components/icons/BadgesIcon.vue";

export default {
  name: "AvatarView",
  components: { PencilAltIcon, BadgeTEST },
  data() {
    return {
      badgeLevel: "bronze",
    };
  },
};
</script>
