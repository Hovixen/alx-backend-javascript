export default function updateStudentGradeByCity(studentList, city, studentGrade) {
  const studentFilter = studentList.filter((student) => student.location === city);

  const updateStudent = studentFilter.map((student) => {
    const gradeList = studentGrade.find((studentgrade) => studentgrade.studentId === student.id);

    const grade = gradeList ? gradeList.grade : 'N/A';
    return { ...student, grade };
  });

  return updateStudent;
}
