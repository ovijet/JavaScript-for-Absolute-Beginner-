// *korci
// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//   factorial *= i;
//   console.log(i, factorial);
// }

// +korci
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(i, sum);
}

// -korci;
let summ = 1;
for (let i = 1; i <= 10; i++) {
  summ -= i;
  console.log(i, summ);
}

function factorial(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let result = factorial(10);

console.log(result);
