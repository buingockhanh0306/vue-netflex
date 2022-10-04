<template>
  <div>
    <div>
      <HeadingSlide text="Films Popular" />
      <Slide />
    </div>
    <div class="tv-popular">
      <HeadingSlide text="TV Popular" />
      <Slide />
    </div>
  </div>
</template>

<script>
import Slide from "../../common/Slide/index.vue";
import HeadingSlide from "../../common/Text/HeadingSlide.vue";
export default { components: { Slide, HeadingSlide } };
</script>

<style>
.tv-popular {
  margin-top: 40px;
}
</style>
