function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let studentFirst = new Student("Виктор", "мужской", 25);
let studentSecond = new Student("Надежда", "женский", 26);


Student.prototype.setSubject = function (subjectName) {
    this.subjectName = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    this.marks = [...marks];
}

Student.prototype.getAverage = function () {
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subjectName;
  this.excluded = reason;
}
