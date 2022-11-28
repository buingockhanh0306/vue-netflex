<template>
  <v-btn
    :elevation="shadow"
    :loading="isLoading"
    :color="color"
    :disabled="isDisable"
    @click="onClick()"
    :small="$vuetify.breakpoint.xs"
    >{{ text }}<v-icon right dark> {{ icon }} </v-icon></v-btn
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
    icon: {
      type: String,
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
