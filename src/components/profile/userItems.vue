<template>
<div class="username">
    <h4>Julia Ann</h4>
    <div class="row">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" v-for="index in 8" :key="index">
          <SingleArchive :image="'@/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'FEB 25'" ></SingleArchive>
    </div>
    <div class="readmore">
        <a href="#" class="btn more">View More</a>
    </div>
</div>
</div>
</template>

<script>
import SingleArchive from "../home/SingleArchive.vue"

export default {
    setup () {
        

        return {}
    },
    components: { SingleArchive }

}
</script>

<style scoped>
.username h4 {
    padding: 14px 0px 26px 0px;
    font-weight: 500;
    margin: 0;
    font-size: 32px;
    color: #363636;
}
.readmore a.more {
font-size: 16px;
    padding: 13px 52px;
    background-color: var(--secondary);
    font-weight: bolder;
    color: #fff;
}
.readmore {
text-align: center;
    padding: 20px 26px;
}
</style>