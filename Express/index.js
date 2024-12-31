const express = require("express");
const app = express();
const saudacao = require("./middleware/saudacao");

app.use(saudacao('Bernardo')); // Chamando função middleware

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

app.listen(3002, () => {
	console.log("Servidor Iniciado");
});
