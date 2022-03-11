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

//Avançados
console.log("Avançados: Map, Filter, Reduce");

//Map

console.log(
  "Map: Realiza a condição com cada um dos números da lista separadamente!"
);
const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(numbers);
console.log(numbersMultipliedByTwo);

//Filter

console.log(
  "Filter: Seleciona todos os números dentro da condição específica!"
);

const ages = [3, 4, 6, 7, 12, 31, 42];

const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

console.log(ages);
console.log(evenAges);

//Reduce

console.log(
  "Reduce: Usa todos os números da lista para realizar a operação específica!"
);

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
});

console.log(ages);
console.log(sumOfAges);