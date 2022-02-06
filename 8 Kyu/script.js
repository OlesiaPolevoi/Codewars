"use strict";

//NOTE String repeat. Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(s);
  }
  return newArr.join("");
}

let test = repeatStr(6, "I");
// "IIIIII"
console.log(test);

let test2 = repeatStr(5, "Hello");
// "HelloHelloHelloHelloHello"
console.log(test2);
