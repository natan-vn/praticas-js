//FUNÇÕES
//Funções são a base de todos os softwares, tudo gira em torno dessas ações que acontecem conforme o cenário pretentido

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓funções sem parâmetros:↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//

let number = 10;
console.log(number);

function somarUm() {
  // A sintaxe de uma function geralmente é verbo + substantivo
  number = 11;
}

somarUm();
console.log(number);

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓funções com parâmetros:↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//

function adicao(n1, n2) {
  // ao criar uma função, você pode incluir os parâmetros no seu início, parâmetros são como variáveis daquela função
  let resultado = n1 + n2;
  console.log(resultado);
} // e então você diz o que a função vai fazer, nesse caso, você está mandando ela atribuir a 'resultado' o valor  n1+n2 e imprimir a varíavel

adicao(4, 4); // Aqui, você chama a função para que ela seja executada e atribui o valor de n1 e n2
