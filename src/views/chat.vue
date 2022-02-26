<template>
<nav-home></nav-home>
<section class="chat">
  <div class="row">
  <chats/>
    <div class="col-md-7">

    </div>
  </div>
</section>
</template>

<script>
import NavHome from '../components/home/NavHome.vue'
import Chats from '../components/chat/chats.vue'
export default {
  components: { NavHome, Chats },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>