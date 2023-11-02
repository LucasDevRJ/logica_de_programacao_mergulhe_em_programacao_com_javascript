let diaDaSemana = prompt("Qual é o dia da semana? ");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

let numeroDigitado = Number(prompt("Digite um número: "));

if (numeroDigitado > 0) {
    alert("O número digitado é positivo.");
} else {
    alert("O número digitado é negativo.");
}

let linguagemEscolhida = Number(prompt("Escolha uma linguagem de programação:\n1 - JavaScript\n2 - Java\n3 - Python"));
let pontuacao = 0;

if (linguagemEscolhida == 2) {
    pontuacao = 100;
    alert("Parabéns, você venceu!");
} else {
    if (linguagemEscolhida == 3) {
        pontuacao = 25;
    } else {
        pontuacao = 50;
    }
    alert("Tente novamente para ganhar.");
}

let saldoAtual = parseFloat(prompt("Digite o saldo desejado: R$ "));

alert(`O seu saldo atual é R$ ${saldoAtual.toFixed(2)}`);

let nome = prompt("Digite seu nome: ");

alert(`Boas-vindas para o/a ${nome}`);