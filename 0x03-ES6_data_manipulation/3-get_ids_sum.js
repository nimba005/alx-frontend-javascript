export default function getStudentIdSum(studentList) {
  const sumOfIds = studentList.reduce((acc, student) => acc + student.id, 0);
  return sumOfIds;
}