export interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstname: "madani",
  lastname: "art",
  age: 20,
  location: "Agadir, morocco"
};

const student2: Student = {
  firstname: "inyusha",
  lastname: "samuri",
  age: 12,
  location: "Tokyo, Japan"
};

const studentsList: Student[] = [
  student1,
  student2,
];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerName = document.createElement('th');
  const headerLocation = document.createElement('th');

  headerName.textContent = 'First Name';
  headerLocation.textContent = 'Location';

  headerRow.appendChild(headerName);
  headerRow.appendChild(headerLocation);
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement('tbody');

  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellLocation = document.createElement('td');

    cellName.textContent = student.firstName;
    cellLocation.textContent = student.location;

    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
});

