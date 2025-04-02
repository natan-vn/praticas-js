//TIPOS DE VARIÁVEIS

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Realizam tarefas, sem retorno:↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function dizerNome() {
  console.log("Seu nome é Natanael");
}
dizerNome();
// note que essa função se trata apenas de executar algo, ela não retorna nenhum valor e também não tem parâmetro para retornar

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Com retorno:↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function VezesDois(n1) {
  return n1 * 2;
}

let resultado = VezesDois(3);

console.log(resultado);
