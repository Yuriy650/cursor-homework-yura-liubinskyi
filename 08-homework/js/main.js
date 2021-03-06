class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getAverageMark() {
        let count = this.marks.reduce((count, number) => {
            return count + number
        }, 0);
        return +(count / this.marks.length).toFixed(2);
    }
    dismiss() {
        return this.marks = null;
    }
    recover() {
        return this.marks = [];
    }
    studentsIndicate() {
        if (!this.marks) {
            return `Student left the univer`;
        }
        return `${this.fullName} come back to the university`;
    }
    static getInfo(university, course, fullName) {
        return `${fullName} - student ${course} course of ${university}`;
    }
    get getMarks() {
        return this.marks;
    }
    set setMarks(mark) {
        return this.marks = [...this.marks, mark];
    }
}
//1 Створіть новий клас BudgetStudent, який повністю наслідує клас Student
class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, scholarship) {
        super(university, course, fullName, marks);
        this.scholarship = scholarship;
    }
    getScholarship(scholarship) {
        console.log(`${this.fullName} received ${scholarship} uah scholarship`);
    }
    checkMark(scholarship) {
        if (this.getAverageMark() >= 4) {
            this.getScholarship(scholarship);
        } else console.log(`${this.fullName} go away!`);
    }
    static getTimer(student) {
        student.timer = setTimeout(function getMyScholarship() {
            student.getScholarship(1000);
            student.timer = setTimeout(getMyScholarship, 10000);
        }, 10000);
    }
}
const sasha = new Student('Oxford University', 1, 'Oleksandr Ivaniv', [5, 5, 4, 4]);
const galya = new Student('Politech University', 2, 'Galyna Stankiv', [4, 4, 5, 4]);
const yura = new Student('Franko National University. of Lviv', 3, 'Yuriy Krups', [3, 4, 5, 3]);
const inna = new Student('National University. of Kyiv', 3, 'Inna Bank', [3, 3, 5, 3]);
console.log(galya);
console.log(yura);
console.log(Student.getInfo(sasha.university, sasha.course, sasha.fullName));
sasha.setMarks = 3;
console.log(sasha.getMarks);
console.log(galya.getAverageMark());
console.log(inna.dismiss());
console.log(inna.recover());
inna.setMarks = 5;
inna.setMarks = 4;
console.log(inna);
console.log(yura.getMarks);
const vitalik = new BudgetStudent('INFIZ', 4, 'Vitaliy Kovalyk', [4, 5, 3, 4]);
const anya = new BudgetStudent('Сommercial Academy', 2, 'Anna Fedor', [5, 4, 5, 5], 1500);
const ostap = new BudgetStudent('Higher School of Psyсhology', 1, 'Ostap Bender', [4, 3, 3, 4], 1200);
console.log(anya);
console.log(BudgetStudent.getInfo(vitalik.university, vitalik.course, vitalik.fullName, vitalik.marks));
//2.
//3.
vitalik.getScholarship(1000);
BudgetStudent.getTimer(ostap);
//4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
anya.checkMark(2500);
vitalik.checkMark(2500);
ostap.checkMark(2500);
//5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
vitalik.dismiss();
console.log(vitalik.studentsIndicate());
vitalik.recover();
console.log(vitalik.studentsIndicate());





