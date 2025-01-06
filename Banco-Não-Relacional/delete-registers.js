// Removendo registros diretamente
db.estados.remove({ sigla: 'AM'})

// Removendo os estados que não tem população
db.estados.remove({ populacao: { $exists: false } }, 1);

// Desafio do video: Atualizar a populaçao do estado do Rio de Janeiro

// Primerio criando o estado do Rio de Janeiro sem a população
db.estados.insertOne({
  nome: "Rio de Janeiro",
  sigla: 'RJ',
  cidades: [
    { _id: ObjectId(), nome: "Rio de Janeiro", populacao: 6718903 },
    { _id: ObjectId(), nome: "Niterói", populacao: 487562 },
    { _id: ObjectId(), nome: "Duque de Caxias", populacao: 920480 },
  ],
})

db.estados.updateOne({ sigla: 'RJ'}, { $set: { populacao: 1670000}})

// Removendo estados que tem população menor que 1000000
db.estados.remove({ populacao: { $lt: 1000000 } }, 1);
