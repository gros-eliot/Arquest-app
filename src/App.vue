<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <h1 class="font-bold text-7xl">Test Arquest</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gds">Guide de style</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
