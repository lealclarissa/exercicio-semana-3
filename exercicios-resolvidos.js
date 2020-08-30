const input = require('readline-sync')


//////////// EXERCÍCIOS FOR ////////////

// 6) crie uma função que receba um número inteiro e imprima os números no console em ordem, de 1 até o número. Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; para os números múltiplos de 5, imprima "biscoito". Para números múltiplos de 3 e 5, imprima "biscoito de banana". Exemplo, recebendo 15 o resultado será:
// 1
// 2
// banana
// 4
// biscoito
// banana
// 7
// 8
// banana
// biscoito
// 11
// banana
// 13
// 14
// biscoito de banana

function imprimeNomeDeComida(num) {
  
 for (let i = 1; i <= num; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
      console.log (`biscoito de banana`);
    } else if (i % 5 === 0) {
      console.log (`biscoito`);
    } else if (i % 3 === 0) {
      console.log (`banana`);
    } else {
     console.log (i);
    }
  }
}

console.log (imprimeNomeDeComida(num))

//////////// EXERCÍCIOS FUNCOES ////////////

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  

function multiplicaTresNumeros (num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
      return `Preencha todos os valores corretamente!`
    } else {
      return num1 * num2 * num3 + 2
    }
  }
  
  console.log (multiplicaTresNumeros(num1, num2, num3))

//////////// EXERCÍCIOS DA SEMANA ////////////

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function retornaNumMaior (num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1;         
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    }            
}

console.log(retornaNumMaior(num1, num2, num3))

//////////////////////////////////////////
