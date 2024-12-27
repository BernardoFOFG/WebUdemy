// Atualizando um campo diretamente no documento
db.estados.update({ sigla: "SP" }, { $set: { populacao: 8888888888 } });

// Agregando a população total
db.estados.aggregate([
  { $match: { sigla: "SP" } }, // Filtra apenas o estado de SP
  { $unwind: "$cidades" },     // Desfaz o array de cidades
  { $group: { _id: null, populacaoTotal: { $sum: "$cidades.populacao" } } } // Soma as populações
]).forEach(result => {
  // Etapa 2: Atualiza o documento com a sigla "SP"
  db.estados.updateOne(
    { sigla: "SP" },
    { $set: { populacao: result.populacaoTotal } }
  );
});

// Atualizando um campo que já existe valores
// É bom ressaltar que o $set é um operador de atualização que cria um campo se ele não existir, e atualiza o valor se ele existir
db.estados.update({ sigla: 'SP'}, { $push: { cidades: {nome: 'Itaquera', populacao: 2200000 }}});