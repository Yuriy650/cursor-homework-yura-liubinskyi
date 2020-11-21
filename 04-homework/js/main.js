const students = ['Олександр', 'Ігор', 'Лука', 'Олена', 'Елізабет', 'Кармен', 'Олексій', 'Світлана', 'Антон', 'Любов', 'Галя', 'Юра'];

const themes = ['Диференціальні рівняння', 'Теорія автоматів', 'Алгоритми і структури даних', 'Математичний аналіз', 'ТІМС', 'РЧП'];

const marks = [5, 5, 4, 3, 4, 5, 3, 4, 4];


const getGirls = (students) => {

    let copyStudents = [...students];

    let girlsName = ['Любов', 'Либідь', 'Елізабет', 'Адель', 'Мадлен', 'Кармен'];

    let boysName = ['Кузьма', 'Абдула', 'Лука', 'Олекса', 'Юра'];

    let boys = [];

    let girls = [];

    for (let i = 0; i < copyStudents.length; i++) {

        if ((copyStudents[i][copyStudents[i].length - 1] === 'а' || copyStudents[i][copyStudents[i].length - 1] === 'я' || girlsName.includes(copyStudents[i])) &&

            !boysName.includes(copyStudents[i])) {

            girls.push(copyStudents[i]);

        } else {

            boys.push(copyStudents[i]);
        }

    }

    return girls;

}



const getBoys = (students) => {

    let copyStudents = [...students];

    let girlsName = ['Любов', 'Либідь', 'Елізабет', 'Адель', 'Кармен', 'Мадлен'];

    let boysName = ['Кузьма', 'Абдула', 'Лука', 'Олекса', 'Юра'];

    let girls = [];

    let boys = [];

    for (let i = 0; i <= copyStudents.length-1; i++) {

        if ((copyStudents[i][copyStudents[i].length - 1] !== 'а' && copyStudents[i][copyStudents[i].length - 1] !== 'я' ||
            boysName.includes(copyStudents[i])) && !girlsName.includes(copyStudents[i])) {

            boys.push(copyStudents[i]);

        } else {

            girls.push(copyStudents[i]);
        }

    }

    return boys;

}





const getPairs = (students) => {

   let newCopyStudents = [...students];

   let girls = getGirls(newCopyStudents);

   let boys = getBoys(newCopyStudents);

   let studentsPairs = [];

   for (i = 0; i < newCopyStudents.length/2; i++) {

       studentsPairs[i] = [boys[i], girls[i]];
   }


    return studentsPairs;

}






const getPairsThemes = (students, themes) => {

    let copyThemes = [...themes];

    let pairs = getPairs(students);

    //console.log(pairs.length);

    let pairsProjects = [];

    for (let i = 0; i < pairs.length; i++) {

        pairs[i] = pairs[i].join(' i ');
    }

    for (let i=0; i < themes.length; i++) {

        pairsProjects[i] = [pairs[i], copyThemes[i]];

    }

    return pairsProjects;

}





const getStudentsMarks = (students, marks) => {

    let copyStudents = [...students];

    let studentsMarks = [];

    for(let i = 0; i < copyStudents.length; i++) {

        marks[i] = marks[Math.floor(marks.length*Math.random())];

        studentsMarks[i] = [copyStudents[i], marks[i]];
    }

    return studentsMarks;

 }




const getPairsThemesMarks = (students, themes) => {

    let pairsProjects = getPairsThemes(students, themes);

    //let pairsThemesMarks = [];

    let marks;

    for (let i = 0; i < pairsProjects.length; i++) {

        marks = Math.ceil(Math.random()*5);

       pairsProjects[i].push(marks);

    }

    return pairsProjects;
}




console.log(getGirls(students));

console.log(getBoys(students));

console.log(getPairs(students));

console.log(getPairsThemes(students, themes));

console.log(getStudentsMarks(students, marks));

console.log(getPairsThemesMarks(students, themes));






