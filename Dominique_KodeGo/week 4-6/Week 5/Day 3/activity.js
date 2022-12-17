// const A = ["green", "white", "red"];

// const B = [];

// const C = [];

// C.push(A.pop());
// B.push(A.pop());
// B.push(C.pop());
// C.push(A.pop());
// A.push(B.pop());
// C.push(B.pop());
// C.push(A.pop());
// console.log(A, B, C);

// function enqueue(queue, item) {
//   queue.push(item);
// }

// function dequeue(queue) {
//   return queue.shift();
// }

// const students = [
//   { name: "John Doe", batch_code: "WD31" },
//   { name: "Barack Obama", batch_code: "WD30" },
//   { name: "James Reid", batch_code: "WD31" },
//   { name: "Sam Fried", batch_code: "WD31" },
//   { name: "Donald Trump", batch_code: "WD29" },
//   { name: "Elon Musk", batch_code: "WD30" },
//   { name: "Bryl Lim", batch_code: "WD29" },
//   { name: "Morgan Freeman", batch_code: "WD29" },
//   { name: "Tony Stark", batch_code: "WD30" },
// ];

// const wd29 = [];

// const wd30 = [];

// const wd31 = [];

// // console.log(students[stdnt]);
// // let temp = students.shift();
// // temp.push(wd29);
// // console.log(wd29);

// for (let stdnt of students) {
//   let student = students[stdnt];
//   student = dequeue(student);

//   console.log(student);
//   if (student.batch_code === "WD29") {
//     console.table(student);
//     student = dequeue(students);
//   }

// for (let stdnt in students) {
//   console.log(students[stdnt]);
// }
// student.push(wd29);
// } else if (student.batch_code === "WD30") {
//   student.shift();
//   student.push(wd30);
// } else {
//   student.shift();
//   student.push(wd31);
// }
// console.log(student);
// console.log(wd29);

//accept list of user with a crud setup

function enqueue(queue, item) {
  queue.push(item);
}

function dequeue(queue) {
  return queue.shift();
}

const students = [
  { name: "John Doe", batch_code: "WD31" },
  { name: "Barack Obama", batch_code: "WD30" },
  { name: "James Reid", batch_code: "WD31" },
  { name: "Sam Fried", batch_code: "WD31" },
  { name: "Donald Trump", batch_code: "WD29" },
  { name: "Elon Musk", batch_code: "WD30" },
  { name: "Bryl Lim", batch_code: "WD29" },
  { name: "Morgan Freeman", batch_code: "WD29" },
  { name: "Tony Stark", batch_code: "WD30" },
];

const wd29 = [];
const wd30 = [];
const wd31 = [];

for (let i = 0; i < students.length; i++) {
  const student = dequeue(students);
  if (student.batch_code === "WD29") {
    enqueue(wd29, student);
  } else if (student.batch_code === "WD30") {
    enqueue(wd30, student);
  } else if (student.batch_code === "WD31") {
    enqueue(wd31, student);
  }
}

console.table(wd29);
console.table(wd30);
console.table(wd31);
