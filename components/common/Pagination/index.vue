<template>
  <div class="pagination text-center">
    <v-pagination
      color="#333"
      v-model="page"
      :length="totalPage"
      :total-visible="7"
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    totalPage: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page() {
      this.setPage(this.page);
    },
  },
  methods: {
    ...mapActions("filmsStore", ["setPage"]),
    async setPage(page) {
      this.$store.dispatch("filmsStore/setPage", page);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin: 40px auto 0px;
  width: 100%;
}
</style>
