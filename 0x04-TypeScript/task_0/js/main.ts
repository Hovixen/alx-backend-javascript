interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Iterate over the students array and create table rows
    studentsList.forEach(student => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");
        
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
});

