let contador = 1;
console.log("Contagem progressiva de 1 até 10:");
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let contador2 = 10;
console.log("Contagem regressiva de 10 até 0:");
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

let numeroDigitado = Number(prompt("Digite um número: "));
console.log("Contagem regressiva do número digitado até 0:");
while (numeroDigitado >= 0) {
    console.log(numeroDigitado);
    numeroDigitado--;
}

let numeroDigitado2 = Number(prompt("Digite um número: "));
console.log("Contagem progressiva de 0 até o número digitado:");
let contador3 = 0;
while (numeroDigitado2 >= contador3) {
    console.log(contador3);
    contador3++;
}