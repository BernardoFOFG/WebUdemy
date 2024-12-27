// Inserindo dados numa collection não existente, o MongoDB cria a collection automaticamente.
db.estados.insert({
	nome: "Acre",
	sigla: "AC",
	regiao: "Norte",
});

// Inserindo um dado no banco de dadaos
db.estados.insertOne({
	nome: "Alagoas",
	sigla: "AL",
	regiao: "Nordeste",
	populacao: "3322000",
});

// Inserindo vários dados no banco de dados
db.estados.insertMany([
  { nome: "Amapá", sigla: "AP", regiao: "Norte" },
  { nome: "Amazonas", sigla: "AM", regiao: "Norte" },
  { nome: "Bahia", sigla: "BA", regiao: "Nordeste" },
])
