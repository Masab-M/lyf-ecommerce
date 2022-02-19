<template>
<div class="row">
    <div class="col-md-12">
 <Carousel :items-to-show="1" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
          <img :src="slide.image" class="img-fluid" :alt="slide.image">
          </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
    </div>
</div>
  
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import  slide1 from '../../assets/IMG/headeSlide.png';
    export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,       
    Slide,
    Navigation,
  },
  data() {
  return {
    slides: [{ image: slide1 }, { image: slide1 }]
  }
}
});
</script>

<style>

.carousel__item {
  min-height: 200px;
  width: 100%;
  margin:auto;
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel .carousel__next{
  right:30px !important ;
}
.carousel__prev{
  left:30px !important;
}

</style>