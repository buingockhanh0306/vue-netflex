<template>
  <iframe
    :src="link"
    width="160"
    height="24"
    style="border: none; overflow: hidden"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
</template>

<script>
export default {
  data() {
    return {
      link: "",
    };
  },
  props: {
    idFacebook: String,
  },
  watch: {
    idFacebook() {
      const href = this.idFacebook
        ? encodeURIComponent(`http://facebook.com/${this.idFacebook}`)
        : encodeURIComponent(`https://www.facebook.com/benokaOfficial`);
      this.link = `https://www.facebook.com/plugins/like.php?href=${href}&layout=button_count&action=like&size=small&share=true&height=35&appId=785811806206122`;
    },
  },
  //   methods: {
  //     facebookPageLink(id) {
  //       const href = id
  //         ? encodeURIComponent(`http://facebook.com/${id}`)
  //         : encodeURIComponent(`https://www.facebook.com/benokaOfficial`);
  //       return `https://www.facebook.com/plugins/like.php?href=${href}&width=450&layout=button_count&action=like&size=small&share=true&height=35&appId=785811806206122`;
  //     },
  //   },
};
</script>

<style></style>
