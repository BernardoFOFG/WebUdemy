const express = require("express");
const app = express();

app.use("/", (req, res) => {  
	// app.use ele aceita requisições de qualquer tipo.
	// app.get ele aceita apenas requisições do tipo GET.
	// app.post ele aceita apenas requisições do tipo POST.
	// e assim sucessivamente.
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Servidor Iniciado");
});
