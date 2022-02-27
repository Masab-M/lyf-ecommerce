<template>
  <div class="row archiveItems">
<ArchiveItem :cat="'live'"/>
<ArchiveItem :cat="'live'"/>
<ArchiveItem :cat="'live'"/>
<ArchiveItem :cat="'live'"/>
<ArchiveItem :cat="'live'"/>
<ArchiveItem :cat="'live'"/>
      </div>
</template>

<script>
import ArchiveItem from "./archiveItem.vue"
export default {
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
</style>