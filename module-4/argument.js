function giaOhmy(num1, num2) {
  //   console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    sum += element;
  }
  return sum;
}
let result = giaOhmy(3, 4, 5, 10, 20);
console.log('sum =',result);
