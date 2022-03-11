//Strings
const message = "Hello World!";

console.log(message.length);

const firstName = "Jair";
const lastName = "Francisco";

const names = "Jair,Francisco,Silva";

console.log("Meu nome é " + firstName + " " + lastName);
console.log(`Meu nome é ${firstName} ${lastName}`);

console.log(
  "Meu nome é " + firstName.toUpperCase() + " " + lastName.toLowerCase()
);
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

//console.log(names.split(","));

let list = names.split(",");

console.log(list);

const number = 5;

console.log(number * 2);

const tipoString = number.toString();

console.log(typeof tipoString);