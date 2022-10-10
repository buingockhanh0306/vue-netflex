<template>
  <v-carousel
    cycle
    :hide-delimiters="true"
    interval="600000"
    :height="$vuetify.breakpoint.xs ? 200 : 700"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="item in data"
      :key="item.id"
      :src="imageURL + item.backdrop_path"
    >
      <div class="k-text-banner d-none d-md-block">
        <h2 class="k-title">{{ item.title }}</h2>
        <p>{{ item.overview }}</p>
        <div class="group-button">
          <ButtonIcon
            @onClick="handleWatch(item.id)"
            color="green"
            text="Xem ngay"
            icon="mdi-arrow-right-bold-circle"
          />
          <ButtonIcon
            @onClick="handleWatch(item.id)"
            color="red"
            text="Xem Trailer"
            icon="mdi-play-circle"
          />
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import ButtonDefault from "../../common/Button/ButtonDefault.vue";
import ButtonIcon from "../../common/Button/ButtonIcon.vue";
export default {
  props: {
    data: Array,
  },
  computed: {
    imageURL() {
      return process.env.imageURL;
    },
  },
  methods: {
    handleWatch(id) {
      if (this.$route.path === "/") {
        this.$router.push(`/films/${id}/watch`);
      } else {
        this.$router.push(`tv/${id}/watch`);
      }
    },
  },
  components: { ButtonDefault, ButtonIcon },
};
</script>

<style lang="scss">
.v-responsive__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.k-text-banner {
  margin-left: 100px;
  max-width: 50%;
  .k-title {
    font-size: 48px;
  }
}
.group-button {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}
</style>
