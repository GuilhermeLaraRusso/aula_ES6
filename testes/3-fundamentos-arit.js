let array = [-5,0,-3,-4,12];
var positivos = 0;
var negativos = 0;
var pares = 0;
var impares = 0;
array.forEach(item =>{
    if (item % 2 === 0){
      pares++
    }
    if (item % 2 !== 0){
      impares++
    }
    if (item > 0){
      positivos++
    }
    if (item < 0){
      negativos++
    };
});
console.log(`${pares} valor(es) par(s)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);
