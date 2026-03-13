alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;
//enquanto chute não for igual ao numero secreto repete o codigo
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } 
    else {
        if (chute>numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        //Fazer uma contagem de tentativas da pessoa
    //tentativas = tentativas +1;
    tentativas++;
    }
}
let = Palavratentativas = tentativas > 1 ? "tentativas" : "tentativa"
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${Palavratentativas}.`);
//if (tentativas > 1) { 
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}
//else(
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`))