/*

if (condition) {
    // code
}

*/

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item =>{
    if (item % 2 === 0){
        console.log(`O número ${item} é par.`);
    } else{
        console.log(`O número ${item} é impar.`);
    }
});



// outro exemplo. Array não precisa ser chamado de array
// para fazer um array basta colocar entre [] com vírgula entre os itens
const grupo = [8, 9, 10, 11, 12];

grupo.forEach(numero =>{
    if (numero % 2 === 0 ){
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é impar.`);
    }
});

