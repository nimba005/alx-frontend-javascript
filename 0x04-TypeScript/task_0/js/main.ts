// Write an interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
// create two students
const Student1: Student = {
  firstName: 'John',
  lastName: 'Nimba',
  age: 27,
  location: 'Kenya'
};
const Student2: Student = {
  firstName: 'Catherine',
  lastName: 'Angir',
  age: 46,
  location: 'Uganda'
};
// create an array of studentsList
const studentsList: Student[] = [Student1, Student2];
// Render table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.style.background = "pink";
table.appendChild(tbody);
// append a new row to the table
studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
document.body.appendChild(table);