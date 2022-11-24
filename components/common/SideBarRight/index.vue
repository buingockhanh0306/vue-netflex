<template>
  <div class="sidebar-right">
    <h3>{{ $t("watch.filmsSimilar") }}</h3>
    <div
      @click="handleWatch(item.id)"
      class="sidebar-right-item mt-4"
      v-for="item in data"
      :key="item.id"
    >
      <v-img
        height="50px"
        max-width="40px"
        :src="imageURL + item.poster_path"
      ></v-img>
      <div>
        <h5 class="film-name">{{ item.title }}</h5>
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
  methods: {
    handleWatch(id) {
      this.$router.push(`/films/${id}`);
    },
  },
};
</script>

<style lang="scss">
.sidebar-right-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.sidebar-right-item:hover .film-name {
  color: var(--hover-color);
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
