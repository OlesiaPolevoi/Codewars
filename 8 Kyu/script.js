"use strict";

// //NOTE String repeat. Write a function called repeatStr which repeats the given string string exactly n times.

// function repeatStr(n, s) {
//   let newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(s);
//   }
//   return newArr.join("");
// }

// const test = repeatStr(6, "I");
// // "IIIIII"
// console.log(test);

// const test2 = repeatStr(5, "Hello");
// // "HelloHelloHelloHelloHello"
// console.log(test2);

// NOTE Convert number to reversed array of digits Given a random non-negative number, you have to return the digits of this number within an array in reverse order

function digitize(n) {
  let toString = "" + n;
  let newArr = toString.split("");
  let newArr2 = [];
  newArr.forEach((e) => {
    newArr2.unshift(+e);
  });
  return newArr2;
}

const test = digitize(35231);
//[1,3,2,5,3]
console.log(test);
const test2 = digitize(0);
//[0]
console.log(test2);
