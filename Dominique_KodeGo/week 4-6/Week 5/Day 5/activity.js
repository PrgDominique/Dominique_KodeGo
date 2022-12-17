function isPalindrome(str) {
  // Base case: if the string is empty or has only one character, it is a palindrome
  if (str.length <= 1) {
    return "Palindrome";
  }
  // Recursive case: if the first and last characters of the string are the same, check if the rest of the string is a palindrome
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  // If the first and last characters are not the same, the string is not a palindrome
  return "Not a Palindrome";
}

// Check if the string is a palindrome
let result = isPalindrome("racecar");

// Output: true (the string reads the same backward as forward)
console.log(result);





// Write a recursive function that returns the highest 
// element AND the lowest element in the array.