const conn = require("../db");

function selecionarTodos() {
  conn.query("select * from users", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
}

function cadastrarUsuario(data) {
  conn.query(
    "insert into usuarios values " + `(${data.usuario}, ${data.senha})`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    }
  );
}

module.exports = { selecionarTodos, cadastrarUsuario };
