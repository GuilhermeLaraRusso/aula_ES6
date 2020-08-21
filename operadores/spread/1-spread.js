// Spread

var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

// Exemplo acima vai ficar seguinte      var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pés'];


function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);