<template>
<section class="relatedItems">
    <h5 class="heading">
        Related Items
    </h5>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <RelatedItems :image="'@/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'"/>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</section>

</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import RelatedItems from './relatedItems.vue';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    RelatedItems
},
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
   breakpoints: {
      // 700px and up
       375: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      425: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      768: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
      1440:{
        itemsToShow: 4.5,
        snapAlign: 'start',
      },
            2560:{
        itemsToShow: 7.5,
        snapAlign: 'start',
      }
    },
  }),
});
</script>
<style scoped>
section.relatedItems {
   padding: 24px 17px;
    margin-bottom: 22px;
    margin-top: 22px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #00000029;
}
section.relatedItems a{
text-decoration: none;
}
section.relatedItems h5 {
    font-weight: 400;
    font-size: 18px;
}
ol.carousel__pagination {
    padding-bottom: 0px;
}
.carousel {
    position: relative;
    border-radius: 0px;
    box-shadow:none;
    width: auto;
    margin: 0px;
}
</style>