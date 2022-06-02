// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
// Exemplos:
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"

function repeatStringNumTimes(num) {
var repeatedString = "";
    while (num > 0) {
      repeatedString += "+";
      num--;
    }
    return repeatedString;
  }

  console.log(repeatStringNumTimes(4))

  repeatStr = (n, s) => s.repeat(n);
  
  console.log(repeatStr(7, '+'))