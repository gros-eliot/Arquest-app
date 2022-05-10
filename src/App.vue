<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create_quest"> Créer une quête</RouterLink>
        <RouterLink to="/history">Historique</RouterLink>
        <RouterLink to="/agenda">Agenda</RouterLink>
        <RouterLink to="/avatar">Avatar</RouterLink>
        <RouterLink to="/gifts">Boutique</RouterLink>

        <RouterLink to="/gds">Guide de style</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
