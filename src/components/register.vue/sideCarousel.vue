<template>
  <div class="row">
    <div class="col-md-12">
      <Carousel :autoplay="2000" :items-to-show="1" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide">
          <div class="carousel__item">
            <img
              :src="slide.image"
              class="img-fluid regImg"
              :alt="slide.image"
            />
          </div>
        </Slide>
        <template #addons>
          <div class="createAcc">
            <h5>Create Account</h5>
          </div>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
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
.carousel__item img.regImg {
  width: 400px;
}
.carousel__slide {
  padding: 0px;
}
.createAcc h5 {
    font-size: 24px;
    font-weight: 800;
    margin-top: 44px;
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
</style>