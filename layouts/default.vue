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

      <!-- Drawer -->
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="(item, index) in navItem" :key="index">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <!-- End Drawer -->
    </v-card>
    <v-main>
      <Slide v-if="this.$route.path === '/'" />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Slide from "../components/HomePage/Slide/index.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      navItem: [
        { name: "Home", icon: "mdi-home", navLink: "/" },
        { name: "Account", icon: "mdi-account", navLink: "/account" },
      ],
    };
  },
  components: { Slide },
};
</script>
<style lang="scss" scoped>
.poiter {
  cursor: pointer;
}
.nav-link {
  text-decoration: none;
}
</style>
