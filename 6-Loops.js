/* 
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

 */

const cars = ["Ferrari", "Mercedes", "Redbull", "Aston Martin"];

console.log("Método 1:");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.log("Método 2:");
for (let car of cars) {
  console.log(car);
}

console.log("Método 3:");
cars.forEach(function (car, index) {
  console.log(car, index);
});

let index = 0;

while (index < 10) {
  console.log("Index é menor do que 10!");
  //index = index + 1;
  //index += 1;
  index++;
}

const person = {
  name: "Jair",
  age: 17,
};

for (property in person) {
  console.log(property, person[property]);
}
