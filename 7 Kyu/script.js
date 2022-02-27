"use strict";

// //NOTE Square Every Digit: square every digit of a number and concatenate them. Ex: if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1 squared is 1.
// // Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//   let numToString = num.toString();
//   let newArr = numToString.split("");
//   let newArr2 = newArr.map((n) => n ** 2);
//   return +newArr2.join("");
// }

// let test = squareDigits(3212);
// // 9414
// console.log(test);

// //NOTE Odd or Even?
// // Given a list of integers, determine whether the sum of its elements is odd or even.
// // Give your answer as a string matching "odd" or "even".
// // If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  //sum array
  // % 2 even or odd
  let sum = array.reduce((accumulator, current) => accumulator + current, 0);

  // if (sum % 2 === 0) {
  //   return "even";
  // } else {
  //   return "odd";
  // }
  return sum % 2 === 0 ? "even" : "odd";
}

// function oddOrEven(arr) {
//   return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }

let test = oddOrEven([1]);
// 'odd'
console.log(test);
let test2 = oddOrEven([0, 1, 5]);
// 'even'
console.log(test2);
let test3 = oddOrEven([0, -1, 2]);
// 'odd'
console.log(test3);
let test1 = oddOrEven([]);
//'even'
console.log(test1);
