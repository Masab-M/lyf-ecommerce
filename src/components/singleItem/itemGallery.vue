<template>
<section class="Gallery">
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :navigation="true"
        :loop="true"
 :modules="modules" :thumbs="{ swiper: thumbsSwiper }" 
    class="mySwiper2"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    >
  </swiper>
  <swiper
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
      :modules="modules"
    watch-slides-progress="true"
    @swiper="setThumbsSwiper"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    >
  </swiper>
</section>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"


// import required modules
import {FreeMode,Navigation,Thumbs} from 'swiper';
 import { ref } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

  const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
      return {
        Thumbs,
        thumbsSwiper,
        setThumbsSwiper,
              modules: [FreeMode,Navigation,Thumbs],

      };
  }
}
</script>

<style>
.swiper-button-next, .swiper-rtl .swiper-button-prev{
  right: 0px;
  left: auto;
}
.swiper-button-prev, .swiper-rtl .swiper-button-next{
left: 0px;
    right: auto;
}
.swiper-button-next, .swiper-button-prev
{
  height: 100% !important;
  background: rgba(0, 0, 0, 0.438) !important;
    top: 22px !important;
    width: 50px;

}
.swiper-button-next:after, .swiper-button-prev:after{
  font-size: 28px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}


.swiper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide 
{
  /* width:866px !important; */
  height: 500px !important;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 500px;
  width: 100%;
}

.mySwiper {
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 60px !important;
  height: 60px !important;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-thumbs{
  padding: 13px 30px;
}
section.Gallery {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #00000029;
}

</style>