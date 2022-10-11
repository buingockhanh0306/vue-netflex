<template>
  <v-list class="list-comments" two-line>
    <h2>Bình luận</h2>
    <template v-for="(item, index) in data">
      <v-subheader v-if="item.id" :key="item.id">
        {{ item.author }}
      </v-subheader>
      <!-- <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider> -->
      <v-list-item v-else>
        <v-list-item-avatar>
          <img :src="item.author_details.avatar_path" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="item.author"></v-list-item-title>
          <v-list-item-subtitle v-html="item.author"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
.list-comments {
  margin-top: 60px;
  width: 100% !important;
  background-color: #212121 !important;
}
</style>
