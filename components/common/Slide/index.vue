<template>
  <div>
    <swiper class="swiper" :options="responsiveSwiper">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <ImageCard
          :imageSrc="imageURL + item.backdrop_path"
          :title="item.title || item.name"
          @onClick="handleViewDetail(item.id)"
        />
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev d-none d-md-block" />
      <div slot="button-next" class="swiper-button-next d-none d-md-block" />
    </swiper>
  </div>
</template>
<script>
import { responsiveSwiper } from "../../../constants/responsiveSwiper";
import ImageCard from "../ImageCard/index.vue";
export default {
  name: "MyComponent",
  components: { ImageCard },
  props: {
    data: Array,
  },
  data() {
    return {
      responsiveSwiper,
    };
  },
  computed: {
    imageURL() {
      return process.env.imageURL;
    },
  },
  methods: {
    handleViewDetail(id) {
      this.$router.push(`/films/${id}`);
    },
  },
};
</script>
<style>
.swiper {
  display: flex;
  /* padding: 0 30px; */
}
/* .swiper-button-next {
  transform: translateX(20px);
  z-index: 99999999999;
} */
</style>
