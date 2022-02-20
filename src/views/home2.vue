<template>
<NavHome></NavHome>
<secondary-nav></secondary-nav>
<header-carousel></header-carousel>
<product-archive :archiveHeader="'Top Ads'" ></product-archive>
<product-archive :archiveHeader="'Sponsored Ads'" ></product-archive>
<footer-vue></footer-vue>
</template>

<script>
import NavHome from "../components/home/NavHome.vue";
import HeaderCarousel from '../components/home/headerCarousel.vue'
import ProductArchive from '../components/home/ProductArchive.vue'
import secondaryNav from '../components/home/secondaryNav.vue'
import footerVue from '../components/home/footer.vue'
import '/src/assets/base.css';
    export default {
    components: { NavHome , secondaryNav, HeaderCarousel, ProductArchive, footerVue,}
}
</script>

<style scoped>

</style>