<template>
  <h2 class="heading">{{ text }}</h2>
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
  font-size: 42px;
  margin-top: 40px;
}
</style>
