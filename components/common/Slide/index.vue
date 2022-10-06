<template>
  <div>
    <swiper :options="responsiveSwiper">
      <swiper-slide class="swiper" v-for="(item, index) in data" :key="index"
        ><div class="card-image">{{ item.title }}</div>
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
};
</script>
<style>
.swiper {
  display: flex;
  gap: 20px;
}
.swiper-button-next {
  transform: translateX(20px);
  z-index: 99999999999;
}
.card-image {
  background-color: #888;
  width: 100%;
  margin: 0 10px;
  height: 200px;
}
</style>
