<script setup>
import { RouterLink, RouterView } from "vue-router";
import { AcademicCapIcon, AnnotationIcon } from "@heroicons/vue/solid";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create_quest"> Créer</RouterLink>
        <RouterLink to="/history">Historique</RouterLink>
        <RouterLink to="/agenda">Agenda</RouterLink>
        <RouterLink to="/avatar">Avatar</RouterLink>
        <RouterLink to="/gifts">Shop</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/mentionslegales">Mentions légales</RouterLink>

        <RouterLink to="/gds">GDS</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
div {
  font-family: "Roboto", sans-serif;
}
h1,
h4 {
  font-family: "Press Start 2P";
}
</style>
