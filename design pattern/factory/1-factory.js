// Exemplo 1

function Pessoa() {
    return {
        name: 'Guilherme',
        lastName: 'Russo'
    }
}

const p = Pessoa();
console.log(p);


// Exemplo 2

function Pessoa (name) {
    return {
        name,
        lastName: 'Russo'
    }
}

const p = Pessoa('Custom Name');
console.log(p);


// Exemplo 3

function Pessoa(customProperties) {
    return {
        name: 'Guilherme',
        lastName: 'Russo',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age:32});
console.log(p);



