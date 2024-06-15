/*
 * Reading a file syncronously with NodeJs
 */
const fs = require('fs');

function countStudents(file) {
  const studentByField = {};
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const lines = data.trim().split('\n');

    lines.shift();
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        if (!studentByField[field]) {
          studentByField[field] = [];
        }
        studentByField[field].push(firstname);
      }
    });

    const totalStudent = Object.values(studentByField).reduce((acc, stud) => acc + stud.length, 0);
    console.log(`Number of students: ${totalStudent}`);

    for (const [field, stud] of Object.entries(studentByField)) {
      console.log(`Number of students in ${field}: ${stud.length}. List: ${stud.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
