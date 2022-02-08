"use strict";

//NOTE Square Every Digit: square every digit of a number and concatenate them. Ex: if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1 squared is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let numToString = num.toString();
  let newArr = numToString.split("");
  let newArr2 = newArr.map((n) => n ** 2);
  return +newArr2.join("");
}

let test = squareDigits(3212);
// 9414
console.log(test);
