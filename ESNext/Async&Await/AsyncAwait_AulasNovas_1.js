function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}
/*
esperarPor(2000)
  .then(() => console.log("Executando"))
  .then(esperarPor)
  .then(() => console.log("Executando"))
  .then(esperarPor)
  .then(() => console.log("Executando"));
*/
function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(10);
    }, 2000);
  });
}
async function retornarValorRapido() {
  return 20;
}

async function executar() {
  let valor = await retornarValorRapido();
  await esperarPor(2000);
  console.log(`Valor inical ${valor}`);
  await esperarPor(2000);
  console.log(`Valor meio ${++valor}`);
  await esperarPor(2000);
  console.log(`Valor final ${++valor}`);

  return valor + 5;
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()