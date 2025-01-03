const config = require("../knexfile.js");
const knex = require("knex")(config);

// Rodando as migrações assim que iniciar o servidor (Não é muito interessante fazer isso em produção ou em grande escalas)
knex.migrate.latest([config]);
module.exports = knex;
