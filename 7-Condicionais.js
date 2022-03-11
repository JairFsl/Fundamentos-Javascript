// IF, ELSE IF, ELSE
const sum = 1 + 1;

if (sum === 2) {
  console.log("sum is 2!");
} else if (sum === 3) {
  console.log("sum is 3!");
} else {
  console.log("sum is not 2!");
}

let number = sum === 2 ? 2 : 4;
/* 
if (sum === 2) {
  number = 2;
} else {
  number = 4;
}
 */
console.log(number);

// && = AND
// || = OR
const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
  console.log("sum1 is 4 and sum2 is 6!");
}

if (sum1 === 4 || sum2 === 6) {
  console.log("sum1 is 4 or sum2 is 6!");
}

// Switch
const car = "Ferrari";

switch (car) {
  case "Mercedes":
    console.log("Mercedes is fast!");
    break;
  case "Ferrari":
    console.log("Ferrari is red!");
    break;
  case "Redbull":
    console.log("Redbull is the champion!");
    break;
}
