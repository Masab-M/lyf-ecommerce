<template>
<div class="ProductArcive">
    <div class="row">
        <div class="col-md-12">
            <h2 class="head">{{archiveHeader}}</h2>
        </div>
        <div class="col-md-3 col-sm-6 col-6" v-for="index in 4" :key="index">
            <SingleArchive :image="'/src/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'30/12/2021'" ></SingleArchive>
        </div>
        <div class="col-md-">
            <a href="#" class="btn loadmore">Load More</a>
        </div>
    </div>
</div>
</template>

<script>
import SingleArchive from "./SingleArchive.vue";
    export default {
    props: ["archiveHeader"],
    components: { SingleArchive },
}
</script>

<style lang="scss" scoped>

</style>