<script>
import { RouterLink, RouterView } from "vue-router";
import BottomBar from '../components/home/bottomBar.vue'
import NavHome from '../components/home/NavHome.vue'
    export default {
  components: { NavHome, BottomBar },
    }
</script>

<template>
<nav-home></nav-home>
<RouterView/>
<bottom-bar></bottom-bar>
</template>


<style scoped>

</style>