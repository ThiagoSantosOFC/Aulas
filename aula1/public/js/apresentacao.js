"use strict";

//delcarando variáveis para os elementos do DOM que vamos manipular

let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
//declaração do botão e adição do evento de click para o botão e a função que será executada quando o botão for clicado (função anônima)
let btn = document.getElementById("btn");


//função que será executada quando o botão for clicado (função anônima)
btn.addEventListener("click", function () {
  if ( // se algum dos campos estiver vazio, o usuário será alertado para preencher todos os campos e a função será interrompida
    nome.value == "" ||
    idade.value == "" ||
    email.value == "" ||
    telefone.value == ""
  ) { //alerta para o usuário preencher todos os campos
    alert("Preencha todos os campos!");
  } else { //se todos os campos estiverem preenchidos, vamos criar um objeto com os dados do usuário
    //criando um objeto com os dados do usuário e armazenando na variável dados (que é um objeto). objetos guardam dados  e são muito úteis para armazenar dados de usuários
    let dados = {
      nome: nome.value,
      idade: idade.value,
      email: email.value,
      telefone: telefone.value,
    };

    //agora vamos mostrar os dados na tela do usuário
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = //innerHTML é uma propriedade que permite inserir HTML dentro de um elemento do DOM
      "Nome: " +
      dados.nome +
      "<br>" +
      "Idade: " +
      dados.idade +
      "<br>" +
      "Email: " +
      dados.email +
      "<br>" +
      "Telefone: " +
      dados.telefone;
  }
});

//fim xD
