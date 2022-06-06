<template>
  <div>
    <div class="flex h-[65vh] w-full flex-col justify-between bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
      <div class="flex justify-end">
        <RouterLink to="/custom_avatar"><PencilAltIcon class="w-11" /></RouterLink>
      </div>
    </div>
  </div>

  <div class="m-5 text-white">
    <h2 class="font-roboto text-2xl font-bold">Badges</h2>

    <div class="my-5 flex flex-wrap items-center justify-center gap-10">
      <img src="src/assets/BADGES/sport/ultime.png" alt="Badge sport" class="w-12" />
      <img src="src/assets/BADGES/maison/ultime.png" alt="Badge maison" class="w-12" />
      <img src="src/assets/BADGES/social/ultime.png" alt="Badge social" class="w-12" />
      <img src="src/assets/BADGES/gestion/diamond.png" alt="Badge gestion" class="w-12" />
      <img src="src/assets/BADGES/sante/gold.png" alt="Badge santé" class="w-12" />
      <img src="src/assets/BADGES/DIY/argent.png" alt="Badge DIY" class="w-12" />
      <img src="src/assets/BADGES/travail/bronze.png" alt="Badge travail" class="w-12" />
      <img src="src/assets/BADGES/culture/fer.png" alt="Badge culture" class="w-12" />
      <img src="src/assets/BADGES/admin.png" alt="Badge admin" class="w-12" />
    </div>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/outline";

export default {
  name: "AvatarView",
  components: { PencilAltIcon },
  data() {
    return {
      badgeLevel: "bronze",
    };
  },
};
</script>
