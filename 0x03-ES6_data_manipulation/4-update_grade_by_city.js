export default function updateStudentGradeByCity(studentList, city, grade) {
  const studentFilter = studentList.filter((student) => student.location === city);

  const updateStudent = studentFilter.map((student) => {
    const gradeList = grade.find((studentgrade) => studentgrade.studentId === student.id);

    const studentGrade = gradeList ? gradeList.grade : 'N/A';
    return { ...student, studentGrade };
  });

  return updateStudent;
}
