<template>
  <v-app dark>
    <v-card class="navbar">
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
          <nuxt-link class="nav-link" :to="item.navLink">{{
            item.name
          }}</nuxt-link>
        </div>
        <button @click="Test()">click</button>
        <v-spacer></v-spacer>

        <input
          type="text"
          class="search"
          ref="inputSearch"
          v-model="inputSearch"
          v-on:keyup.enter="handleSearch()"
          :class="isActive ? 'search-active' : ''"
          :placeholder="$t('home.pleaseEnterValue')"
        />
        <v-btn @click="handleDisplaySearch()" v-if="!isActive" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn @click="handleDisplaySearch()" v-else icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div
          v-show="
            !$vuetify.breakpoint.xs || (!isActive && $vuetify.breakpoint.xs)
          "
        >
          <ChangeLanguages />
        </div>
        <div
          v-show="
            !$vuetify.breakpoint.xs || (!isActive && $vuetify.breakpoint.xs)
          "
        >
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
                <div class="icon-text">
                  <v-icon>mdi-login</v-icon>
                  {{ $t("home.login") }}
                </div>
              </v-list-item>
              <v-list-item @click="() => handleDisplaySignUp()">
                <div class="icon-text">
                  <v-icon>mdi-account-plus-outline</v-icon>
                  {{ $t("home.signup") }}
                </div>
              </v-list-item>
            </v-list>

            <v-list v-else class="menu-login">
              <v-list-item>
                <div class="icon-text">
                  <v-avatar size="28">
                    <img :src="imageURL" alt="John" />
                  </v-avatar>
                  <span style="white-space: nowrap">{{ username }}</span>
                </div>
              </v-list-item>
              <v-list-item @click="() => handleDisplaySignOut()">
                <div class="icon-text">
                  <v-icon>mdi-account-arrow-left-outline</v-icon>
                  {{ $t("home.signout") }}
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <Login />
        <SignUp />
        <ForgotPassword />
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
    <v-main class="primary main">
      <SlideBanner v-if="this.$route.path === '/'" :data="filmsTopRate" />
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
import ForgotPassword from "../components/common/ForgotPassword/index.vue";
import ChangeLanguages from "../components/common/ChangeLanguages/index.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      inputSearch: "",
      isActive: false,
      drawer: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  computed: {
    ...mapState("filmsStore", ["loading", "filmsTopRate"]),
    ...mapState(["user"]),
    ...mapState("authentication", ["requestToken"]),
    imageURL() {
      return this.user?.photoURL || "https://cdn.vuetifyjs.com/images/john.jpg";
    },
    username() {
      return this.user.email || this.user.displayName;
    },
    navItem() {
      return [
        { name: this.$t("home.home"), icon: "mdi-home", navLink: "/" },
        // { name: "Favourite", icon: "mdi-television-classic", navLink: "/" },
      ];
    },
    break() {
      return this.$vuetify.breakpoint;
    },
  },
  components: {
    SlideBanner,
    Loading,
    Login,
    SignUp,
    SnackBar,
    ForgotPassword,
    ChangeLanguages,
  },
  mounted() {
    this.getFilmsTopRate();
  },
  watch: {
    "$i18n.locale"() {
      this.getFilmsTopRate();
    },
  },
  methods: {
    getFilmsTopRate() {
      this.$store.dispatch("filmsStore/getFilmsTopRate");
    },
    handleDisplayLogin() {
      this.$store.commit("SET_DISPLAY_LOGIN", true);
    },
    handleDisplaySignUp() {
      this.$store.commit("SET_DISPLAY_SIGNUP", true);
    },
    handleDisplaySearch() {
      this.isActive = !this.isActive;
      this.inputSearch = "";
      this.$refs.inputSearch.focus();
    },

    async handleSearch() {
      this.isActive = !this.isActive;
      this.$router.push(`/search?q=${this.inputSearch}`);
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
    Test() {
      this.$store.dispatch("authentication/getSessionId", {
        request_token: this.requestToken,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.poiter {
  cursor: pointer;
}
.navbar {
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  right: 0;
}
.nav-link {
  text-decoration: none;
  color: #fff;
}
.nav-link:hover {
  color: var(--hover-color);
}
.drawer {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  // padding-top: 60px;
}
.header-drawer {
  margin: 60px 10px 10px;
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
  width: auto;
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 4px;
}
.icon-text {
  display: flex;
  gap: 10px;
  align-items: center;
}
.main {
  margin-top: 60px;
}
</style>
