// Consulta de agregação com project
db.estados.aggregate([{ $project: { nome: 1, "cidades.nome": 1, _id: 0 } }]);

// Consulta de agregação com mais estagios de pipeline de agregação
// Nesse caso é bom lembrar que, "$" é necessário colocar pois ele tá pegando o valor do campo que está sendo passado, e quando é a chave do objeto, não é necessário colocar o "$"
db.estados.aggregate([
	{
		$project: { populacao: { $sum: "$cidades.populacao" }, nome: 1, _id: 0 },
	},
	{
		$group: { _id: null, populacaoTotal: { $sum: "$populacao" } },
	},
	{
		$project: { _id: 0, populacaoTotal: 1 },
	},
]);

// Consulta com a verificação de um campo
db.estados.aggregate([
	{
		$match: {
			// Where
			"cidades.populacao": { $exists: true }, // Filtra apenas os estados onde existe o campo 'populacao' em alguma cidade
		},
	},
	{
		$project: {
			// Select
			nome: 1, // Mantém o campo 'nome'
			_id: 0, // Remove o campo '_id'
			populacaoTotal: { $sum: "$cidades.populacao" }, // Soma as populações das cidades
		},
	},
]);

// Consultando um campo dentro de um array a partir do valor de um campo
db.estados.aggregate([
	{
		$match: {
			"cidades.nome": "Santos",
		},
	},
	{
		$unwind: "$cidades",
	},
	{
		$match: {
			"cidades.nome": "Santos",
		},
	},
	{
		$project: {
			nome: 1,
			"cidades.nome": 1,
			"cidades._id": 1,
			_id: 0,
		},
	},
]);
