<template>
<div  :class="{ mobileChat: !params.hasOwnProperty('id')}">
<div class="slctChat">
<div class="img">
    <img src="../../assets/IMG/chat.png" alt="">
</div>
<p>Select A Chat To View Conversation</p>
</div>

</div>

</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
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


.img {
    text-align: center;
}
.mobileChat {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media (min-width:320px)  { 
  .mobileChat{
    display:none;
  }
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
  .mobileChat{
    display:none;
  }/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 

    .mobileChat{
    display:none;
  }
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 

  .mobileChat{
    display:flex;
  }/* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
    .mobileChat{
    display:flex;
  }/* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
      
  .mobileChat{
    display:flex;
  }/* hi-res laptops and desktops */ }
</style>