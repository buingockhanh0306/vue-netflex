<template>
  <div>
    <v-container class="container">
      <v-row :align="align" no-gutters>
        <v-col class="col-md-9">
          <v-row>
            <v-col class="col-md-4">
              <!-- <v-img alt="" :src="imageURL + dataDetail.poster_path"></v-img> -->
              <v-img alt="" src="/images/back_drop.png"></v-img>
            </v-col>
            <v-col class="col-md-8 mb-6">
              <div>
                <h1>{{ dataDetail.title }}</h1>
                <div class="mb-4">
                  Thế loại: <v-chip color="blue">{{ genres }}</v-chip>
                </div>
                <p>Ngày phát hành: {{ dataDetail.release_date }}</p>
                <p>Thời lượng: {{ dataDetail.runtime }} phút</p>
                <p>
                  {{ dataDetail.overview }}
                </p>
                <Rating :value="dataDetail.vote_average" :size="20" />
                <p>
                  ({{ voteAverage }}<v-icon color="warning">mdi-star</v-icon>/{{
                    dataDetail.vote_count
                  }}
                  lượt bình chọn)
                </p>
                <div class="detail-button">
                  <ButtonIcon
                    @onClick="handleWatch(dataDetail.id)"
                    color="green"
                    text="Xem ngay"
                    icon="mdi-arrow-right-bold-circle"
                  />
                  <ButtonIcon
                    @onClick="handleWatch(dataDetail.id)"
                    color="red"
                    text="Xem Trailer"
                    icon="mdi-play-circle"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
          <Comments />
        </v-col>

        <v-col class="col-md-3 px-4 d-none d-md-block">
          <SideBarRight :data="dataTopRate" />
        </v-col>
      </v-row>

      <!-- <section>
        <v-row>
          <Comments />
        </v-row>
      </section> -->

      <section class="d-none d-md-block">
        <HeadingSlide text="Diễn viên chính" />
        <div class="line"></div>
        <v-row>
          <v-col class="col-md-2 px-2" v-for="(item, index) in 6" :key="index">
            <div class="character">
              <v-img
                class="image-character"
                src="/images/back_drop.png"
              ></v-img>
              <p>Something</p>
              <p>Something</p>
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
    dataPopular: Array,
    dataTopRate: Array,
    dataDetail: Object,
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
        return this.dataDetail.genres.map((item) => item.name).join(" / ");
      }
    },
  },
  methods: {
    handleWatch() {
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
