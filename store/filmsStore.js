export const actions = {
  async getFilmsDetail({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}`);
  },
  async getFilmsCredits({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/credits`);
  },
  async getFilmsImages({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/images`);
  },
  async getFilmsKeywords({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/keywords`);
  },
  async getFilmsReviews({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/reviews`);
  },
  async getFilmsVideos({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/videos`);
  },
  async getFilmsLatest() {
    return this.$axios.get("/movie/latest");
  },
  async getFilmsNowPlaying() {
    return this.$axios.get(`/movie/now_playing`);
  },
  async getFilmsPopular() {
    return this.$axios.get(`/movie/popular`);
  },
  async getFilmsTopRate() {
    return this.$axios.get(`/movie/top_rated`);
  },
  async getFilmsUpComing() {
    return this.$axios.get(`/movie/upcoming`);
  },
};
