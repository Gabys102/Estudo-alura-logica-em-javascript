alert("Boas vindas ao jogo do numeros secreto :) ");
let numeroSecreto = 29;
let chute = prompt("Escolha um número entre 1 e 30")
if( chute == numeroSecreto){
    console.log (`Isso ai, você descobriu o ${numeroSecreto}s (29)`)
    alert("Aceeertouu vida!")
    ;}
else{
    alert("Buuh você errou!")
}
//Perguntar o dia da semana
let diaDaSemana = prompt("Qual é o dia da semana?");
// Fazer a analise que dia é, e atribui a mensagem certas
if (diaDaSemana === "sabado" || diaDaSemana === "domingo") {
alert("Bom fim de semana!");
} else {
alert("Boa semana!");
}
//Pergunte o numero
let Numeroparimpar = prompt("Fale um numero de 1 a 10")
// separe impar de par 
if (Numeroparimpar === "2" || Numeroparimpar === "4"|| Numeroparimpar === "6"|| Numeroparimpar === "8"|| Numeroparimpar === "10" ){
    alert("seu numero e par");
}
else{
    alert("Seu numero é impar")
}
//perguntar o numero
let numero = prompt("Digite um número:");
numero = Number(numero);
//separar positivo do negativo
if (numero >= 0) {
alert("O número é positivo.");
} else if (numero < 0) {
alert("O número é negativo.");}

// Sistema de pontuação do jogo
let pontuacao = 120; // você pode mudar esse valor


if (pontuacao >= 100) {
alert("Parabéns, você venceu!");
} else {
alert("Tente novamente para ganhar.");
}


// Mensagem com saldo usando template string
let saldo = 350.50;
let mensagemSaldo = `Seu saldo atual é de R$ ${saldo}.`;
alert(mensagemSaldo);


// Pedir o nome do usuário e mostrar boas-vindas
let nome = prompt("Digite seu nome:");
alert(`Seja bem-vindo(a), ${nome}!`);