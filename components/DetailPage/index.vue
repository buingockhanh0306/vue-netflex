<template>
  <div>
    <v-container class="container">
      <v-row :align="align" no-gutters>
        <v-col class="col-md-3 px-4">
          <v-img
            alt=""
            src="https://image.tmdb.org/t/p/w500/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg"
          ></v-img>
        </v-col>
        <v-col class="col-md-6 px-4 mb-6">
          <div>
            <h1>Something</h1>
            <p>The loai:</p>
            <p>Ngay phat hanh:</p>
            <p>Thoi luong:</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, non eius ducimus cumque laudantium minus delectus
              dolores, perspiciatis nobis animi, est nesciunt molestias iusto
              nemo? Reiciendis debitis a facere voluptatibus!est nesciunt
              molestias iusto nemo? Reiciendis debitis a facere voluptatibus
            </p>
            <Rating :value="6.5" :size="20" />
            <p>
              (8.715<v-icon color="warning">mdi-star</v-icon>/16711 lượt bình
              chọn)
            </p>
            <span>Link nha phat hanh: <a target="_blank" href="">Link</a></span>
            <div class="detail-button">
              <ButtonIcon
                @onClick="handleWatch(item.id)"
                color="green"
                text="Xem ngay"
                icon="mdi-arrow-right-bold-circle"
              />
              <ButtonIcon
                @onClick="handleWatch(item.id)"
                color="green"
                text="Xem ngay"
                icon="mdi-arrow-right-bold-circle"
              />
            </div>
          </div>
        </v-col>

        <v-col class="col-md-3 px-4 d-none d-md-block">
          <SideBarRight :data="dataTopRate" />
        </v-col>
      </v-row>

      <section class="d-none d-md-block">
        <HeadingSlide text="cac dien vien chinh" />
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
        <Popular :text="textSlide" :dataSlide="dataPopular" />
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
export default {
  components: { Rating, ButtonIcon, HeadingSlide, Popular, SideBarRight },
  props: {
    textSlide: String,
    dataPopular: Array,
    dataTopRate: Array,
  },
  methods: {
    handleClick() {
      this.$router.push(`${this.$route.params.id}/watch`);
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 100px;
}
</style>
