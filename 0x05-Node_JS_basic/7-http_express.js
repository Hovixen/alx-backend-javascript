/*
 * create complex http server using express
 */

const fs = require('fs');
const express = require('express');

const port = 1245;

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));

      const lines = data.split('\n');
      lines.shift();

      const studentByField = {};
      let totalStudents = 0;

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (firstname && lastname && age && field) {
          if (!studentByField[field]) {
            studentByField[field] = [];
          }
          studentByField[field].push(firstname);
          totalStudents += 1;
        }
      });

      let output = `Number of students: ${totalStudents}\n`;
      for (const [field, studs] of Object.entries(studentByField)) {
        output += `Number of students in ${field}: ${studs.length}. List: ${studs.join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dataFile = process.argv[2];
  if (dataFile) {
    try {
      const studentData = await countStudents(dataFile);
      res.send(`This is the list of our students\n${studentData}`);
    } catch (error) {
      res.send(error.message);
    }
  } else {
    res.send('No database provided');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
