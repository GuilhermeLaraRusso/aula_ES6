//  Retorna o tamanho de uma string
const textSize = "Texto".length;
console.log("Quantidade de letras: " + textSize);


// Retorna um array quebrando a string por um delimitador
const splittedText = "Texto".split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);


// Busca por um valor e substitui por outro
const replacedText = "Texto".replace("Text", "txeT");
console.log('\nSubstituição de valor:', replacedText);

// Substitui todos os valores (no caso 'without') por outro valor
const frase = "Science without religion is lame, religion without science is blind."
const frase1 = frase.replace(/without/g, "with");
console.log(frase1);


// Retorna a fatia de um valor
const lastCHar = "Texto".slice(-1);
console.log("\nÚltima letra de uma string:", lastCHar);

const allWithoutLastChar = "Texto".slice(0, -1);
console.log("\nValor da string da primeira letra menos a última:", allWithoutLastChar);

const secondToEnd = "Texto".slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);


// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);







