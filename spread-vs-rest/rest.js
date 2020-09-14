// Funciones

function sum(...numeros) {
    let resultado = 0;

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }

    return resultado;
}

console.log(sum(2, 2, 5));

// ---------------------------------------

function dobles(...numeros) {
    return numeros.map(function (numero) {
        return numero * 2;
    });
}

console.log(dobles(5, 8, 32, 2, 10));

// Desestructuración de arrays

let a, b, c;

[a, b, c] = [1, 2, 3];

console.log(a, b, c);

// ---------------------------------------

let [a, b, c] = [1, 2, 3];

console.log(a, b, c);

// ---------------------------------------

let [a, b, c, ...resto] = [1, 2, 3, 4, 5, 6, 7];

console.log(a, b, c);
console.log(resto);

// Desestructuración de objetos

let { a, b, c, ...resto } = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

console.log(a, b, c);
console.log(resto);
