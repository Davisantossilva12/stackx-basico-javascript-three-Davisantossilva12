// Soma dos números inteiros de 1 a n

function somaNumeros(n) {
  // Sua implementação aqui 

  if (n === 0) {
    return 0;
  }
  else{
    return n + somaNumeros(n - 1);
  }
}

const result =somaNumeros(3);

//console.log(result);


// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  if (number === 0) {
    return true;
  } 
  else if (number ===1) {
    return false;
  }
  else {
    return ehPar(number - 2);
  }
}

//console.log(ehPar(2));


function fibonacci(n) {
  // Sua implementação aqui
  
  if (n <= 1) { 
    return 1; 
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
  
}

console.log(fibonacci(10));

module.exports = { somaNumeros, ehPar, fibonacci };