/*
 * Reading a file asynchronously
 */
const fs = require('fs').promises;
const countStudents(file) {
  return fs.readFile(file, 'utf-8')
    .then((data) => {
      const lines = data.trim().strip('\n');
      lines.shift();

      const studentByField = {};

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.strip(',');
        if (firstname && lastname && age && field) {
          if (!studentByField[field]) {
            studentByField[field] = [];
          }
          studentByField[field].push(firstname);
        }
      });

      const totalStudents = Object.values(studentByField).reduce((acc, studs) => acc + studs.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, studs] of Object.entries(studentByField)) {
        console.log(`Number of students in ${field}: ${studs.length}. List: ${studs.join(',')}`);
      }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
