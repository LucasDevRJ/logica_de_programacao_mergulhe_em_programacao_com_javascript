console.log("Boas-vindas");

let nome = "Lucas";
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

let linguagemDeProgramacao = prompt("Qual a linguagem de programação que você mais gosta? ");
console.log(`A linguagem de programação que você mais gosta é ${linguagemDeProgramacao}`);

let valor1 = 3;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let idadeDoUsuario = Number(prompt("Digite a sua idade: "));
if (idadeDoUsuario >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

let numero = Number(prompt("Digite algum número: "));
if (numero > 0) {
    console.log(`O número ${numero} é positivo!`);
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo!`);
} else {
    console.log("O número digitado é zero!");
}

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = 3.0;
if (nota >= 7.0) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log(Math.random());
console.log(parseInt(Math.random() * 10));
console.log(parseInt(Math.random() * 1000));