<template>
<NavHome/>
<section class="wishlist">
<div class="headText">
    <h5>FAVOURITES</h5>
</div>
    <div class="row ">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" v-for="index in 8" :key="index">
          <SingleArchive :image="'@/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'FEB 25'" ></SingleArchive>
    </div>
    <div class="readmore">
        <a href="#" class="btn more">View More</a>
    </div>
    </div>
    </section>
    <Footer/>
</template>
<script>
import Footer from '../components/home/footer.vue'
import SingleArchive from "../components/home/SingleArchive.vue"
import NavHome from '../components/home/NavHome.vue'

export default {
    components: { SingleArchive, Footer, NavHome },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.headText h5 {
    font-size: 15px;
    color: #363636;
    padding: 12px 15px;
    border-bottom: 3px solid #FC6748;
    width: fit-content;
}
.wishlist{
    padding: 45px;
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