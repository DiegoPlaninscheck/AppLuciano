const conn = require("../db");

function selecionarTodos() {
  conn.query("select * from usuarios", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
}

function login({ usuario, senha }) {
  console.log(usuario, senha);
  conn.query(
    "select * from usuarios where nome = " + usuario + " and senha = " + senha,
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
  conn.query("select * from usuarios where id = " + id, (err, results) => {
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
