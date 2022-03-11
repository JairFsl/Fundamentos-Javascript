function sum(a, b) {
  console.log(a + b);
}

// sum(2, 10);
const sumValue = sum(4, 2);
// console.log(sumValue);

const sumArrow = (a, b = 10) => a + b;
/* const sumArrow = (a, b = 10) => {
  return a + b;
};
 */
const valueArrow = sumArrow(4);

console.log(valueArrow);
