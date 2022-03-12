<template>
<div class="ProductArcive">
<div class="row">
     <div class="col-md-12">
            <h2 class="head">{{archiveHeader}}</h2>
        </div>
    <div class="col-md-12">
        <div class="row">
 <Carousel  :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="index in 10" :key="index">
        
      <div class="carousel__item">
          <SingleArchive :image="'@/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'FEB 25'" ></SingleArchive>
    </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  </div>
  <div class="col-md-12">
            <div class="loadBtn">
            <a href="#" class="btn loadmore">Load More</a>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import  slide1 from '../../assets/IMG/headeSlide.png';
import SingleArchive from './SingleArchive.vue';
    export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
    SingleArchive
},
props: ["archiveHeader"],
  data() {
  return {
    slides: [{ image: slide1 }, { image: slide1 }],
     settings: {
      itemsToShow: 1,
      snapAlign: 'start',
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
        itemsToShow: 4.2,
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
  }
}
});
</script>

<style scoped>
/* img.headerCarousel{
  width: 100vw !important;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  margin:auto 10px;
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
} */
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
h2.head {
    font-size: 29px;
    font-weight: normal;
    margin-bottom: 16px;
}

.ProductArcive {
    padding: 50px;
}
.ProductArcive a {
    text-decoration: none;
}
.loadBtn {
    text-align: center;
    margin-top: 50px;
}

a.btn.loadmore {
    background-color: var(--secondary);
    color: var(--white);
    font-size: 17px;
    padding: 13px 26px;
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