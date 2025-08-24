// let numbars = [34, 54, 45, 32, 344, 223];

// let sum = 0;
// for (let i = 0; i < numbars.length; i++) {
//   let element = numbars[i];
//   sum += element;
// }
// console.log('hight sum number is =', sum);

function getArraySum(numbars) {
  let sum = 0;
  for (let i = 0; i < numbars.length; i++) {
    let element = numbars[i];
    sum += element;
  }
  return sum;
}

let numbars = [34, 54, 45, 32, 344, 223];
let result = getArraySum(numbars);

console.log(result);
