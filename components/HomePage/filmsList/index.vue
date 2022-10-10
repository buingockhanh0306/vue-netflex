<template>
  <div>
    <HeadingSlide :text="text" />
    <div class="line"></div>
    <div class="d-flex flex-wrap py-4 justify-space-between">
      <div class="list-item" v-for="item in data" :key="item.id">
        <ImageCard
          imageSrc="/images/back_drop.png"
          :title="item.title"
          @onClick="handleViewDetail(item.id)"
        />
      </div>
      <Pagination :totalPage="totalPage" />
    </div>
  </div>
</template>

<script>
import HeadingSlide from "../../common/Text/HeadingSlide.vue";
import ImageCard from "../../common/ImageCard/index.vue";
import Pagination from "../../common/Pagination/index.vue";
export default {
  props: {
    text: String,
    data: Array,
    totalPage: Number,
  },
  methods: {
    handleViewDetail(id) {
      this.$router.push(`/films/${id}`);
    },
  },
  components: { HeadingSlide, ImageCard, Pagination },
};
</script>

<style>
.list-item {
  max-width: 25%;
  padding: 0 10px;
}
@media only screen and (max-width: 768px) {
  .list-item {
    max-width: 50%;
    padding: 0 5px;
  }
}
</style>
