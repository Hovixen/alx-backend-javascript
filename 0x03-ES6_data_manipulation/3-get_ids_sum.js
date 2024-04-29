export default function getStudentIdsSum(studentId) {
  return studentId.reduce((accumulator, student) => accumulator + student.id, 0);
}
