<template>
<NavHome/>
<pageVue/>
<ProductGrid/>
<Footer/>
</template>

<script>
import NavHome from "../components/home/NavHome.vue";
import pageVue from "../components/company/page.vue";
import ProductGrid from "../components/company/productGrid.vue";
import Footer from "../components/home/footer.vue";
export default {
    setup() {
        return {};
    },
    components: { NavHome, pageVue, ProductGrid, Footer }
}
</script>

<style scoped>

</style>