let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let endereco = document.getElementById("endereco");

let pequena = document.getElementById("p");
let media = document.getElementById("m");
let grande = document.getElementById("g");
let gigante = document.getElementById("gg");

let adicional = document.getElementById("borda");

let refri = document.getElementById("refri");
let suco = document.getElementById("suco");

let entrega = document.getElementById("entrega");
let retirada = document.getElementById("retirada");

while ((pequena.checked || media.checked || grande.checked || gigante.checked)) {
  let tamanho;
  if (pequena.checked) {
    tamanho = 2;
  } else if (media.checked) {
    tamanho = 3;
  } else if (grande.checked) {
    tamanho = 4;
  } else if (gigante.checked) {
    tamanho = 5;
  }

  const selects = document.getElementById("selects")
  for (let i = 0; i < tamanho; i++) {
    let select = document.createElement("select");
    selects.appendChild(select);
  }
}


document.getElementById("confirmar").addEventListener("click", () => {
  let tamanho;
  let adicionais;
  let bebida;
  let tipoEntrega;

  // if (!(nome.value && email.value && telefone.value && endereco.value)) {
  //   alert("Preencha todos os campos!");
  // } else {
  //   const pessoa = {
  //     nome: nome.value,
  //     email: email.value,
  //     telefone: telefone.value,
  //     endereco: endereco.value,
  //   };
  //   // localStorage.setItem("pessoa", pessoa);
  // }

  if (pequena.checked) {
    tamanho = pequena.value;
  } else if (media.checked) {
    tamanho = media.value;
  } else if (grande.checked) {
    tamanho = grande.value;
  } else if (gigante.checked) {
    tamanho = gigante.value;
  }

  if (adicional.checked) {
    adicionais = adicional.value;
  }

  if (refri.checked) {
    bebida = refri.value;
  } else if (suco.checked) {
    bebida = suco.value;
  }

  if (entrega.checked) {
    tipoEntrega = entrega.value;
  } else if (retirada.checked) {
    tipoEntrega = retirada.value;
  }

  const pizza = {
    tamanho: tamanho,
    adicionais: adicionais,
    bebidas: bebida,
    entrega: tipoEntrega,
  };

  // console.log(tamanho);
  // console.log(adicionais);
  // console.log(bebida);
  // console.log(tipoEntrega);
});


