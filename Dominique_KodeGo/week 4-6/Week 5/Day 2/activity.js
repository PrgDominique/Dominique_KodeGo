// 1. For each of the exercises below, assume you are starting with the following programming object.

// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };

// Write the command to add the language "Go" to the end of the languages array.

// programming.languages.push("Go");
// console.log(programming.languages);

// Change the difficulty to the value of 7.

// programming.difficulty = 7;
// console.log(programming.difficulty);

// Using the delete keyword, write the command to remove the jokes key from the programming object.

// delete programming.jokes;
// console.log(programming);

// Write the command to add a new key called isFun and a value of true to the programming object.

// programming.isFun = true;
// console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.

// programming.languages.forEach((lang) => console.log(lang));

// Using a loop, console.log all of the keys in the programming object.

// let key = Object.keys(programming);
// console.log(key);

// Using a loop, console.log all of the values in the programming object.

// let values = Object.values(programming);
// console.log(values);

// 2. Write the Javascript code to create the following object and follow the instructions carefully.

// Create an object to hold information on your favorite movie. It should have properties for title (a string), year_released (a number), and cast (an array of strings).

// On separate lines (one console.log statement for each), log the movie information so it looks like:
// The Avengers
// Year Released: 2012
// Cast:
// Robert Downey Jr.
// Chris Evans
// Chris Hemsworth
// Scarlett Johansonn
// Mark Ruffalo

// let favoriteMovie = {
//   title: "The Avengers",
//   year_released: 2012,
//   cast: [
//     "Robert Downey Jr.",
//     "Chris Evans",
//     "Chris Hemsworth",
//     "Scarlett Johansonn",
//     "Mark Ruffalo",
//   ],
// };

//  3. Write the Javascript code to create the following object and follow the instructions carefully.

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, console.log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let books = [
  {
    title: "The Tortoise and the Hare",
    author: "Aesop",
    alreadyRead: true,
  },
  {
    title: "New Kid",
    author: "Jerry Craft",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  console.log(books.length)
  let book = books[i];
  let bookAuthandTitle = `"${book.title}" by: ${book.author}`;
  if (book.alreadyRead) {
    console.log(`You already read ${bookAuthandTitle}`);
  } else {
    console.log(`You still need to read ${bookAuthandTitle}`);
  }
}
// if (books.alreadyRead == true) {
// console.log("you already read the book");
// } else {
//  console.log(`You still need to read the "The Tortoise and the Hare"`);
// }

// console.log(book.title);

// if (book.alreadyRead == true) {
//   console.log("you already read the book");
// } else {
//   console.log(`You still need to read the "The Tortoise and the Hare"`);
// }

// 4. Write the Javascript code to create the following object and follow the instructions carefully.

// Create an object that represents a dog. It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the dog's status in each area.

// let dog = {
//     mood: [
//         "tiredness",
//         "hunger",
//         "loneliness",
//         "happiness"
// ],
//     feeling: {
//         feed,

//     }
// }
