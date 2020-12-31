export const getGirls = (students, girlsName, boysName) => {
    let copyStudents = [...students];
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
