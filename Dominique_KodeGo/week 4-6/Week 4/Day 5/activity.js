// // 1. Write a simple JavaScript function to join all elements of the following array into a string.
// // Sample array : myColor = ["Red", "Green", "White", "Black"];
// // Expected Output :
// // "Red,Green,White,Black"

// // function joinElement() {
// //   const myColor = ["Red", "Green", "White", "Black"];

// //   let fusion = myColor.join(",");

// //   return fusion
// // }
// // console.log(joinElement());

// // 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// // Example string : 'webmaster'
// // Expected Output : 'abeemrstw'
// // Assume punctuation and numbers symbols are not included in the passed string.

// // function alphabeticalOrder(str){
// //     let text = str;
// //     let text1 = text.split("");
// //     let text2 = text1.sort();
// //     let text3 = text2.join("");

// //     return text3;
// // }
// //     let result = 'webmaster';
// //     console.log(alphabeticalOrder(result));

// // 3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string into the upper case.
// // Example string : 'the quick brown fox'
// // Expected Output : 'The Quick Brown Fox '

// // function makeItBig(string) {
// //   let text1 = string;
// //   let words = text1.split(" ");
// //   for (let i = 0; i < words.length; i++) {
// //     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// //   }
// //   let result = words.join(" ");
// //   return result;
// // }
// // let results = "the quick brown fox";
// // console.log(makeItBig(results));

// // // 4.  Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// // // Sample array : [1,2,3,4,5]
// // // Expected Output : 2,4

// // function findTheSecondNum(Array_num) {
// //   Array_num.sort(function (x, y) {
// //     return x - y;
// //   });
// //   let num1 = [Array_num[0]];
// //   let result = [];

// //   for (let i = 1; i < Array_num.length; i++) {
// //     if (Array_num[i - 1] !== Array_num[i]) {
// //       num1.push(Array_num[i]);
// //     }
// //   }
// //   result.push(num1[1], num1[num1.length - 2]);
// //   return result.join(",");
// // }
// // const array = [1, 2, 3, 4, 5];
// // console.log(findTheSecondNum(array));

// // // 5.  Write a JavaScript function to find the first not repeated character.
// // // Sample arguments : 'abacddbec'
// // // Expected output : 'e'

// // function firstNonRepeatingCharacter(str) {
// //   for (let i = 0; i < str.length; i++) {
// //     let char = str[i];
// //     if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
// //       return char;
// //     }
// //   }
// //   return str;
// // }

// // let result = "abacddbec";
// // console.log(firstNonRepeatingCharacter(result));

// // // 6. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// // // Sample arguments : 'muchas gracias', 'a'
// // // Expected output : 3

// // function countLetter(str, letter) {
// //   let countletter = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] === letter) {
// //       countletter += 1;
// //     }
// //   }
// //   return countletter;
// // }

// // console.log(countLetter("muchas gracias", "a"));

// // // 7. Write a JavaScript function to remove vowel characters from a string.
// // // Example string : "manila bay"
// // // Expected Output : "mnl by"

// // function removeVowel(str) {
// //   let text = str;

// //   const vowel = text.replace(/[aeiou]/gi, "");

// //   return vowel;
// // }
// // let result = "manila bay";
// // console.log(removeVowel(result));

// // // 8. Write a JavaScript function to compute the least common multiple (GCD) of two positive integers.

// // function gcd_two_numbers(x, y) {
// //   if (typeof x !== "number" || typeof y !== "number") return false;
// //   x = Math.abs(x);
// //   y = Math.abs(y);
// //   while (y) {
// //     var t = y;
// //     y = x % y;
// //     x = t;
// //   }
// //   return x;
// // }

// // console.log(gcd_two_numbers(12, 13));

// // // 9. Write a JavaScript function to merge two arrays and removes all duplicate elements.

// // // Test data :
// // // var array1 = [1, 2, 3];
// // // var array2 = [2, 30, 1];
// // // console.log(merge_array(array1, array2));
// // // [3, 2, 30, 1]

// // function mergeArray() {
// //   const array1 = [1, 2, 3];
// //   const array2 = [2, 30, 1];

// //   let merge = array1.concat(array2);

// //   let removeDuplicate = [...new Set(merge)];
// //   return removeDuplicate;
// // }
// // console.log(mergeArray());

// // // 10. Write a JavaScript function that returns a random element from a passed array.

// // function randomElement(array){
// //     return array[Math.floor(Math.random()*items.length)];
// // }
// // let items = [120, 30, 50, 80, 200]
// // console.log(randomElement(items));

// // 11. Write a JavaScript function to check if an array contains a specific element.

// // Test data :
// // arr = [2, 5, 9, 6];
// // console.log(contains(arr, 5));
// // [True]

// // function checkArray() {
// //   const arr = [2, 5, 9, 6];

// //   let contain = arr.includes(5);
// //   console.log(contain);
// // }
// // console.log(checkArray());

// // 12. Write a JavaScript function to concatenate a given string n times (default is 1).
// // Test Data :
// // console.log(repeat('Ha!'));
// // console.log(repeat('Ha!',2));
// // console.log(repeat('Ha!',3));
// // "Ha!"
// // "Ha!Ha!"
// // "Ha!Ha!Ha!"

// // function repeat(str, count) {
// //   if (typeof count == "undefined") {
// //     count = 1;
// //   }
// //   return count < 1 ? "" : new Array(count + 1).join(str);
// // }
// // console.log(repeat("Ha!", 3));

