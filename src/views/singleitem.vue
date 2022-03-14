<template>
<NavHome/>
<SecondaryNav/>
<div class="row singleItem container-fluid details1">
<div class="col-md-8">
<ItemGallery/>
<DetailItem/>
</div>
<div class="col-md-4">
<MainDetail/>
<SellerInfo/>
<Location/>
</div>
</div>
<div class="row container-fluid details2">
  <div class="col-md-8">
<ItemDesc/>
<Related/>  
</div>
<div class="col-md-4">
<Rating/>
<PostReview/>
</div>
</div>
<Footer/>
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
import Rating from '../components/singleItem/rating.vue'
import PostReview from '../components/singleItem/postReview.vue'
import Footer from '../components/home/footer.vue'
import Location from '../components/singleItem/location.vue'
export default {
  components: { NavHome, SecondaryNav, ItemGallery, DetailItem, MainDetail, SellerInfo, CompanyLocation, ItemDesc, Related, Rating, PostReview, Footer, Location },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.row.singleItem.container-fluid {
    margin: 25px 0px;
}
.details2,.details2{
  margin: 0;
}
.details2{
  margin-bottom:20px;
}
</style>