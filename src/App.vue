<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gds">Guide de style</RouterLink>
        <RouterLink to="/qc"> Création de quête</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
