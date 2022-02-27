<template>
<NavHome/>
<div class="row itemHead">
<div class="col-md-12">
    <h4>My Ads</h4>
</div>
</div>
<item-nav/>
</template>

<script>
import itemNav from '../components/Item/itemNav.vue'
import NavHome from '../components/home/NavHome.vue'
export default {
  components: { itemNav, NavHome },
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