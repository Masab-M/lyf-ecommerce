<template>
<NavHome/>
<SecondaryNav/>
<div class="row singleItem container-fluid">
<div class="col-md-8">
<ItemGallery/>
<DetailItem/>
</div>
<div class="col-md-4">
<MainDetail/>
<SellerInfo/>
<CompanyLocation/>
</div>
</div>
<div class="row container-fluid">
  <div class="col-md-8">
<ItemDesc/>
<Related/>  
</div>
<div class="col-md-4">

</div>
</div>
</template>

<script>
import NavHome from '../components/home/NavHome.vue'
import SecondaryNav from '../components/home/secondaryNav.vue'
import ItemGallery from '../components/singleItem/itemGallery.vue'
import DetailItem from '../components/singleItem/detailItem.vue'
import MainDetail from '../components/singleItem/mainDetail.vue'
import SellerInfo from '../components/singleItem/sellerInfo.vue'
import CompanyLocation from '../components/company/companyLocation.vue'
import ItemDesc from '../components/singleItem/itemDesc.vue'
import Related from '../components/singleItem/related.vue'
export default {
  components: { NavHome, SecondaryNav, ItemGallery, DetailItem, MainDetail, SellerInfo, CompanyLocation, ItemDesc, Related },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>