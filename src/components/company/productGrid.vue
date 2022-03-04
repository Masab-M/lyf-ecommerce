<template>
<div class="row container-fluid">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" v-for="index in 10" :key="index">
          <SingleArchive :image="'@/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'FEB 25'" ></SingleArchive>
    </div>
    <div class="readmore">
        <a href="#" class="btn more">View More</a>
    </div>
</div>
</template>

<script>
import SingleArchive from "../home/SingleArchive.vue"
export default {
    setup() {
        return {};
    },
    components: { SingleArchive }
}
</script>

<style scoped>

.readmore {
    text-align: center;
    padding: 90px 26px 56px 26px;
}

.readmore a.more {
font-size: 18px;
    padding: 13px 52px;
    background-color: var(--secondary);
    font-weight: bolder;
    color: #fff;
}
</style>