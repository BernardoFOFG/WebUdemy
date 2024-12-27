// Desafio de inserir o estado São Paulo na coleção 'estados'

db.estado.insertOne({
  nome: "São Paulo",
})

// Tive que dar um update, pq dei o comando errado antes kk
db.estados.updateOne(
  { _id: ObjectId("676ebb1b170504db11b3b36f") }, // Filtro pelo _id do estado
  {
    $set: {
      sigla: "SP",
      regiao: "Sudeste",
      cidades: [
        { _id: ObjectId(), nome: "São Paulo", populacao: 31213121 },
        { _id: ObjectId(), nome: "Campinas", populacao: 1333333 },
        { _id: ObjectId(), nome: "Santos", populacao: 43330 },
      ],
    },
  }
);
