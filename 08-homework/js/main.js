class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    static getInfo(university, course, fullName) {
        return `${fullName} - студент ${course} курсу ${university}`;
    }
    static getAverageMark([...marks]) {
        let count = marks.reduce((count, number) => {
            return count + number
        }, 0);
        return +(count / marks.length).toFixed(2);
    }
    static dismiss() {
        return this.marks = null;
    }

    get getMarks(){
        return this.marks;
    }

    set setMarks(mark){
      return this.marks = [...this.marks, mark];
    }
}

const sasha = new Student('Oxford', 1, 'Oleksndr Liubinskyy', [5,5,4,4]);
const galya = new Student('Politech', 2, 'Galyna Sakh', [4,4,5,4]);
const yura = new Student('Franko National Univer. of Lviv', 3, 'Yuriy Krupa', [3,4,5,3]);

console.log(typeof sasha);
console.log(galya);
console.log(yura);
console.log(Student.getInfo(yura.university, yura.course, yura.fullName));
sasha.setMarks = 5;
console.log(sasha.getMarks);
console.log(Student.getAverageMark(galya.marks));
console.log(Student.dismiss(yura));
console.log(yura.marks);
yura.setMarks = 6;
console.log(yura.getMarks);

