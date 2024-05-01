function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let studentFirst = new Student("Виктор", "мужской", 25);
let studentSecond = new Student("Надежда", "женский", 26);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  } else {
    this.marks = [...marks];
  }
}

Student.prototype.getAverage = function () {
    if (this.marks.length > 0) {
      return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
    } else {
      return 0;
    }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subjectName;
  this.excluded = reason;
}
