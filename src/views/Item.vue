<template>
<NavHome/>
<div class="row container-fluid itemHead">
<div class="col-md-12">
    <h4>My Ads</h4>
</div>
</div>
<item-nav/>
<Footer/>
</template>

<script>
import itemNav from '../components/Item/itemNav.vue'
import NavHome from '../components/home/NavHome.vue'
import Footer from '../components/home/footer.vue'
export default {
  components: { itemNav, NavHome, Footer },
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>
.row.itemHead {
    padding: 38px 41px;
}

.row.itemHead h4 {
    font-size: 22px;
    font-weight: 500;
}

</style>