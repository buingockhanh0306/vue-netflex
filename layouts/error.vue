<template>
  <ErrorPage />
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      otherError: "An error occurred",
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
