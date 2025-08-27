let num = [3, 4, 6, 10, 35, 89, 99, 7];

// for (let i = 0; i < num.length; i++) {
//   let element = num[i];
//   console.log(element);
// }

for (let i = 0; i < num.length; i++) {
  let nums = num[i];
  if (nums % 2 == 0) {
    console.log(nums, ": is odd number");
  } else {
    console.log(nums *2 , ": is even number");
  }
}
