let student = {
  firstName: "henri",
  lastName: "edra",
  isAutomatic: true,
  grade: 100,
  raiseHand: function () {
    console.log(`${this.firstName} Raise Hand!`);
  },
  talk: () => console.log(`${student.firstName}`),

  engine: {
    speed: 100,
    hp: 60,
    manufacture_date: "2014-10-08",
    serial_no: "231235123",
  },
  try: ["raymunnd", "charlene"],
};

console.log(student);
