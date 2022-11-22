<template>
  <div>
    <v-container class="container">
      <v-row :align="align" no-gutters>
        <v-col class="col-md-9">
          <v-row>
            <v-col class="col-md-4">
              <v-img alt="" :src="imageURL + dataDetail.poster_path"></v-img>
              <!-- <v-img alt="" src="/images/back_drop.png"></v-img> -->
            </v-col>
            <v-col class="col-md-8 mb-6">
              <div>
                <h1>{{ dataDetail.title }}</h1>
                <div class="my-4">
                  {{ $t("detail.genres") }}
                  <v-chip
                    class="mx-1"
                    small
                    color="blue"
                    v-for="item in genres"
                    :key="item.id"
                    >{{ item.name }}</v-chip
                  >
                </div>
                <p>
                  {{ $t("detail.releaseDate") }} {{ dataDetail.release_date }}
                </p>
                <p>
                  {{ $t("detail.runtime") }} {{ dataDetail.runtime }}
                  {{ $t("detail.minutes") }}
                </p>
                <p>
                  {{ dataDetail.overview }}
                </p>
                <Rating :value="dataDetail.vote_average" :size="20" />
                <p>
                  ({{ voteAverage }}<v-icon color="warning">mdi-star</v-icon>/{{
                    dataDetail.vote_count
                  }}
                  {{ $t("detail.votes") }})
                </p>
                <div class="detail-button">
                  <ButtonIcon
                    @onClick="handleWatch(dataDetail.id)"
                    color="green"
                    :text="$t('detail.watchNow')"
                    icon="mdi-arrow-right-bold-circle"
                  />
                  <ButtonIcon
                    @onClick="handleWatch(dataDetail.id)"
                    color="red"
                    :text="$t('detail.watchTrailer')"
                    icon="mdi-play-circle"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
          <Comments :data="dataReview" />
        </v-col>

        <v-col class="col-md-3 px-4 d-none d-md-block">
          <SideBarRight :data="dataRecommendations" />
        </v-col>
      </v-row>

      <!-- <section>
        <v-row>
          <Comments />
        </v-row>
      </section> -->

      <section class="d-none d-md-block">
        <HeadingSlide :text="$t('detail.mainActor')" />
        <div class="line"></div>
        <v-row>
          <v-col
            class="col-md-2 px-2"
            v-for="item in dataCredit"
            :key="item.id"
          >
            <div class="character">
              <v-img
                class="image-character"
                :src="imageURL + item.profile_path"
              ></v-img>
              <div class="name-character">
                <span>{{ item.name }}</span>
                <h4>{{ item.character }}</h4>
              </div>
            </div>
          </v-col>
        </v-row>
      </section>

      <section>
        <Popular :text="textSlide" :dataSlide="dataTopRate" />
      </section>
    </v-container>
  </div>
</template>

<script>
import Rating from "../common/Rating/index.vue";
import ButtonIcon from "../common/Button/ButtonIcon.vue";
import HeadingSlide from "../common/Text/HeadingSlide.vue";
import Popular from "../HomePage/Popular/index.vue";
import SideBarRight from "../common/SideBarRight/index.vue";
import Comments from "../common/Comments/index.vue";
export default {
  components: {
    Rating,
    ButtonIcon,
    HeadingSlide,
    Popular,
    SideBarRight,
    Comments,
  },
  props: {
    textSlide: String,
    dataRecommendations: Array,
    dataReview: Array,
    dataTopRate: Array,
    dataDetail: Object,
    dataCredit: Array,
  },
  data() {
    return {
      colors: [
        "blue",
        "green",
        "red",
        "orange",
        "brown",
        "purple",
        "yellow",
        "black",
      ],
    };
  },
  computed: {
    imageURL() {
      return process.env.imageURL;
    },
    voteAverage() {
      if (this.dataDetail.vote_average) {
        return this.dataDetail.vote_average.toFixed(1);
      } else return 0;
    },
    genres() {
      if (this.dataDetail.genres) {
        return this.dataDetail.genres;
      }
    },
  },
  methods: {
    handleWatch() {
      localStorage.setItem("watchTitle", this.dataDetail.title);
      this.$router.push(`${this.$route.params.id}/watch`);
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 100px;
}
.detail-button {
  display: flex;
  gap: 30px;
}
.name-character {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  .detail-button {
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
