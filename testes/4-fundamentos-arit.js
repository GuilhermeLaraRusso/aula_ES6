let nota = gets();
let cem = 0;
let cin = 0;
let vin = 0;
let dez = 0;
let cinco = 0;
let doi = 0;
let um = 0;
console.log(`${nota}`)

if(nota >= 100){
do{
    nota -= 100;
    cem++
} while(nota >= 100);
}
if(nota >= 50){
do{
    nota -= 50;
    cin++
} while(nota >= 50);
}
if(nota >= 20){
do{
    nota -= 20;
    vin++
} while(nota >= 20);
}
if(nota >= 10){
do{
    nota -= 10;
    dez++
} while(nota >= 10);
};
if(nota >= 5){
do{
    nota -= 5;
    cinco++
} while(nota >= 5);
};
if(nota>=2){
do{
    nota -= 2;
    doi++
} while(nota >= 2);
};
if(nota >= 1){
do{
    nota -= 1;
    um++
} while(nota >= 1);
}
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cin} nota(s) de R$ 50,00`);
console.log(`${vin} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${doi} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);


