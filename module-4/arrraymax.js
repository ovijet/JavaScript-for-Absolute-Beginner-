let mark = [20, 34, 55, 10, 78, 33, 45];
let max = mark[0];
for (let i = 0; i < mark.length; i++) {
  let element = mark[i];
  if (element > max) {
    max = element;
  }
}
console.log(max);
