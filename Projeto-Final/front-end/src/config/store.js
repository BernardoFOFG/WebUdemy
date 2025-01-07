import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// Esse arquivo servirá como um gerenciador de estados entre componentes
export default new Vuex.Store({
  state: {
    isMenuVisible: true,
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible;
      } else {
        state.isMenuVisible = isVisible;
      }
    },
  },
});
