<template>
  <div>
    <v-row>
      <v-col class="col-md-8">
        <iframe
          width="100%"
          height="100%"
          :src="linkFilm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col class="col-md-4">
        <SideBarRight :data="dataSimilar" />
      </v-col>
    </v-row>
    <Popular text="Phim Top" :dataSlide="dataTopRate" />
    <Popular text="Now Playing" :dataSlide="dataNowPlaying" />
  </div>
</template>

<script>
import SideBarRight from "../../components/common/SideBarRight/index.vue";
import Popular from "../HomePage/Popular/index.vue";

export default {
  components: { SideBarRight, Popular },
  props: {
    dataSimilar: Array,
    linkFilm: String,
    dataTopRate: Array,
    dataNowPlaying: Array,
  },
};
</script>

<style></style>
