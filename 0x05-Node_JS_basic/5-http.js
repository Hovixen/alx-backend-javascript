/*
 * more complex http server using node's http module
 */

const fs = require('fs').promises;
const http = require('http');

const port = 1245;

async function countStudents(file) {
  try {
    const data = await fs.readFile(file, 'utf-8');
    const lines = data.trim().split('\n');
    const studentByField = {};
    let totalStudents = 0;

    lines.shift();

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
    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const filePath = process.argv[2];
    if (filePath) {
      try {
        const studentData = await countStudents(filePath);
        res.end(studentData);
      } catch (error) {
        res.end(error.message);
      }
    } else {
      res.end('No database provided');
    }
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = app;
