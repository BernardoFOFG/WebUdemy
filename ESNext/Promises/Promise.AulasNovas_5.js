function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao("testando...", 0.9)
  .then((valor) => console.log(`Valor: ${valor}`))
  .catch((err) => console.log(`Erro: ${err}`))
  .finally(() => console.log("Fim!"));
