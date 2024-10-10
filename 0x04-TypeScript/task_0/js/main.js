// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Create two student objects
var firstStudent = {
    firstName: "Adegbenga",
    lastName: "Adesuyi",
    age: 66,
    location: "Nigeria"
};
var secondStudent = {
    firstName: "Titi",
    lastName: "Adesuyi",
    age: 56,
    location: "Nigeria"
};
// Create an array of students
var studentsList = [firstStudent, secondStudent];
// Using Vanilla js to create and display the table
var table = document.createElement('table');
var headerRow = table.insertRow();
headerRow.innerHTML = '<th>First Name</th><th>Locations</th>';
// Create a new row for each student and append it to the table
studentsList.forEach(function (student) {
    var row = table.insertRow();
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
});
// Append the table to the body of the HTML document
document.body.appendChild(table);
