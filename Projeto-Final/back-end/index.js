const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
const mongoose = require("mongoose");
require("./config/mongodb");

app.db = db; // O DB, é um extensão do Knex que faz a conexão com o banco de dados
app.mongoose = mongoose; // Chamando a conexão do mongodb

consign() // Gerenciador de dependências
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  .then("./schedule/statsSchedule.js")
  .then("./config/routes.js")
  .into(app);

app.listen(3000, () => {
  console.log("Server Iniciado");
});
