<template>
  <div class="card-image">
    <v-img class="image-poster" src="/images/back_drop.png" alt="">
      <div class="icon-play">
        <v-icon @click="onClick()" color="#fff" x-large>mdi-play</v-icon>
      </div>
    </v-img>
    <div class="card-title" @click="onClick()">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imageSrc: String,
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.image-poster {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  position: relative;
}
.image-poster:hover .icon-play {
  opacity: 1;
}
.slide-item {
  /* width: 100%; */
}
.card-image {
  background-color: transparent;
  width: 100%;
  border-radius: 10px;
}

.icon-play {
  position: absolute;
  left: 50%;
  background-color: orange;
  border-radius: 50%;
  transform: translateX(-50%);
  opacity: 0;
}
.card-title {
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
</style>
