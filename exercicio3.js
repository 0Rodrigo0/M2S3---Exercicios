const inverteString = [];

function inverte() {
  var palavra = "rodrigo";
  var inverte = palavra.split("").reverse().join("");
  console.log(inverte);
}

inverte();

function inverte2(str) {
  var palavra = "rodrigo";
  var inverte2 = "";
  for (var i = str.length - 1; i >= 0; i--) {
    inverte2 += str[i];
  }
  return inverte2;
}

inverte();
