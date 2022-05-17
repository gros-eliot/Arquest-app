<template>
  <div class="m-4 leading-loose text-indigo-500">
    <form class="flex max-w-xl flex-col gap-4 rounded p-10 shadow-xl">
      <div class="rounded-sm border-2 border-indigo-500">
        <input
          class="w-full rounded bg-transparent px-5 py-1 text-indigo-500"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Nom"
          aria-label="Nom"
        />
      </div>

      <div class="rounded-sm border-2 border-indigo-500">
        <input
          class="w-full rounded bg-transparent px-5 py-1 text-indigo-500"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Prénom"
          aria-label="Prénom"
        />
      </div>

      <div class="rounded-sm border-2 border-indigo-500">
        <input
          class="w-full rounded bg-transparent px-5 py-1 text-indigo-500"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Adresse Mail"
          aria-label="Adresse Mail"
        />
      </div>

      <div class="rounded-sm border-2 border-indigo-500">
        <input
          class="w-full rounded bg-transparent px-5 py-1 text-indigo-500"
          id="cus_name"
          name="cus_name"
          type="password"
          required=""
          placeholder="Mot de passe"
          aria-label="Mot de passe"
        />
      </div>

      <div class="rounded-sm border-2 border-indigo-500">
        <input
          class="w-full rounded bg-transparent px-5 py-1 text-indigo-500"
          id="cus_name"
          name="cus_name"
          type="password"
          required=""
          placeholder="Validation du Mot de Passe"
          aria-label="Validation du Mot de Passe"
        />
      </div>

      <BoutonBlue>Valider</BoutonBlue>

      <div class=""></div>
      <div class="mt-4"></div>
    </form>
  </div>
</template>

<script>
import BoutonBlue from "../boutons/BoutonBlue.vue";
export default {
  components: {
    BoutonBlue,
  },
};
</script>

<style scoped>
</style>