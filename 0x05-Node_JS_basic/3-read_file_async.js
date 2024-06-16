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

      const students = Object.values(studentByField).reduce((acc, stud) => acc + stud.length, 0);
      console.log(`Number of students: ${students}`);

      for (const [field, studs] of Object.entries(studentByField)) {
        console.log(`Number of students in ${field}: ${studs.length}. List: ${studs.join(', ')}`);
      }
    }).catch((error) => {
      console.error('Cannot load the database');
      throw error;
    });
}

module.exports = countStudents;
