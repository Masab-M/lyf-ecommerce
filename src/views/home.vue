<template>
<nav1></nav1>
<secondary-nav></secondary-nav>
<header-carousel></header-carousel>
<product-archive :archiveHeader="'Top Ads'" ></product-archive>
<product-archive :archiveHeader="'Sponsored Ads'" ></product-archive>
<product-archive :archiveHeader="'Recent Ads'" ></product-archive>
<footer-vue></footer-vue>
</template>

<script>
import HeaderCarousel from '../components/home/headerCarousel.vue'
import ProductArchive from '../components/home/ProductArchive.vue'
import secondaryNav from '../components/home/secondaryNav.vue'
import footerVue from '../components/home/footer.vue'
import '/src/assets/base.css';
import Nav1 from '../components/home/Nav.vue';
    export default {
  components: { secondaryNav, HeaderCarousel, ProductArchive, footerVue, Nav1 },
       
    }
</script>

<style scoped>
</style>