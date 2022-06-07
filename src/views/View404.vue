<template>
  <h2 class="m-10 text-center text-4xl font-bold text-indigo-300">Erreur 404</h2>
  <div class="flex items-center justify-center">
    <form action="https://duckduckgo.com/" method="GET" x-data="{ q:'', }" x-on:submit="q = q + ' site:mmimontbeliard.com'">
      <input class="m-5 rounded-xl p-1" type="text" id="q" name="q" x-model="q" />
      <button class="text-lg text-white hover:font-bold" type="submit">Recherchez</button>
    </form>
  </div>

  <p class="m-12 text-center font-roboto text-xl text-white">Créez une nouvelle quête !</p>

  <RouterLink to="/create_quest" class="m-10 flex items-center justify-center">
    <div class="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-300">
      <PlusIcon class="h-10 w-10 fill-black" />
    </div>
  </RouterLink>
</template>

<script>
import BoutonBorder from "../components/boutons/BoutonBorder.vue";
import Quest from "../components/Quest.vue";
import { PlusIcon } from "@heroicons/vue/solid";
export default {
  name: "Home",
  components: {
    Quest,
    PlusIcon,
  },
};
</script>
