// multiplicación

function multi(a, b, c) {
    return a * b * c;
}

const numbers = [5, 2, 7];

console.log(multi(...numbers));

// Arrays

const array = [1, 2, 3];
const array2 = [...array];

console.log(array2);

array2.push(4);

console.log(array);
console.log(array2);

// ---------------------------------------

const array = [1, 2, 3];
const array2 = ["a", "b", "c", ...array];

console.log(array2);

// ---------------------------------------

const array = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array, ...array2];

console.log(array3);

// Objetos

let objeto = { nombre: "Fili", edad: 24 };
let objeto2 = { ...objeto };

console.log(objeto2);

// ---------------------------------------

let objeto = { nombre: "Fili", edad: 24 };
let objeto2 = { ...objeto };

objeto2.frontend = true;

console.log(objeto);
console.log(objeto2);

// ---------------------------------------

const objeto = { nombre: "Fili", edad: 24 };
const objeto2 = { frontend: true, ...objeto };

console.log(objeto2);

// ---------------------------------------

const objeto = { nombre: "Fili", edad: 24 };
const objeto2 = { frontend: true, backend: false };

const objeto3 = { ...objeto, ...objeto2 };

console.log(objeto3);
