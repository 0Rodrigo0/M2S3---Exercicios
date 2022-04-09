const receitas = [1000, 1000, 1000];
const despesas = [200, 2000, 1000];
var somaR = 0;
var somaD = 0;

function mensagem(saldo) {
  for (var i = 0; i < receitas.length; i++) {
    somaR += receitas[i];
  }

  for (var i = 0; i < despesas.length; i++) {
    somaD += despesas[i];
  }

  var resultado = somaR - somaD;

  if (resultado >= 0) {
    console.log("Seu saldo esta positivo!");
    console.log("R$ " + resultado);
  } else {
    console.log("Seu saldo esta negativo!");
    console.log("R$ " + resultado);
  }
}

mensagem();
