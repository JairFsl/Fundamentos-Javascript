const lista = ["jair", "felipe", "joão", "caio"];

console.log(lista);

const felipe = lista[0];

console.log(felipe);

const push = lista.push("pedro");
const unshift = lista.unshift("vitor");
const pop = lista.pop();

const indexOf = lista.indexOf("jair");
const length = lista.length;
const listIsArray = Array.isArray(lista);
const sortedNames = lista.sort();

console.log(push);
console.log(unshift);
console.log(pop);

console.log(indexOf);
console.log(length);
console.log(listIsArray);
console.log(sortedNames);