<template>
<div class="ProductArcive">
    <div class="row container-fluid">
        <div class="col-md-12">
            <h2 class="head">{{archiveHeader}}</h2>
        </div>
        <div class="col-md-3 col-sm-6 col-6" v-for="index in 4" :key="index">
            <SingleArchive :image="'./src/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'30/12/2021'" ></SingleArchive>
        </div>
        <div class="col-md-12">
            <div class="loadBtn">
            <a href="#" class="btn loadmore">Load More</a>
            </div>
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

<style scoped>
h2.head {
    font-size: 29px;
    font-weight: normal;
    margin-bottom: 16px;
}

.ProductArcive {
    padding: 50px;
}
.loadBtn {
    text-align: center;
    margin-top: 50px;
}

a.btn.loadmore {
    background-color: var(--secondary);
    color: var(--white);
    font-size: 17px;
    padding: 13px 26px;
}
</style>