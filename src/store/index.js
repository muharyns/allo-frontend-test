import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    rockets: [],
    loading: false,
    error: false,
  },
  mutations: {
    setRockets(state, rockets) {
      state.rockets = rockets;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, status) {
      state.error = status;
    },
  },
  actions: {
    async fetchRockets({ commit }) {
      commit("setLoading", true);
      commit("setError", false);
      try {
        const { data } = await axios.get(
          "https://api.spacexdata.com/v4/rockets"
        );
        commit("setRockets", data);
      } catch (e) {
        commit("setError", true);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    getRocketById: (state) => (id) =>
      state.rockets.find((rocket) => rocket.id === id),
  },
});
