<template>
  <h2 class="heading text-sm-h5 text-md-h2">{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.heading {
  font-weight: 500;
  margin-top: 40px;
}
</style>
