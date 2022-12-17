// 1. Write a function that outputs all even numbers from 0 to 100 using a for loop.

// function evenNumber() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// console.log(evenNumber());

// 2. Write a function that adds all odd numbers from 20 to 80 and returns the result.

// function oddNumber() {
//   for (let i = 20; i <= 80; i++) {
//     if (i % 2 === 0) {
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(oddNumber());

//3. Write a function that outputs the following pattern using a for loop.

// 1
// 22
// 333
// 4444

// function NumPattern(){
//     let num = "";

//     for (let i = 1; i <= 4; i++) {
//      for (let j = 1; j <= i; j++) {
//        num += i;
//      }
//      num += "\n";
//    }
//    console.log(num);
// }
// console.log(NumPattern())

// 4. Write a function that outputs the following pattern, using a for loop.

// function bigStar(){
// let star = "";

// for (let i = 1; i <= 5; i++){
//     star += "*"
//     console.log(star)
// }
// }
// console.log(bigStar())

// 5. Write a function that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// function multiplyBy9(){
//     let num = 9;
//     for ( let i = 0; i <= 10; i++){
//         console.log(num + "x" + i +"=" +i * num)
//     }
// }
// console.log(multiplyBy9())

// 6. Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total) based from your code in Number 5.

// let res = " x\t 1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t10"
// for (let i = 1; i <= 10; i++) {
//     res += `\n${i < 10 ? ' ' + i : i}`
//     for (let j = 1; j <= 10; j++) {
//         res += `\t${i * j >= 10 ? i*j : ' ' + i*j}`
//     }
// }
// console.log(res)

// 7. Write a function checkPalindrome() that will output if a given number is a palindrome or not. A palindromic number is the same number that is read forward and backwards.

// function reverseNum (str){
//     let splitnum = str.split("")

//     let reverse = splitnum.reverse()

//     let joinName = reverse.join("")
//     return joinName;
// }
// console.log(reverseNum("madam"))
// function checkPalindrome() {
//   var isPalindrome = function (string) {
//     if (string == string.split("").reverse().join("")) {
//       alert(string + " is palindrome.");
//     } else {
//       alert(string + " is not palindrome.");
//     }
//   };
// }
// checkPalindrome();
// function checkPalindrome(string) {
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     } else {
//       return "It is a palindrome";
//     }
//   }
// }
// console.log(checkPalindrome("1234321"));

// 8. Write a function reverseNumber() that will print a given number in reverse.

// Ex.

// Given = 129

// Output should be:

// 9
// 2
// 1

// function reverseNum (str){
//     let splitnum = str.split("")

//     let reverse = splitnum.reverse()

//     let joinName = reverse.join("\n")
//     return joinName;
// }

// console.log(reverseNum("129"))

// 9. Write a function fibonacciSeries() that will accept a number and generate the Fibonacci series for that number.

// Ex.

// Given = 7

// Fibonacci series is: 0 1 1 2 3 5 8 13 21
// function fibonacci(){
// const number = 10;
// let num1 = 7,
//   num2 = 7,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(num1);
//   nextTerm = num1 + num2;
//   num1 = num2;
//   num2 = nextTerm;
// }
// }
// console.log(fibonacci())

// 10. Write a function that will display all days in 3 weeks.

// Ex.

// Week: 1

// Day: 1

// Day: 2

// Day: 3

// Day: 4

// Day: 5

// Day: 6

// Day: 7

// Week: 2

// function weekDays(){
// for ( let x = 1; x <= 3; x++){
//     console.log( "week: " + x)
//   for ( z = 1; z<= 7; z++){
//       console.log("day " + z)
//   }

// }
// }
// console.log(weekDays())
