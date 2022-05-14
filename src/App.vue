<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "./components/layouts/HeaderView.vue";
import GuideStyle from "./views/GuideStyle.vue";
</script>



<template>
  <header>
    <!--  LA SOLUTION :   <HeaderView class="fixed" />-->
    <div class="wrapper">
      <nav class="flex justify-between">
        GuideStyle <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/crHeaderVieweate_quest"> Créer</RouterLink>
        <RouterLink to="/history">Historique</RouterLink>
        <RouterLink to="/agenda">Agenda</RouterLink>
        <RouterLink to="/avatar">Avatar</RouterLink>
        <RouterLink to="/gifts">Shop</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/mentionslegales">Mentions légales</RouterLink>

        <RouterLink to="/gds">GDS</RouterLink>

        <RouterLink to="/social">SM</RouterLink>
      </nav>
    </div>
  </header>
  <main class="pt-20">
    <guide-style />
  </main>
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
