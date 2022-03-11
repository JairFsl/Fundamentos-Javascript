const todos = [
  (ob1 = {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  }),
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

const todosJSON = JSON.stringify(todos);
const todosListJSON = JSON.parse(todosJSON);

console.log(todos);
console.log(todosJSON);
console.log(todosListJSON);
