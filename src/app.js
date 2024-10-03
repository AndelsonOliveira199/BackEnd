const express = require("express");
const app = express();

// CRIANDO AS ROTAS
app.get("/", (request, response) => response.status(200).send("Olá Mundon"))

module.exports = app;