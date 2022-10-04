let tamanho = document.getElementById("tamanho");

let qtdSabores;
const listaSabores = [
  {
    name: "Selecione",
    value: "",
  },
  {
    name: "Strogonoff de Frango",
    value: "Strogonoff de Frango",
  },
  {
    name: "Calabresa",
    value: "Calabresa",
  },
  {
    name: "Portuguesa",
    value: "Portuguesa",
  },
  {
    name: "Marguerita",
    value: "Marguerita",
  },
  {
    name: "Quatro queijos",
    value: "Quatro queijos",
  },
  {
    name: "Frango com Catupiry",
    value: "Frango com Catupiry",
  },
  {
    name: "Mexicana",
    value: "Mexicana",
  },
  {
    name: "Coração",
    value: "Coração",
  },
  {
    name: "Sensação",
    value: "Sensação",
  },
  {
    name: "Dois Amores",
    value: "Dois Amores",
  },
  {
    name: "Banana Nevada",
    value: "Banana Nevada",
  },
  {
    name: "Prestigio",
    value: "Prestigio",
  },
  {
    name: "Confete",
    value: "Confete",
  },
];

tamanho.addEventListener("change", () => {
  while (true) {
    let selects = document.getElementById("pizzaFlavors");
    if (!!selects) {
      document.getElementById("pizzaFlavors").remove();
    }
    if (!selects) {
      break;
    }
  }

  let saborTitulo = document.getElementById("saboresTitulo");

  switch (tamanho.value) {
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

  saborTitulo.style.display = "flex";
  for (let i = 0; i < qtdSabores; i++) {
    const sabores = document.getElementById("sabores");
    const div = document.createElement("div");

    div.id = "pizzaFlavors";

    const saborSelecionado = document.createElement("select");
    saborSelecionado.id = `flavor-${i + 1}`;
    listaSabores.forEach((sabor) => {
      const option = new Option(sabor.name, sabor.value);
      saborSelecionado.add(option);
    });

    const saborTitulo = document.createElement("h5");
    saborTitulo.innerText = `Sabor ${i + 1}`;
    div.appendChild(saborTitulo);
    div.appendChild(saborSelecionado);
    div.style.display = "flex";
    sabores.style.flexDirection = "column";
    sabores.appendChild(div);
  }
}
);

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
  let tamanho = "";
  let adicionais = "";
  let bebida1 = "";
  let tipoEntrega = "";
  let precoTotal = 0;
  let bebida2 = "";
  const listaBebidas = []

  if (pequena.selected) {
    tamanho = "Pequeno";
    precoTotal += 20;
  } else if (media.selected) {
    tamanho = "Médio";
    precoTotal += 25;
  } else if (grande.selected) {
    tamanho = "Grande";
    precoTotal += 30;
  } else if (gigante.selected) {
    tamanho = "Gigante";
    precoTotal += 35;
  }

  if (adicional.checked) {
    adicionais = adicional.value;
    precoTotal += 8;
  }

  if (refri.checked) {
    bebida1 = refri.value;
    precoTotal += 10; 
    listaBebidas.push(bebida1)
  } 
  if (suco.checked) {
    bebida2 = suco.value;
    precoTotal += 8;
    listaBebidas.push(bebida2)
  }

  if (entrega.checked) {
    tipoEntrega = entrega.value;
    precoTotal += 5;
  } else if (retirada.checked) {
    tipoEntrega = retirada.value;
  }

  const sabores = [];
  for (let i = 0; qtdSabores > i; i++) {
    const select = document.getElementById(`flavor-${i + 1}`);
    const sabor = select.options[select.selectedIndex].value;
    if (sabor) sabores.push(sabor);
  }

  if (!(nome.value && email.value && telefone.value && endereco.value)) {
    alert("Preencha todos os campos!");
  } else {
    if (tamanho == "" || sabores == "" || tipoEntrega == "") {
      alert("Escolha as opções da pizza");
    } else {
      const pessoa = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        endereco: endereco.value,
      };
      localStorage.setItem("pessoa", JSON.stringify(pessoa));
      const pizza = {
        tamanho: tamanho,
        sabores: sabores,
        adicionais: adicionais,
        bebidas: listaBebidas,
        retirada: tipoEntrega,
        precoTotal: precoTotal
      };
      localStorage.setItem("pizza", JSON.stringify(pizza));
      let link = document.getElementById("link");
      link.href = "../confirma/index.html";
    }
  }

});
