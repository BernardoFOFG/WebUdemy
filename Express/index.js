const express = require("express");
const app = express();

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

app.listen(3000, () => {
	console.log("Servidor Iniciado");
});
