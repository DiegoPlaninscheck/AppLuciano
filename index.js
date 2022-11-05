const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;

const usuario = require("./api/usuario");

app.use(express.json())
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login/index.html");
});

app.get("/pedido", (req, res) => {
  res.sendFile(__dirname + "/pedido/index.html");
});

// app.post("/cadastro", (req, res) => {
//   res.sendFile(__dirname + "/public/cadastro/index.html");
// });

app.get("/usuario", (req, res) => {
  res.json(usuario.selecionarTodos());
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}/login`)
);
