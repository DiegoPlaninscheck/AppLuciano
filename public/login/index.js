const login = async () => {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const usuarios = await fetch("http://localhost:8080/usuarios").then(
    (response) => response.json()
  );

  for (const user of usuarios) {
    console.log("for", user);
    if (user.nome == usuario && user.senha == senha) {
      const div = document.getElementById("containerBotao");
      const span = document.createElement("span");
      span.innerText = "Login realizado com sucesso!";
      div.appendChild(span);

      setTimeout(() => {
        span.innerText = "";
      }, 3000);
    }
  }
};
