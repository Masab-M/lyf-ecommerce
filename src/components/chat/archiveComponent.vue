<template>
<div class="chats" >
<SingleChat/>

</div>

</template>

<script>
import SingleChat from './singleChat.vue'

export default {
  components: { SingleChat },

    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.chats {
   height: calc(100vh - 400px);
    overflow: auto;
}
</style>