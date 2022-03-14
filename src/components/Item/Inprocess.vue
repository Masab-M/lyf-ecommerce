<template>
  <div class="row container-fluid archiveItems">
<ArchiveItem :cat="'pending'" v-if="noitems"/>
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
  margin: 0px;
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

@media (min-width:320px)  { 
  .row.archiveItems {
     padding-left: 29px;
    padding-right: 0px
  }
  
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
    .row.archiveItems {
     padding-left: 29px;
    padding-right: 0px
  }
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
    .row.archiveItems {
      padding: 0px 41px;
  }
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
  
    .row.archiveItems {
      padding: 0px 41px;
  }
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
    .row.archiveItems {
      padding: 0px 41px;
  }
  /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
  
    .row.archiveItems {
      padding: 0px 41px;
  }
  /* hi-res laptops and desktops */ }
</style>