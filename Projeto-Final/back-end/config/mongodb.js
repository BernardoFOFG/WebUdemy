const mongoose = require("mongoose");
const { stringConnectionMongoDB } = require("../.env");

mongoose
  .connect(stringConnectionMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const successMsg = "Conexão com o MongoDB estabelecida com sucesso!";
    console.log("\x1b[42m%s\x1b[30m", successMsg, "\x1b[0m"); // Mensagem de sucesso com cores
  })
  .catch((e) => {
    const errorMsg = "ERRO! Não foi possível conectar com o MongoDB!";
    console.log("\x1b[41m%s\x1b[37m", errorMsg, "\x1b[0m"); // Mensagem de erro com cores
  });
