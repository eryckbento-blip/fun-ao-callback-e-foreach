// Array de notas
let notas = [6, 8, 7, 9, 10];

// Calculando a soma com forEach()
let soma = 0;

notas.forEach(function(nota) {
  soma += nota;
});

// Calculando a média
let media = soma / notas.length;

// Criando um novo array com cada nota +1 usando map()
let notasMaisUm = notas.map(function(nota) {
  return nota + 1;
});

// String
let palavra = "javascript";

// Transformando em maiúsculo usando split(), map() e join()
let palavraMaiuscula = palavra
  .split("")
  .map(function(letra) {
    return letra.toUpperCase();
  })
  .join("");

// Exibindo os resultados no console
console.log("Notas:", notas);
console.log("Soma das notas:", soma);
console.log("Média:", media);
console.log("Notas +1:", notasMaisUm);
console.log("Palavra original:", palavra);
console.log("Palavra em maiúsculo:", palavraMaiuscula);