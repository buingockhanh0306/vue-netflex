<template>
  <div class="sidebar-right">
    <div class="sidebar-right-item" v-for="item in data" :key="item.id">
      <v-img
        max-width="30px"
        height="30px"
        :src="imageURL + item.poster_path"
      ></v-img>
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
  computed: {
    imageURL() {
      return process.env.imageURL;
    },
  },
};
</script>

<style lang="scss">
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
</style>
