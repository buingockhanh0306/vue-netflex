<template>
  <div>
    <div class="heading-search">
      Kết quả tìm kiếm cho:
      <span class="search-value">{{ this.$route.query.q }}</span>
    </div>
    <v-divider></v-divider>
    <div class="d-flex flex-wrap py-4 justify-space-between">
      <div class="list-item" v-for="item in dataSearch" :key="item.id">
        <ImageCard
          :imageSrc="imageURL + item.backdrop_path"
          :title="item.title"
          @onClick="handleViewDetail(item.id)"
        />
      </div>
      <Pagination :totalPage="totalPage" />
    </div>
  </div>
</template>

<script>
import ImageCard from "../../components/common/ImageCard";
export default {
  components: { ImageCard },
  data: () => ({
    dataSearch: [],
  }),
  async mounted() {
    await this.getFilmsSearch();
  },
  computed: {
    imageURL() {
      return process.env.imageURL;
    },
  },
  methods: {
    async getFilmsSearch() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsSearch",
        {
          page: 1,
          query: encodeURIComponent(this.$route.query.q),
        }
      );
      this.dataSearch = dataFilms;
    },
    handleViewDetail(id) {
      if (this.$route.path === "/tv") {
        this.$router.push(`/tv/${id}`);
      } else {
        this.$router.push(`/films/${id}`);
      }
    },
  },
};
</script>

<style scoped>
.heading-search {
  font-size: 2.4rem;
  color: var(--text-color);
  margin: 50px 0;
}
.search-value {
  color: var(--secondary-color);
}
</style>
