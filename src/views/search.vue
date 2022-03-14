<template>
<Nav-home/>
<div class="row search container-fluid"> 
    <div class="col-md-3">
<SearchFilter/>
    </div>
    <div class="col-md-9">  
        <Searchitems/>
    </div>
</div>
<Footer/>
</template>

<script>
import NavHome from '../components/home/NavHome.vue'
import Searchitems from '../components/Search/searchitems.vue'
import SearchFilter from '../components/Search/searchFilter.vue'
import Footer from '../components/home/footer.vue'
export default {
  components: { NavHome, Searchitems, SearchFilter, Footer },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.row.search {
   padding: 46px 0px;
    margin: 0px;
}
</style>