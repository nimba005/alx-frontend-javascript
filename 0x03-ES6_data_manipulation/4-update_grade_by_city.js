export default function updateStudentGradeByCity(studentList, city, newGrade) {
  // filter to get students in the specified city
  const studentByCity = studentList.filter((student) => student.location === city);
  // use map to update grades
  const updatedStudents = studentByCity.map((student) => {
    // find the grade object for the student in newGrades array
    const gradeObject = newGrade.find((grade) => grade.studentId === student.id);
    // if grade is found, update else set N/A
    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';
    // return a new obj with updated grade
    return {
      ...student,
      grade: updatedGrade
    };
  });
  return updatedStudents;
}