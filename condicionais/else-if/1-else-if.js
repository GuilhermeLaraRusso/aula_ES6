/*

if (condition) {
    // code
} else if (condition) {
    // code
}

*/

const array = [2, 3, 4, 5, 6, 8, 10, 15];
console.log ('\nO grupo é\n', array);

console.log('\nelse if');
array.forEach(item => {
    if (item % 2 ===0) {
        console.log(`O número ${item} é divisível por 2.`);
    } else if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    } else if(item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`);
    }
});

//  No caso acima, cada número irá se enquadrar apenas em um else if.
//  Se o número for múltiplo de mais de um número, ele irá fazer apenas o primeiro comando.



// Para realizar mais de um comando, é necessário utilizar apenas o if, conforme abaixo

const array = [2, 3, 4, 5, 6, 8, 10, 15];
console.log ('\nO grupo é\n', array);

console.log('\nif');
array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2.`);
    }
    if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    }
    if(item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`);
    }
});




