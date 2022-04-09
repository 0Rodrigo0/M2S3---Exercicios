const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

function concatenaArrays(original, novoArray) {
  return original.concat(novoArray);
}

console.log(concatenaArrays(arrOne, arrTwo));

// Push modifica o array original.
// Concat adiciona novos itens ao final de um array sem alterá-lo
