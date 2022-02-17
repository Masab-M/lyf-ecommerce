<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/home/Nav.vue";
import TopBar from "./components/home/topBar.vue";
</script>

<template>
  <TopBar></TopBar>
  <Nav></Nav>
  <RouterView/>
</template>

<style>

</style>
