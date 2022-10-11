<template>
  <v-app dark>
    <v-card>
      <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = true" />

        <!-- <nuxt-link to="/"
          ><v-img
            class="mr-8 poiter"
            max-height="60"
            max-width="120"
            src="/images/logo.png"
        /></nuxt-link> -->

        <div
          class="d-none d-md-block ma-4 poiter"
          v-for="(item, index) in navItem"
          :key="index"
        >
          <nuxt-link class="nav-link white--text" :to="item.navLink">{{
            item.name
          }}</nuxt-link>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 2" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-card>
    <!-- Drawer -->
    <v-navigation-drawer class="drawer" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="">
          <div
            class="d-flex mb-6 align-center justify-space-between header-drawer"
          >
            <v-img
              class="mr-8 poiter"
              max-height="60"
              max-width="120"
              src="/images/logo.png"
            />
            <v-icon @click="drawer = false">mdi-window-close</v-icon>
          </div>
          <v-list-item v-for="(item, index) in navItem" :key="index">
            <nuxt-link
              class="nav-link d-flex align-center white--text"
              :to="item.navLink"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- End Drawer -->
    <Loading v-if="this.$store.state.loading" />
    <v-main class="primary">
      <SlideBanner
        v-if="this.$route.path === '/' || this.$route.path === '/tv'"
        :data="filmsTopRate"
      />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer dark padless class="d-none d-md-block">
      <v-card
        width="100%"
        flat
        tile
        class="primary lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0"> </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SlideBanner from "../components/HomePage/SlideBanner/index.vue";
import Loading from "../components/common/Loading/index.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      filmsTopRate: [],
      drawer: false,
      navItem: [
        { name: "Home", icon: "mdi-home", navLink: "/" },
        { name: "TV Show", icon: "mdi-television-classic", navLink: "/tv" },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  computed: {},
  components: { SlideBanner, Loading },
  async mounted() {
    await this.getFilmsTopRate();
  },
  methods: {
    async getFilmsTopRate() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsTopRate"
      );
      this.filmsTopRate = dataFilms;
    },
  },
};
</script>
<style lang="scss" scoped>
.poiter {
  cursor: pointer;
}
.nav-link {
  text-decoration: none;
}
.drawer {
  z-index: 9999;
}
.header-drawer {
  margin: 10px 10px;
}
</style>
