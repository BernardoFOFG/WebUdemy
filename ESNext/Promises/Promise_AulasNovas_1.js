const primeiroElemento = (string) => string[0];
const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]); // Promessa só vai gerar apenas um valor, mas para gerar mais de um valor pode usar array ou objetos
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log);
