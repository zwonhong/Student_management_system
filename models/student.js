const Person = require('./person');

class Student extends Person {
    constructor(name, age, studentId, major) {
        super(name, age);
        this.studentId = studentId;
        this.major = major;
    }
}

module.exports = Student;