const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;

const db = require("./db");

app.use(express.json());
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login/index.html");
});

app.get("/cadastro", (req, res) => {
  res.sendFile(__dirname + "/cadastro/index.html");
});

app.get("/pedido", (req, res) => {
  res.sendFile(__dirname + "/pedido/index.html");
});

app.post("/cadastro", (req, res) => {
  const { nome, senha } = req.body;
  db.criarUsuario(nome, senha);
  res.redirect("/cadastro");
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await db.pegarTodosUsuarios();
  res.json(usuarios);
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
