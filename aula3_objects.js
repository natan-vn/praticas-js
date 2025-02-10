// OBJETOS ---> Tipos compostos

let pessoa = {
  //começamos a declarar um OBJETO a partir das chaves!!!
  nome: "Paulo", // aqui temos uma estrutura de key-value
  idade: "99", // aqui temos uma estrutura de key-value
  profissao: "FrontEnd", // aqui temos uma estrutura de key-value
};

console.log(pessoa); // Para consultarmos os valores de todas as propriedades do objeto, basta dar um console.log(objeto)
console.log(typeof pessoa); // o comando typeof nos ajuda a ver os tipo dos elementos, nesse caso, um objeto

console.log(pessoa.nome); // aqui, estamos consultando apenas a propriedade "nome" do objeto pessoa
console.log(typeof pessoa.idade); // aqui, estamos consultando o tipo da propriedade
