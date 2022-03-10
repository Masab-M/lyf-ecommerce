<template>
<Nav-home/>
<div class="row search">
    <div class="col-md-3">
<SearchFilter/>
    </div>
    <div class="col-md-9">  
        <Searchitems/>
    </div>
</div>
</template>

<script>
import NavHome from '../components/home/NavHome.vue'
import Searchitems from '../components/Search/searchitems.vue'
import SearchFilter from '../components/Search/searchFilter.vue'
export default {
  components: { NavHome, Searchitems, SearchFilter },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.row.search {
    padding: 46px 0px;
}
</style>