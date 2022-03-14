<template>
<nav-home></nav-home>
<section class="chat">
  <div class="row">
    <div class="col-md-4 rightChat">
      <div :class="{ mobileChat: params.hasOwnProperty('id')}">

       <chats/>
    <router-view name="chat"/>
      </div>
</div>
 
    <div class="col-md-8 leftpad">
    <router-view name="message"/>
    </div>
  </div>
</section>
<footerVue/>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import NavHome from '../components/home/NavHome.vue'
import Chats from '../components/chat/chats.vue'
import Message from '../components/chat/message.vue'
import footerVue from '../components/home/footer.vue'
export default {
  components: { NavHome, Chats, Message ,footerVue},
       setup () {
          const route = useRoute();
          
    const params = computed(() => route.params);
    return {
      params,
    };

    }
}
</script>

<style scoped>

@media (min-width:320px)  { 
  .rightChat{
    border-right: none;
}
  
  .mobileChat{
    display:none;
  }
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
  
  .rightChat{
    border-right: none;
}
  .mobileChat{
    display:none;
  }/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
  .rightChat{
    border-right: 1px solid #00000017;
}
  .mobileChat{
    display:block;
  }/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
  .rightChat{
    border-right: 1px solid #00000017;
}
  .mobileChat{
    display:block;
  }/* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
  .mobileChat{
    display:block;
  }/* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
  .rightChat{
    border-right: 1px solid #00000017;
}
  .mobileChat{
    display:block;
  }/* hi-res laptops and desktops */ }
.leftpad
{
  padding-left: 0px !important;
}
section.chat {
    margin: 27px 21px;
    border-radius: 5px;
    border: 1px solid #70707066;
}

</style>