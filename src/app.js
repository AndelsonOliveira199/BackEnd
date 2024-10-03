const express = require("express");
const app = express();
const router = require("./router");

// CRIANDO AS ROTAS
app.use(router);

module.exports = app;