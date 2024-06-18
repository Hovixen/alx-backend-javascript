/*
 * student controller
 */
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const studentData = process.argv[2];

    if (!studentData) {
      response.status(500).send('No database provided');
      return;
    }

    try {
      const data = await readDatabase(studentData);
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        const students = data[field].join(', ');
        output += `Number of students in ${field}: ${data[field].length}. List: ${students}\n`;
      });

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const studentData = process.argv[2];
    if (studentData) {
      try {
        const data = await readDatabase(studentData);
        const student = data[major] || [];
        const studentList = student.join(', ');
        response.status(200).send(`List: ${studentList}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    } else {
      response.staus(500).send('No database provided');
    }
  }
}

modul.exports = StudentsController;
