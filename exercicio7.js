function mudaNota(nota) {
  if (nota < 60) {
    console.log("E");
  } else if (nota >= 60 && nota <= 69) {
    console.log("D");
  } else if (nota >= 70 && nota <= 79) {
    console.log("C");
  } else if (nota >= 80 && nota <= 89) {
    console.log("B");
  } else if (nota >= 90 && nota <= 100) {
    console.log("A");
  }
}

mudaNota(90);
