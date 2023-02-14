const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true })); // pegando submit de um formulário e transformando em objeto
app.use(bodyParser.json()); // transforma em objeto

app.get("/teste", (req, res) => res.send("Deu tudo certo!"));
app.listeners(8080, () => console.log("Servidor funcionando!"))
