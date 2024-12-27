// Consulto básica
db.estados.find();

// Consulta com atributo de estetica JSON
db.estados.find().pretty();

// Consulta com filtro de um registro
// Pegando o primeiro valor que encontrar
db.estados.findOne();
// Filtrando por um filtro
db.estados.findOne({ sigla: "SP" });

// Consulta com OU - É necessário que na busca tenha um dos dois ou mais valores
db.estados.find({ $or: [{ sigla: "SP" }, { regiao: "Norte" }] });

// Consulta com E - É necessário que na busca tenha os dois valores
db.estados.find({ $and: [{ sigla: "SP" }, { regiao: "Norte" }] });

// Consulta se um campo existe
db.estados.find({ regiao: { $exists: true } });

// Consultas limitadas
db.estados.find().limit(2);

// Consultas com ordenação
db.estados.find().sort({ nome: 1 }); // 1 para ordenar de forma crescente e -1 para decrescente

// Consultas pulando registros
db.estados.find().skip(2);

// Consultas contadas
db.estados.find().count();
