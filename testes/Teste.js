var line = ['5', '6'];
// let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A * B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);




var Array = ['5' , '3'];
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 + valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);







const array = [7, -5, 6, -3.4, 4.6, 12];

array.forEach(item =>{
    if (item > 0){
        console.log(`O número ${item} é positivo.`);
    }
    if (item < 0){
        console.log(`O número ${item} é negativo.`);
    }
    if (item === 0){
        console.log(`O número ${item} é nulo`)
    }
});

const array = [7, -5, 6, -3.4, 4.6, 12];
var total = 0
array.forEach(item =>{
    if (item > 0){
        total++
    }
});
console.log(`${total} valores positivos`)


Array(6) = [1, 5, 6, 7, -1, 0];
values = Array(6);
values[0] = gets();
values[1] = gets();
values[2] = gets();
values[3] = gets();
values[4] = gets();
values[5] = gets();

var total = 0
let qtdValores = values
array.forEach(values =>{
    if (item > 0){
        total++
    }
});
console.log(`${total} valores positivos`)




// Deu certo.
let array = [gets(), gets(), gets(), gets(), gets(), gets()]
var total = 0
array.forEach(item =>{
    if (item > 0){
        total++
    }
});
console.log(`${total} valores positivos`)




//Deu certo.

let N = gets()

for (let B = 2; B <= N; B = B + 2){
  console.log(`${B}`);
};

