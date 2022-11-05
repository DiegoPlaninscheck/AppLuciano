const cadastro = async () => {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  await fetch("http://localhost:8080/cadastro", {
    method: "POST",
    body: { nome, senha },
  });
};
