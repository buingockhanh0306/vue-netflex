<template>
  <star-rating
    :padding="2"
    :show-rating="false"
    :increment="0.5"
    :max-rating="10"
    :rating="value"
    :read-only="readonly"
    inactive-color="#808080"
    active-color="#ffd700"
    :star-size="size"
  >
  </star-rating>
</template>

<script>
// import StarRating from "vue-star-rating";
export default {
  props: {
    size: {
      type: Number,
      default: 64,
    },
    value: {
      type: Number,
      default: 6,
    },
    readonly: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="scss">
.star-rating {
  padding: 30px;
}
</style>
