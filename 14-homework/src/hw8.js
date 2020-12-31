export class Student {
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