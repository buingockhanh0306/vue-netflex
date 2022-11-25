<template>
  <div>
    <v-row>
      <v-col class="col-md-8">
        <div class="video-wrapper">
          <iframe
            height="315"
            width="560"
            :src="linkFilm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h1 class="watchTitle">{{ title }}</h1>
        <div class="social-group">
          <a
            :href="linkSocial('facebook', dataSocial.facebook_id)"
            target="_blank"
          >
            <v-chip class="ma-1 social-item" small color="#1773ea" label>
              <v-icon left> mdi-facebook </v-icon>
              Facebook
            </v-chip>
          </a>
          <a
            :href="linkSocial('instagram', dataSocial.instagram_id)"
            target="_blank"
          >
            <v-chip class="ma-1 social-item" small color="#bb3380" label>
              <v-icon left> mdi-instagram </v-icon>
              Instagram
            </v-chip>
          </a>
          <a
            :href="linkSocial('twitter', dataSocial.twitter_id)"
            target="_blank"
          >
            <v-chip class="ma-1 social-item" small color="#1c9cea" label>
              <v-icon left> mdi-twitter </v-icon>
              Twitter
            </v-chip>
          </a>
        </div>
        <h3 class="rate-text">{{ $t("watch.rate") }}</h3>
        <div class="rate-like">
          <Rating :readonly="false" :value="0" :size="18" />
          <LikeAndShare :idFacebook="dataSocial.facebook_id" />
        </div>
      </v-col>
      <v-col class="col-md-4 d-none d-md-block">
        <SideBarRight :data="dataSimilar" />
      </v-col>
    </v-row>
    <Popular :text="$t('watch.filmsTop')" :dataSlide="dataTopRate" />
    <Popular :text="$t('watch.nowPlaying')" :dataSlide="dataNowPlaying" />
  </div>
</template>

<script>
import SideBarRight from "../../components/common/SideBarRight/index.vue";
import Popular from "../HomePage/Popular/index.vue";
import Rating from "../common/Rating/index.vue";
import LikeAndShare from "../common/LikeAndShare/index.vue";

export default {
  components: { SideBarRight, Popular, Rating, LikeAndShare },
  props: {
    title: String,
    dataSimilar: Array,
    linkFilm: String,
    dataTopRate: Array,
    dataNowPlaying: Array,
    dataSocial: Object,
  },
  methods: {
    linkSocial(nameSocial, id) {
      console.log(this.dataSocial);
      return id
        ? `http://${nameSocial}.com/${id}`
        : `http://${nameSocial}.com/`;
    },
  },
};
</script>

<style>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.watchTitle {
  margin: 16px 0;
  /* font-size: 4rem; */
}
.social-group {
  margin-bottom: 20px;
}
.social-group a {
  text-decoration: none;
}
.social-item {
  cursor: pointer;
}
.rate-like {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.rate-text {
  color: var(--hover-color);
  margin: 12px 0;
}
</style>
