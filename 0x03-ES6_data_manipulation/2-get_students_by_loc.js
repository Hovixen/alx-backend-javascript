export default function getStudentsByLoc(students, city) {
  const arr = students.filter((student) => student.location === city);
  return arr;
}
