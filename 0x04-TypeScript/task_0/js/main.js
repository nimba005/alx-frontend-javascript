 // create two students
 var student1 = {
  firstName: 'John',
  lastName: 'Nimba',
  age: 26,
  location: 'Kenya'
 };
 var student2 = {
  firstName: 'Catherine',
  lastName: 'Angir',
  age: 46,
  location: 'Uganda'
 };
 // create an array named studentsList
 var studentsList = [student1, student2];
 // Render table using vanilla JavaScript
 var table = document.createElement('table');
 var tbody = document.createElement('tbody');
 table.style.background = "pink";
 table.appendChild(tbody);
 // append a new row to the table
 studentsList.forEach(function (student) {
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  var locationCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  nameCell.style.border = "1px solid pink";
  locationCell.style.padding = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
document.body.appendChild(table);