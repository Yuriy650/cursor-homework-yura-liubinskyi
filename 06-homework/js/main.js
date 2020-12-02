const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] -
// яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери,
// а _ – замінити на пробіл

const getSubjects = (student) => {
    let subjectArr = Object.keys(student.subjects);
    //console.log(subjectArr);
    subjectArr = subjectArr.map((item) => (item[0].toUpperCase() + item.slice(1).toLowerCase()).split('_').join(' '))
    return subjectArr;
}
console.log(`Повертає список предметів для конкретного студента: ${getSubjects(students[0])}`);

//Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку
//по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.
//    Можна використовувати функції, написані у попередніх домашніх завданнях :)

const getAverage = (item) => {
    let count = item.reduce((count, mark) => count + mark, 0);
    return +(count / item.length).toFixed(2);
}
const getAverageMark = (student) => {
    let subjectsMark = Object.values(student.subjects);
    let marks = subjectsMark[0].concat(subjectsMark[1], subjectsMark[2]);
    return getAverage(marks);
}
console.log(`Повертає середню оцінку: ${getAverageMark(students[0])}`);

//Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} –
//яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
//ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = (student) => {
    let copyStudent = {...student};
    copyStudent.subjects = getAverageMark(copyStudent);
    return Object.assign({}, copyStudent);
}
console.log(getStudentInfo(students[0]));

//console.log(students);
//Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]" +
//" – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (students) => {
    return students.map((students) => students.name).sort();
}
console.log(`Повертає імена студентів у алфавітному порядку: ${getStudentsNames(students)}`);
//Створіть функцію getBestStudent(students) --> "Anton" –
//яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => {
    const studentSubjectsAverage = students.map((s) => getAverageMark(s));
    let maxMark = 0;
    let bestStudent;
    for (let item of studentSubjectsAverage) {
        if (item > maxMark) maxMark = item;
    }
    const studInfo = students.map((s) => getStudentInfo(s));
    console.log(studInfo);
    for (let prop of studInfo) {
        if (prop.subjects === maxMark) bestStudent = prop.name;
    }
    return bestStudent;
}
console.log(`Найкращий студент: ${getBestStudent(students)}`);
//Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } –
//яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const cutSpace = (text) => {
    let subAmountCurrency = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            subAmountCurrency += text[i];
        }
    }
    return subAmountCurrency;
}

const countLetter = (letter, word) => {
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    let count = 0;
    for (let item of word) {
        if (letter === item) {
            count += 1;
        }
    }
    return count;
}

const calculateWordLetters = (word) => {
    word = cutSpace(word);
    let wordArr = word.toLowerCase().split('');
    let newWordArr = wordArr.map((letter) => [letter, countLetter(letter,word)]);
    let wordLettersObject = {};
    for(let i=0; i<newWordArr.length;i++){
        wordLettersObject[newWordArr[i][0]] = newWordArr[i][1];
    }
return wordLettersObject;
}
console.log(calculateWordLetters('Lviv '));
















