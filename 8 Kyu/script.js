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

// //NOTE Rock Paper Scissors
// // Let's play! You have to return which player won! In case of a draw return Draw!.

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   }
//   if (p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!";
//   }
//   if (p1 === "scissors" && p2 === "rock") {
//     return "Player 2 won!";
//   }
//   if (p1 === "paper" && p2 === "rock") {
//     return "Player 1 won!";
//   }
//   if (p1 === "paper" && p2 === "scissors") {
//     return "Player 2 won!";
//   }
//   if (p1 === "rock" && p2 === "scissors") {
//     return "Player 1 won!";
//   }
//   if (p1 === "rock" && p2 === "paper") {
//     return "Player 2 won!";
//   }

//   if (p2 === "scissors" && p1 === "paper") {
//     return "Player 2 won!";
//   }
//   if (p2 === "scissors" && p1 === "rock") {
//     return "Player 1 won!";
//   }
//   if (p2 === "paper" && p1 === "rock") {
//     return "Player 2 won!";
//   }
//   if (p2 === "paper" && p1 === "scissors") {
//     return "Player 1 won!";
//   }
//   if (p2 === "rock" && p1 === "scissors") {
//     return "Player 2 won!";
//   }
//   if (p2 === "rock" && p1 === "paper") {
//     return "Player 2 won!";
//   }
// };

// let test = rps("paper", "rock"); // Player 1 won!
// console.log(test);
// // rps("scissors", "rock"); // Player 2 won!
// // rps("paper", "paper"); // Draw!

// //NOTE Reversed Strings - Complete the solution so that it reverses the string passed into it.
// // 'world'  =>  'dlrow'
// // 'word'   =>  'drow'

// // function solution(str) {
// //   let splitStr = str.split("");
// //   console.log(splitStr);
// //   let reverseArr = splitStr.reverse();
// //   console.log(reverseArr);
// //   let combineArr = reverseArr.join("");
// //   console.log(combineArr);
// // }
// // //combined version
// // function solution(str) {
// //   return str.split("").reverse().join("");
// // }
// //using for loop
// function solution(str) {
//   let newStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// let test = solution("world");
// console.log(test);

// //NOTE

// // Are You Playing Banjo? Create a function which answers the question "Are you playing banjo?".// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// // The function takes a name as its only argument, and returns one of the following strings: name + " plays banjo"
// // name + " does not play banjo"

// // function areYouPlayingBanjo(name) {
// //   let nameLowerCase = name.toLowerCase();
// //   if (nameLowerCase[0] === "r") {
// //     return name + " plays banjo";
// //   } else {
// //     return name + " does not play banjo";
// //   }
// // }

// // Using ternary operator
// function areYouPlayingBanjo(name) {
//   return (
//     name +
//     (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
//     " banjo"
//   );
// }
// let test = areYouPlayingBanjo("Bravo");
// //"bravo does not play banjo");
// console.log(test);
// let test1 = areYouPlayingBanjo("rolf");
// console.log(test1);

// //NOTE Convert a Number to a String!

// // 123 --> "123"
// // 999 --> "999"

// function numberToString(num) {
//   return num.toString();
// }

// let test = numberToString(67);
// console.log(test);
// console.log(typeof test);

// //NOTE Sum Mixed Array
// //Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

// function sumMix(x) {
//   console.log(x);
//   //array values to num
//   //return sum as number
//   let sum = 0;
//   x.forEach((e) => {
//     sum += +e;
//   });
//   return sum;
// }

// const test = sumMix([9, 3, "7", "3"]);
// //22
// console.log(test);

// const test2 = sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);
// // 41;
// console.log(test2);

//NOTE // Find Maximum and Minimum Values of a List

var min = function (list) {
  let min = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
};

var max = function (list) {
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
};

let test = min([-52, 56, 30, 29, -54, 0, -110]);
// -110;
console.log(test);
let test1 = min([42, 54, 65, 87, 0]);
// 0);
console.log(test1);

let test2 = max([4, 6, 2, 1, 9, 63, -134, 566]);
// 566);
console.log(test2);

let test3 = max([5]);
// 5);
console.log(test3);
