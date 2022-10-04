<template>
  <v-btn
    :elevation="shadow"
    :loading="isLoading"
    :color="color"
    :disabled="isDisable"
    fab
    @click="onClick()"
  >
    <v-icon dark>{{ icon }}</v-icon></v-btn
  >
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
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
      default: "red",
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
