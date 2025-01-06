// MONGODB
// Criando uma coleção chamada 'estados'
db.createCollection("estados");
// é bom ter cuidado nesse tipo de situação, pois no mongodb não é case sensitive, ou seja, ele não diferencia maiúsculas de minúsculas, então se você criar uma coleção chamada 'estados' e tentar criar outra chamada 'Estados' ele vai criar a coleção 'Estados' e não vai retornar erro, então é bom ter cuidado com isso.
db.createCollection("Estados");

// Comando para deletar uma coleção
db.Estados.drop()