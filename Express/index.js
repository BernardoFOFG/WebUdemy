const express = require("express");
const app = express();
const saudacao = require("./middleware/saudacao");
const bodyParser = require("body-parser");
const userApi = require("./api/user");
const productApi = require("./api/product");

app.use(bodyParser.json());
app.use(saudacao("Bernardo")); // Chamando função middleware

app.use("/", (req, res, next) => {
  // Essa rota servirá como um middleware
  // E é necessário que ela tenha o parametro next para seguir para a rota com o mesmo identificador
  console.log("Entrou no middleware");
  next();
});

app.use("/", (req, res) => {
  // app.use ele aceita requisições de qualquer tipo.
  // app.get ele aceita apenas requisições do tipo GET.
  // app.post ele aceita apenas requisições do tipo POST.
  // e assim sucessivamente.
  res.send("Hello World");
});

// Retornando um objeto JSON diretamente
app.get("/json", (req, res) => {
  res.json({ message: "Hello World" });
});

// Retornando um objeto JSON, porém descritivo com suas propriedades
app.get("/json2", (req, res) => {
  res.json({
    data: [
      {
        name: "João",
        age: 20,
      },
      {
        name: "Maria",
        age: 25,
      },
    ],
    status: 200,
    res: "OK",
  });
});

app.get("/cliente/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`
  );
  // Acesso as Querys da requisição
  // Ex: /cliente/relatorio?completo=true&ano=2023
});

app.get("/cliente/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`);
  // Acessando os parametros da requisição
  // Ex: /cliente/2
});

app.post("/corpo", (req, res) => {
  let corpo = "";
  req.on("data", (parte) => {
    corpo += parte;
  });

  req.on("end", () => {
    res.send(corpo);
  });
});

app.post("/corpo", (req, res) => {
  // Utilizando body-parser para mandar informações pelo corpo da requisição
  res.send(req.body);
});

app.get("user", userApi.get);
app.delete("user", userApi.delete);
app.post("user", userApi.save);

productApi(app, "com param!");

app.listen(3002, () => {
  console.log("Servidor Iniciado");
});
