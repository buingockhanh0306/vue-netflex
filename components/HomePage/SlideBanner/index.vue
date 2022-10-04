<template>
  <v-carousel
    cycle
    interval="600000"
    :height="$vuetify.breakpoint.xs ? 200 : 700"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <div class="k-text-banner d-none d-md-block">
        <h2 class="k-title">{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import ButtonDefault from "../../common/Button/ButtonDefault.vue";
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "Title demo 1",
          description:
            "Vue.js is an amazing JavaScript framework which you can use to build highly engaging user interfaces and single page applications. You can join my bestselling course on Vue.js, here on Udemy, if you want to learn more about this awesome framework!",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Title demo 2",
          description:
            "Vue.js is an amazing JavaScript framework which you can use to build highly engaging user interfaces and single page applications. You can join my bestselling course on Vue.js, here on Udemy, if you want to learn more about this awesome framework!",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Title demo 3",
          description: "description 3",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "Title demo 4",
          description: "description 4",
        },
      ],
      model: 0,
    };
  },
  methods: {
    getPath() {
      console.log(this.$route);
    },
  },
  components: { ButtonDefault },
};
</script>

<style lang="scss">
.v-responsive__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.k-text-banner {
  margin-left: 100px;
  max-width: 50%;
  .k-title {
    font-size: 48px;
  }
}
</style>
