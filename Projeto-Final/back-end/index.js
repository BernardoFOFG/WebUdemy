const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db; // O DB, é um extensão do Knex que faz a conexão com o banco de dados

consign() // Gerenciador de dependências
  .then("./config/middlewares.js")
  .then('./api/validation.js')
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.listen(3000, () => {
  console.log("Server Iniciado");
});
