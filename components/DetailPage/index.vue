<template>
  <div>
    <v-container class="container">
      <v-row no-gutters>
        <v-col class="col-md-9">
          <v-row>
            <v-col class="col-md-4">
              <v-img
                alt=""
                :src="imageURL + dataDetail.poster_path"
                lazy-src="/images/loadingImage.gif"
              />
              <!-- <v-img alt="" src="/images/back_drop.png"></v-img> -->
            </v-col>
            <v-col class="col-md-8 mb-6">
              <div>
                <h1>{{ dataDetail.title }}</h1>
                <div class="my-4 genres">
                  <span>{{ $t("detail.genres") }}</span>
                  <div class="group-chip">
                    <v-chip
                      small
                      color="blue"
                      v-for="item in genres"
                      :key="item.id"
                      >{{ item.name }}</v-chip
                    >
                  </div>
                </div>
                <p>
                  {{ $t("detail.releaseDate") }}
                  {{ formatDate(dataDetail.release_date) }}
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
          <!-- <Comments :data="dataReview" /> -->
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
                lazy-src="/images/loadingImage.gif"
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
import randomColor from "../../utils/randomColor";
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
      this.$router.push(`${this.$route.params.id}/watch`);
    },
    formatDate(date) {
      return this.$moment(date).format("DD/MM/YYYY");
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
.genres {
  display: flex;
}
.genres span {
  min-width: 80px;
}
.group-chip {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
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
