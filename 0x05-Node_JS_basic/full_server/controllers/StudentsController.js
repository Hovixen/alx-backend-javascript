/*
 * student controller
 */
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const studentData = process.argv[2];
    if (studentData) {
      try {
        const data = await readDatabase(studentData);
        const fields = Object.keys(data).sort((a, b) => {
          a.toLowerCase().localeCompare(b.toLowerCase());
        });

        const output = fields.map((field) => {
          const students = data[field].join(', ');
          return `Number of students in ${field}: ${students.length}. List: ${students}\n`;
        });
        response.statusCode = 200;
        response.send(`This is the list of our students\n${output}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    } else {
      response.status(500).send('No database provided');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.param;

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

export default StudentsController;
