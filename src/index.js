const express = require("express");
const app = express();

// CRIANDO AS ROTAS
app.get("/", (request, response) => response.status(200).send("Olá Mundon"))

app.listen(2024, () => console.log("Servidor rodando na porta 2024"));