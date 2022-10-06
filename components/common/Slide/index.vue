<template>
  <div>
    <swiper class="swiper" :options="responsiveSwiper">
      <swiper-slide
        class="slide-item"
        v-for="(item, index) in data"
        :key="index"
      >
        <div class="card-image">
          <img
            class="image-poster"
            :src="imageURL + item.backdrop_path"
            alt=""
          />
          <div class="card-title" @click="handleViewDetail(item.id)">
            {{ item.title || item.name }}
          </div>
        </div>
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>
<script>
import { responsiveSwiper } from "../../../constants/responsiveSwiper";
export default {
  name: "MyComponent",
  components: {},
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
  padding: 0 30px;
}
/* .swiper-button-next {
  transform: translateX(20px);
  z-index: 99999999999;
} */
.image-poster {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
.slide-item {
  /* width: 100%; */
}
.card-image {
  box-sizing: border-box;
  background-color: transparent;
  width: 100%;
  border-radius: 10px;
  /* padding: 0 10px; */
}
.card-title {
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
</style>
