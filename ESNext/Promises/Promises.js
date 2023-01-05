function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(2, "Amizade")
  .then((frase) => frase.concat("?!?"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e));
