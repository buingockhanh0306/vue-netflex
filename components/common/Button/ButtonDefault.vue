<template>
  <v-btn
    :elevation="shadow"
    :loading="isLoading"
    :color="color"
    :disabled="isDisable"
    @click="onClick()"
    >{{ text }}</v-btn
  >
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Click",
    },
    shadow: {
      type: String,
      default: "2",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "buttonColor",
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style></style>
