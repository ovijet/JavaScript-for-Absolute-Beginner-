// Task 1:
// 👉 ১ থেকে ১০ পর্যন্ত নাম্বার প্রিন্ট করো।

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Task 2:
// 👉 ১ থেকে ২০ পর্যন্ত শুধু জোড় সংখ্যা প্রিন্ট করো।

// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Task 3:

// 👉 ১ থেকে ২০ পর্যন্ত শুধু বিজোড় সংখ্যা প্রিন্ট করো।

//  for (i = 1; i <= 20; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// Task 4:

// 👉 ১ থেকে ১০ পর্যন্ত সংখ্যার যোগফল বের করো।
// Output: 55

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log('sum =', sum);

// Task 5:

// 👉 ১০ থেকে ১ পর্যন্ত উল্টো সংখ্যা প্রিন্ট করো।
// Output: 10 9 8 ... 1

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Task 6:

// 👉 একটা অ্যারের সব element প্রিন্ট করো।

// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   let element = numbers[i];
//   console.log(element);
// }

// Task 7:

// 👉 একটা অ্যারের element এর যোগফল বের করো।

let array = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  sum = sum + element;
}
console.log(sum);
