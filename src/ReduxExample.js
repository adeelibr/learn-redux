import redux from 'redux';

console.log('Starting redux example');

// Pure Function
add = (a, b) => a + b;
console.log('(Pure Function) Add 4+4= ', add(4,4));

// Impure Function
let a = 3;
add = (b) => a + b;
console.log('(Impure Function) Add 3+4= ', add(4));