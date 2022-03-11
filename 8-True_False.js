// FALSE
const x = "";
const y = 0;
const a = null;
const b = undefined;

console.log(!!x); // FALSE
console.log(!!y); // FALSE
console.log(!!a); // FALSE
console.log(!!b); // FALSE

// TRUE
const list = [];
const object = {};

console.log(!!list) // TRUE
console.log(!!object) // TRUE

// Inverter Boolean
console.log(!list) // FALSE
console.log(!object) // FALSE

console.log(!x); // TRUE
console.log(!y); // TRUE
console.log(!a); // TRUE
console.log(!b); // TRUE