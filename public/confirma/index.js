const dataPessoa = localStorage.getItem("pessoa");
const dataPizza = localStorage.getItem("pizza");

let pessoa = {
    nome: JSON.parse(dataPessoa).nome,
    endereco: JSON.parse(dataPessoa).endereco,
    email: JSON.parse(dataPessoa).email,
    telefone: JSON.parse(dataPessoa).telefone
}

let nome = document.getElementById("spanNome").innerText = pessoa.nome
let endereco = document.getElementById("spanEndereco").innerText = pessoa.endereco
let email = document.getElementById("spanEmail").innerText = pessoa.email
let telefone = document.getElementById("spanTelefone").innerText = pessoa.telefone

// let pizza = {
//     tamanho: JSON.parse(dataPizza).tamanho,
//     sabores: JSON.parse(dataPizza).sabores,
//     adicionais: JSON.parse(dataPizza).adicionais,
//     bebidas: JSON.parse(dataPizza).bebidas,
//     retirada: JSON.parse(dataPizza).retirada,
//     precoTotal: JSON.parse(dataPizza).precoTotal
// }

let pizza = JSON.parse(dataPizza)

document.getElementById("spanTamanho").innerText = pizza.tamanho
document.getElementById("spanSabores").innerText = pizza.sabores 
document.getElementById("spanAdicionais").innerText = pizza.adicionais || "Nada"
document.getElementById("spanBebida").innerText = pizza.bebidas.length ? pizza.bebidas : "Nada"
document.getElementById("spanRetirada").innerText = pizza.retirada


document.getElementById("spanValorTotal").innerText = "R$" + pizza.precoTotal;

// function removerDoLocalStorage() {
//     localStorage.removeItem("pessoa");
//     localStorage.removeItem("pizza");
// }