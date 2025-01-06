// Buscandos os dados para ter acesso ao ObjectId
db.estados.find().pretty();

// Inserindo a empresa a uma cidade
db.empresas.insert({
  nome: "Bradesco",
  estadoId: ObjectId("676ebc9d170504db11b3b373"),
});

db.empresas.insert({ nome: "Itaú", estadoId: ObjectId("676ee6f0170504db11b3b37e") });

// Eu queria inserir a cidade Itaquera, mas eu esqueci de inserir o ObjectId da cidade
db.estados.updateOne(
  { "sigla": "SP", "cidades.nome": "Itaquera" }, // Encontrando o estado e a cidade
  { $set: { "cidades.$._id": ObjectId() } } // Alterando o _id da cidade "Itaquera"
);
