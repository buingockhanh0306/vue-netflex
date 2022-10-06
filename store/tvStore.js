export const actions = {
  async getTVDetail({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}`);
  },
  async getTVCredits({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/credits`);
  },
  async getTVImages({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/images`);
  },
  async getTVKeywords({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/keywords`);
  },
  async getTVReviews({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/reviews`);
  },
  async getTVVideos({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/videos`);
  },
  async getTVLatest() {
    return this.$axios.get("/tv/latest");
  },
  async getTVNowPlaying() {
    return this.$axios.get(`/tv/now_playing`);
  },
  async getTVPopular() {
    const TVData = await this.$axios.get(`/tv/popular`);
    return TVData.data.results;
  },
  async getTVTopRate() {
    return this.$axios.get(`/tv/top_rated`);
  },
  async getTVUpComing() {
    return this.$axios.get(`/tv/upcoming`);
  },
};
