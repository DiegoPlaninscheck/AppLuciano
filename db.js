const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "pizzaria",
});

const connectionPromise = connection.promise();

function criarUsuario(nome, senha) {
  connection.query(
    `INSERT INTO usuario (nome, senha) values (${nome}, ${senha})`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Ok");
      }
    }
  );
}

async function pegarTodosUsuarios() {
  const [results] = await connectionPromise.execute("SELECT * FROM usuario");
  return results;
}

module.exports = { criarUsuario, pegarTodosUsuarios };
