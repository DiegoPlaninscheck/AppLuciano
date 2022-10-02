let sabores = document.getElementById("sabores");

sabores.addEventListener("change", () => {
  while (true) {
    let selects = document.getElementById("select");
    if (!!selects) {
      document.getElementById("select").remove();
    }
    if (!selects) {
      break;
    }
  }

  let saborTitulo = document.getElementById("saboresTitulo");

  let qtdSabores;
  switch (sabores.value) {
    case "2": {
      qtdSabores = 2;
      break;
    }
    case "3": {
      qtdSabores = 3;
      break;
    }
    case "4": {
      qtdSabores = 4;
      break;
    }
    case "5": {
      qtdSabores = 5;
      break;
    }
    default: {
      saborTitulo.style.display = "none";
      return;
    }
  }

  let divSelect = document.getElementById("selects");

  saborTitulo.style.display = "flex";

  for (let i = 0; i < qtdSabores; i++) {
    let select = document.createElement("select");
    for (let j = 0; j < 5; j++) {
      let option = document.createElement("option");
      if (j == 0) {
        option.value = "cal";
        option.innerText = "Calabresa";
      } else if (j == 1) {
        option.value = "fra";
        option.innerText = "Frago";
      } else if (j == 2) {
        option.value = "mig";
        option.innerText = "Mignon";
      } else if (j == 3) {
        option.value = "pep";
        option.innerText = "Peperoni";
      } else if (j == 4) {
        option.value = "aeo";
        option.innerText = "Alho e oleo";
      }
      select.appendChild(option);
    }
    select.id = "select";
    divSelect.appendChild(select);
  }
});

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

  if (pequena.selected) {
    tamanho = pequena.value;
  } else if (media.selected) {
    tamanho = media.value;
  } else if (grande.selected) {
    tamanho = grande.value;
  } else if (gigante.selected) {
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

  console.log(tamanho);
  console.log(adicionais);
  console.log(bebida);
  console.log(tipoEntrega);
});
