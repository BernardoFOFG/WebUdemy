const app = require("express")();
const consign = require("consign");

consign() // Gerenciador de dependências
  .then("./config/middlewares.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.listen(3000, () => {
  console.log("Server Iniciado");
});
