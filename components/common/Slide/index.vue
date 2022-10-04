<template>
  <div>
    <VueSlickCarousel v-bind="responsiveSlide">
      <div class="d-flex justify-center" v-for="item in data" :key="item.id">
        <div class="d-flex justify-center card-image">
          <div>
            <img
              width="100%"
              height="auto"
              :src="imageURL + item.poster_path"
              alt=""
            />
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { responsiveSlide } from "../../../constants/responsiveSlide";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  props: {
    data: Array,
  },

  computed: {
    responsiveSlide() {
      return responsiveSlide;
    },
    imageURL() {
      return process.env.imageURL;
    },
  },
};
</script>
<style>
.card-image {
  background-color: #888;
  width: 100%;
  margin: 0 10px;
  height: 200px;
}
</style>
