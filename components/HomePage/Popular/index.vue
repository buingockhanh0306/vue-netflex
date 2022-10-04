<template>
  <div>
    <div>
      <HeadingSlide :text="text" />
      <Slide :data="dataSlide" />
    </div>
  </div>
</template>

<script>
import Slide from "../../common/Slide/index.vue";
import HeadingSlide from "../../common/Text/HeadingSlide.vue";
import { mockData } from "../../../pages/mockData";
export default {
  components: { Slide, HeadingSlide },
  props: {
    text: String,
    dataSlide: Array,
  },
};
</script>

<style>
.tv-popular {
  margin-top: 40px;
}
</style>
