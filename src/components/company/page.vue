<template>
<div class="coverimage">
    <img src="../../assets/IMG/MaskGroup41.png" class="img-fluid" alt="">
</div>
<div class="row container-fluid page">
    <div class="col-md-8">
<CompanyDetails/>

    </div>
<div class="col-md-4">
<MetaData/>
</div>
</div>
</template>

<script>
import CompanyDetails from "./companyDetails.vue"
import MetaData from "./metaData.vue";
export default {
    setup() {
        return {};
    },
    components: { CompanyDetails, MetaData }
}
</script>

<style scoped>
.coverimage {
    position: absolute;
    z-index: -1;
}
.coverimage img {
    width: 100vw;
}

.row.page {
margin-top: 23%;
    padding-right: 0px;
}

</style>