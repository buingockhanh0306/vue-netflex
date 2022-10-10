<template>
  <div class="sidebar-right">
    <div class="sidebar-right-item" v-for="item in data" :key="item.id">
      <v-img max-width="30px" height="30px" src="/images/logo.png"></v-img>
      <div class="mt-4">
        <h5>{{ item.title }}</h5>
        <Rating :value="item.vote_average" :size="12" />
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "../Rating/index.vue";
export default {
  props: {
    data: Array,
  },
  components: { Rating },
};
</script>

<style>
.sidebar-right-item {
  display: flex;
  align-items: center;
  gap: 20px;
}
.character {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-character {
  height: 200px;
  border-radius: 10px;
}
@media only screen and (max-width: 768px) {
  .detail-button {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    height: 100px;
    position: fixed;
    background-color: #212121;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
}
</style>
