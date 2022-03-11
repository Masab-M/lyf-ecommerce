<template>
  
      <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide">
            <img
              :src="slide.image"
              class="img-fluid regImg"
              :alt="slide.image"
            />
        </Slide>
        <template #addons>
          <div class="createAcc">
            <h5>Create Account</h5>
          </div>
          <Pagination />
        </template>
      </Carousel>
  
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import slide1 from "../../assets/IMG/signup.png";
import slide2 from "../../assets/IMG/signupsliderimage2.png";
import slide3 from "../../assets/IMG/signupsliderimage3.png";
export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [{ image: slide1 }, { image: slide2 }, { image: slide3 }],
      
    };
  },
});
</script>

<style>

img.regImg {
  width: 500px;
}
.carousel__slide {
  padding: 0px;
}
.createAcc h5 {
        font-size: 24px;
    font-weight: 800;
    margin-top: 44px;
    margin-bottom: 40px;
}
.carousel .carousel__next {
  right: 30px !important ;
}
.carousel__prev {
  left: 30px !important;
}
.carousel__pagination-button--active {
    background-color: #000;
}
ol.carousel__pagination {
    padding-bottom: 48px;
}
.carousel {
    position: relative;
    border-radius: 70px;
    box-shadow: 0px 0px 13px #e5e5e5bd;
    width: 500px;
    margin-left: auto;
}

</style>