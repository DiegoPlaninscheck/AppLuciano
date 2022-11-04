const login = async () => {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  let data;
  try {
    await fetch("http://localhost:8080/usuario")
      .then((response) => response.json())
      .then((res) => {
        data = res;
      });
  } catch (err) {
    console.log(err);
  }

  for (const user of data) {
    console.log("for", user);
    if (user.usuario == usuario) {
        console.log("if", user);
    }
  }
};
