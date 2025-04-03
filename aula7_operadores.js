//OPERADORES:

// 1. Aritméticos:
// +, -, *, /, %, **

// Exemplo:
let salario = 1500;

console.log(salario + salario); //adição
console.log(salario * 2 - salario); //subtração
console.log(salario * 2); //multiplicação
console.log(salario / 2); //divisão
console.log(salario ** 2); //exponeciação
console.log(salario % 7); // resto de uma divisão, nesse caso 1500/7 = 214,28571428571428, o resto é 2

//------------------------------------------------------------------------------------------------------------------------

// 2. Incremento e Decremento:
//++ e --

// Exemplo++:
let contador = 0;
while (contador <= 10) {
  console.log(contador);
  contador++; // enquanto contador for menos que 10, ele vai somar 1, INCREMENTAR 1.
}
// Exemplo--:
let contador2 = 15;
while (contador2 > 5) {
  console.log(contador2);
  contador2--; // enquanto contador for maior que 5, ele vai subtrair 1, DECREMENTAR 1.
}

//------------------------------------------------------------------------------------------------------------------------------

//3. Atribuição:
// =, +=, -=, *=, /=, %=

let valorproduto = 100; // aqui é ATRIBUÍDO o valor 100 à variável produto, atribuição não é igualdade

valorproduto += valorproduto; // incrementa o valor dele mesmo
console.log(valorproduto);

//4. Igualdade:
// ==. ===

console.log(1 === 1); //igualdade estrita --> compara os tipos, aqui está dizendo que 1number é igual a 1number

console.log(2 == 2); // igualdade solta --> ele vai comparar os valores, 2 é igual a 2, não vai se atentar à tipos

//5. Ternário:
// 