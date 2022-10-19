<template>
  <v-app dark>
    <v-card>
      <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = true" />

        <!-- <nuxt-link v-if="!isActive" to="/"
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

        <input
          type="text"
          class="search"
          :class="isActive ? 'search-active' : ''"
          placeholder="Please enter value..."
        />
        <v-btn v-if="!isActive" icon>
          <v-icon @click="isActive = !isActive">mdi-magnify</v-icon>
        </v-btn>
        <v-btn v-else icon>
          <v-icon @click="isActive = !isActive">mdi-close</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-avatar size="28">
                <img :src="imageURL" alt="John" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list v-if="!user" class="menu-login">
            <v-list-item @click="() => handleDisplayLogin()">
              Login
            </v-list-item>
            <v-list-item @click="() => handleDisplaySignUp()">
              Sign up
            </v-list-item>
          </v-list>

          <v-list v-else class="menu-login">
            <v-list-item>
              {{ user.email || user.displayName }}
            </v-list-item>
            <v-list-item @click="() => handleDisplaySignOut()">
              Sign out
            </v-list-item>
          </v-list>
        </v-menu>
        <Login />
        <SignUp />
        <SnackBar />
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
    <Loading v-if="loading" />
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
import Login from "../components/common/Login/index.vue";
import SignUp from "../components/common/SignUp/index.vue";
import SnackBar from "../components/common/SnackBar/index.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      isActive: false,
      filmsTopRate: [],
      drawer: false,
      navItem: [
        { name: "Home", icon: "mdi-home", navLink: "/" },
        { name: "TV Show", icon: "mdi-television-classic", navLink: "/tv" },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  computed: {
    ...mapState(["user", "loading"]),
    imageURL() {
      return this.user?.photoURL || "https://cdn.vuetifyjs.com/images/john.jpg";
    },
  },
  components: { SlideBanner, Loading, Login, SignUp, SnackBar },
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
    handleDisplayLogin() {
      this.$store.commit("SET_DISPLAY_LOGIN", true);
    },
    handleDisplaySignUp() {
      this.$store.commit("SET_DISPLAY_SIGNUP", true);
    },
    async handleDisplaySignOut() {
      await this.$fire.auth
        .signOut()
        .then(() => {
          this.$store.commit("SET_USER", undefined);
          localStorage.removeItem("user");
        })
        .catch((error) => {
          // An error happened.
        });
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
.search {
  background-color: #333;
  width: 0;
  transition: all ease 0.4s;
}
.search-active {
  border-radius: 10px;
  height: 30px;
  color: #fff;
  outline: none;
  padding: 4px 10px;
  width: 400px;
}
.menu-login {
  background-color: #333;
  min-width: 140px;
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 4px;
}
</style>
