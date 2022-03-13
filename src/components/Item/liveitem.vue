<template>
  <div class="row archiveItems itemslive">
<ArchiveItem :cat="'live'" v-if="noitems"/>
<div class="row">
        <div class="col-md-12">
            <div class="notItems">
                <div class="center">
 <img src="../../assets/IMG/Layer2.png" class="img-fluid" alt="">
                <h5>No Ads Posted Yet</h5>
                </div>
               
            </div>
        </div>
    </div>
      </div>
</template>

<script>
import ArchiveItem from "./archiveItem.vue"
export default {
  noitems:true,
    setup() {
        return {};
    },
    components: { ArchiveItem }
}
</script>

<style scoped>
.row.archiveItems {
  padding: 0px 41px;
}
.center {
    margin: auto;
}
.notItems {
    margin: auto;
    display: grid;
    text-align: center;
    height: 100vh;
    border: 1px solid #0000001f;
}
.notItems h5 {
    font-size: 35px;
    margin-top: 50px;
    color: #36363675;
    font-weight: normal;
}

</style>