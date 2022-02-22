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

// // NOTE Convert number to reversed array of digits Given a random non-negative number, you have to return the digits of this number within an array in reverse order

// function digitize(n) {
//   let toString = "" + n;
//   let newArr = toString.split("");
//   let newArr2 = [];
//   newArr.forEach((e) => {
//     newArr2.unshift(+e);
//   });
//   return newArr2;
// }

// const test = digitize(35231);
// //[1,3,2,5,3]
// console.log(test);
// const test2 = digitize(0);
// //[0]
// console.log(test2);

// //NOTE Beginner Series #1 School Paperwork. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else {
//     return m * n;
//   }
// }
// const test = paperwork(5, 5);
// // 25
// console.log(test);
// const test2 = paperwork(5, -5);
// //0
// console.log(test2);
// const test3 = paperwork(-5, -5);
// // 0
// console.log(test3);

// //NOTE There was a test in your class and you passed it. Congratulations!
// //But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!
// // Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   let sum = classPoints.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
//   }, 0);
//   let average = sum / classPoints.length;
//   return yourPoints > average;
// }

// const test1 = betterThanAverage([2, 3], 5);
// // true
// console.log(test1);

// const test2 = betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
// //true
// console.log(test2);

// //NOTE  A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// // Return True if yes, False otherwise :)

// function hero(bullets, dragons) {
//   if (bullets < dragons) {
//     return false;
//   }

//   let estimatedBullets = dragons * 2;
//   if (estimatedBullets === bullets || estimatedBullets < bullets) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const test1 = hero(10, 5);
// // true
// console.log(test1);
// const test2 = hero(7, 4);
// // false
// console.log(test2);
// const test3 = hero(0, 1);
// //   false
// console.log(test3);

// const test4 = hero(7, 4);
// // false
// console.log(test4);

// //NOTE Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//   if (number % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }
// // even_or_odd(7); //odd

// // even_or_odd(-72); //even
// // even_or_odd(0);

// console.log(6 % 2);
