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

//5. Ternário (elimina eternos ifs e elses):
// ?, :
//Exemplo: Queremos dizer que um cliente, a partir do momento em que tiver >100 pontos, é um cliente platinum.<100, cliente comum

let pontos = 100;
let tipo_cliente = pontos > 100 ? "platinum" : "comum"; // aqui ele vai verificar se pontos é maior que 100, se for, o cliente é platinum, senão, é comum

console.log(tipo_cliente); // aqui ele vai imprimir o tipo de cliente

//------------------------------------------------------------------------------------------------------------------------------
//6. Lógicos:
// &&, ||, !

// && --> E lógico --> Só quando todas as condições são true
// || --> OU lógico Uma das duas condições é true

// ! --> NÃO lógico --> Inverte o valor lógico

// Exemplo &&: Um jovem no Brasil, só pode tirar carteira de motorista, a partir dos 18 anos.

let idade = 18;
if (idade >= 18 && idade <= 70) {
  console.log("Pode tirar carteira de motorista");
} else {
  console.log("Não pode tirar carteira de motorista");
}
// Aqui ele vai verificar se a idade é maior ou igual a 18 e menor ou igual a 70, se for, a pessoa pode tirar carteira de motorista, senão, não pode.

// Exemplo ||: Para trabalhar no Brasil, a pessoa tem que ter mais de 16 anos ou ser emancipado.
let idade2 = 16;
let emancipado = false;
if (idade2 >= 16 || emancipado == true) {
  console.log("Pode trabalhar");
}
else {
  console.log("Não pode trabalhar");
}

// Exemplo !: Ele inverte o valor lógico, então vamos declarar algo true e ele retorna false e vice-versa
let verdade = true;
console.log(!verdade) // aqui ele vai inverter o valor lógico, então ele vai imprimir false