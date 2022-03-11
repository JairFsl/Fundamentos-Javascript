const person = {
  firstName: "Jair",
  lastName: "Francisco",
  age: "17",
  hobbies: ["jogar", "treinar", "estudar"],
  dog: {
    age: 2,
    name: "Luna",
  },
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

//Mesmo que acima
const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,
  dog: { name: dogName, age: dogAge },
} = person;
//

const lastHobbie = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

//console.log(lastHobbie);
console.log(person.hobbies[2]);

console.log("------------------------------");

//console.log(person.dog.name);
console.log(dogName);
//console.log(person.dog.age);
console.log(dogAge);

console.log("Lista de Objetos:");

const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Jogar",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const idOfLastTodos = todos[2].id;
const descriptionOfLastTodos = todos[2].description;
const isCompletedOfLastTodos = todos[2].isCompleted;

console.log(todos)

console.log("Cada Objeto da lista de objetos:")
console.log(todos[0])
console.log(todos[1])
console.log(todos[2])

// Cada atributo do objeto
// console.log(idOfLastTodos);
// console.log(descriptionOfLastTodos);
// console.log(isCompletedOfLastTodos);
