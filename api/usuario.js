const conn = require("../db");

conn.query("use pizzaria");

function selecionarTodos() {
  conn.query("select * from usuario", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      return results;
    }
  });
}

function login({ usuario, senha }) {
  console.log(usuario, senha);
  conn.query(
    "select * from usuario where nome = " + usuario + " and senha = " + senha,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    }
  );
}

function selecionarPorID(id) {
  conn.query("select * from usuario where id = " + id, (err, results) => {
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

module.exports = { selecionarTodos, login, selecionarPorID, cadastrarUsuario };
