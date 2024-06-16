/*
 * Reading a file asynchronously
 */
const fs = require('fs').promises;

function countStudents(file) {
  return fs.readFile(file, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      lines.shift();

      const studentByField = {};

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

      for (const [field, studs] of Object.entries(studentByField)) {
        console.log(`Number of students in ${field}: ${studs.length}. List: ${studs.join(',')}`);
      }
    }).catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
