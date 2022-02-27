<template>
  <div class="row archiveItems itemsreject">
<archive-item :cat="'rejected'" />
<archive-item :cat="'rejected'" />
<archive-item :cat="'rejected'" />

</div>
</template>

<script>
import archiveItem from './archiveItem.vue'
export default {
  components: { archiveItem },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.row.archiveItems {
  padding: 0px 41px;
}
</style>