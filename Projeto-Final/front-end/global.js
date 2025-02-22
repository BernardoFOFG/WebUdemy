import Vue from "vue";
export const baseApiUrl = "http://localhost:3000";

export function showError(e) {
  // Função para verificar o tipo da mensagem do erro.
  if (e && e.response && e.response.data) {
    Vue.toasted.global.defaultError({ msg: e.response.data });
  } else if (typeof e === "string") {
    Vue.toasted.global.defaultError({ msg: e });
  } else {
    Vue.toasted;
  }
}

export default { baseApiUrl, showError };
