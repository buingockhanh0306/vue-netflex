<template>
  <div>
    <HeadingSlide :text="text" />
    <div class="line"></div>
    <Slide :data="dataSlide" />
  </div>
</template>

<script>
import Slide from "../../common/Slide/index.vue";
import HeadingSlide from "../../common/Text/HeadingSlide.vue";
export default {
  components: { Slide, HeadingSlide },
  props: {
    text: String,
    dataSlide: Array,
  },
};
</script>

<style>
.line {
  width: 100%;
  height: 1px;
  margin: 12px 0 40px;
  background-color: #333;
}
</style>
