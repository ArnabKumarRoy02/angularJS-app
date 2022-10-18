const parser = require('simple-excel-to-json')
const json2xls = require('json2xls');
const doc = parser.parseXls2Json('./Assignment.xlsx')[0];
const fs = require("fs");

console.log(doc);

/*
    1. Sorting this doc based on cgpa
    2. Each elective will have 50 seats
*/

const docWithSort = [...doc];
const sortedDocument = docWithSort.sort((a, b) => {
    return b.CGPA - a.CGPA;
})

// console.log(sortedDocument);

const assignElective = sortedDocument.map((student) => {
    let number = 50;
    for (let i = 0; i < number; i++) {
        student.Elective1 = student.OPTION_1;
    }
})

console.log(assignElective);

const xlsData = json2xls(sortedDocument);

fs.writeFileSync('assignjob.xlsx', xlsData, 'binary');

// const totalCgpa = doc.reduce((prevValue, current) => {
//     prevValue += current.CGPA;
//     return prevValue;
// }, 0)

// const average = totalCgpa / doc.length;

// const docWithAverage = [...doc];
// const gradeDocument = docWithAverage.map((student) => {
//     if (student.CGPA >= 9.5) {
//         student.GRADE = "A+"
//     }
//     else if (student.CGPA >= 9.2 && student.CGPA < 9.5) {
//         student.GRADE = "A";
//     }
//     else if (student.CGPA >= 8.8 && student.CGPA < 9.2) {
//         student.GRADE = "B";
//     }
//     else if (student.CGPA >= 8.2 && student.CGPA < 8.8) {
//         student.GRADE = "C";
//     }
//     else if (student.CGPA >= 7 && student.CGPA < 8.2) {
//         student.GRADE = "D";
//     }
//     else if (student.CGPA < 7) {
//         student.GRADE = "E";
//     }
//     return student;
// })

// const filteredDocument = gradeDocument.filter((student) => {
//     if (student.CGPA > 8) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })

// console.log(gradeDocument);

// docWithAverage.push({CGPA: average, NAME: "Avg"});
// const xlsData = json2xls(filteredDocument);


// fs.writeFileSync('filtered.xlsx', xlsData, 'binary');