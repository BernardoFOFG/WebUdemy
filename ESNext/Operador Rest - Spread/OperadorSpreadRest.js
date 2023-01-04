// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

//usar spread com objeto
const funcionario = {
  nome: "Maria",
  salario: 12348.99,
};
const clone = {
  ativo: true,
  ...funcionario,
};
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Geovanna"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);
