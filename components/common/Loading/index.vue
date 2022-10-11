<template>
  <div class="loading">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  background-color: #000;
  z-index: 99999999999999;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
