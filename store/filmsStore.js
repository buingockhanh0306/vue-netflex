export const state = () => ({
  page: 1,
  loading: false,
  totalPagePopular: 0,
  filmsPopular: [],
  filmsTopRate: [],
  filmsUpComing: [],
  filmsRecommendations: [],
  filmDetail: {},
  filmsCredit: [],
  filmsReviews: [],
  filmsVideos: [],
  filmsSimilar: [],
  filmsNowPlaying: [],
  dataSearch: [],
  dataSocial: {},
});
export const actions = {
  setPage({ commit }, payload) {
    commit("SET_PAGE", payload);
  },

  async getFilmsDetail({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(`/movie/${payload.movie_id}`);
    commit("SET_FILM_DETAIL", filmsData.data);
    commit("SET_LOADING", false);
  },

  async getFilmsCredits({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/credits`
    );
    commit("SET_FILMS_CREDIT", filmsData.data.cast.slice(0, 6));
    commit("SET_LOADING", false);
  },

  async getFilmsImages({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/images`);
  },

  async getFilmsKeywords({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/keywords`);
  },

  async getFilmsVideos({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/videos`,
      {
        language: "en",
      }
    );
    commit("SET_FILMS_VIDEO", filmsData.data.results);
    commit("SET_LOADING", false);
  },

  async getFilmsLatest() {
    return this.$axios.get("/movie/latest");
  },

  async getFilmsNowPlaying({ commit }) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(`/movie/now_playing`);
    commit("SET_FILMS_NOW", filmsData.data.results);
    commit("SET_LOADING", false);
  },

  async getFilmsPopular({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/movie/popular?page=${payload.page}`
    );
    commit("SET_FILMS_POPULAR", filmsData.data.results);
    commit("SET_LOADING", false);
  },

  async getFilmsTopRate({ commit }) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(`/movie/top_rated`);
    commit("SET_FILMS_TOP_RATE", filmsData.data.results);
    commit("SET_LOADING", false);
  },

  async getFilmsUpComing({ commit }) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(`/movie/upcoming`);
    commit("SET_FILMS_UP_COMING", filmsData.data.results);
    commit("SET_LOADING", false);
  },

  async getFilmsRecommendations({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/recommendations`
    );
    commit("SET_FILMS_RECOMMENT", filmsData.data.results.slice(0, 10));
    commit("SET_LOADING", false);
  },

  async getFilmsReviews({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = this.$axios.get(`/movie/${payload.movie_id}/reviews`);
    commit("SET_FILMS_REVIEW", filmsData.data.results);
    commit("SET_LOADING", false);
  },

  async getFilmsSimilar({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/similar`
    );
    commit("SET_FILMS_SIMILAR", filmsData.data.results.slice(0, 10));
    commit("SET_LOADING", false);
  },

  async getFilmsSearch({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/search/multi?page=${payload.page}&query=${payload.query}`
    );
    commit("SET_FILMS_SEARCH", filmsData.data.results);
    commit("SET_LOADING", false);
  },
  async getFilmSocial({ commit }, payload) {
    commit("SET_LOADING", true);
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/external_ids`
    );
    commit("SET_FILMS_SOCIAL", filmsData.data);
    commit("SET_LOADING", false);
  },
};

export const mutations = {
  SET_LOADING(state, data) {
    state.loading = data;
  },
  SET_PAGE(state, data) {
    state.page = data;
  },
  SET_FILMS_POPULAR(state, data) {
    state.filmsPopular = data;
  },
  SET_FILMS_TOP_RATE(state, data) {
    state.filmsTopRate = data;
  },
  SET_FILMS_UP_COMING(state, data) {
    state.filmsUpComing = data;
  },
  SET_FILMS_RECOMMENT(state, data) {
    state.filmsRecommendations = data;
  },
  SET_FILMS_REVIEW(state, data) {
    state.filmsReviews = data;
  },
  SET_FILM_DETAIL(state, data) {
    state.filmDetail = data;
  },
  SET_FILMS_CREDIT(state, data) {
    state.filmsCredit = data;
  },
  SET_FILMS_VIDEO(state, data) {
    state.filmsVideos = data;
  },
  SET_FILMS_SIMILAR(state, data) {
    state.filmsSimilar = data;
  },
  SET_FILMS_NOW(state, data) {
    state.filmsNowPlaying = data;
  },
  SET_FILMS_SEARCH(state, data) {
    state.dataSearch = data;
  },
  SET_FILMS_SOCIAL(state, data) {
    state.dataSocial = data;
  },
};
