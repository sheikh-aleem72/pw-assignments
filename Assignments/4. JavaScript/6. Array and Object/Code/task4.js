/**
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
 */

const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

console.log("Original Student List", students);
console.log("----------------------------------------------------------");

// a. Add student info function.
function addStudent(studentInfo) {
  students.push(studentInfo);
  console.log("Student information added successfully!");
  return;
}

addStudent({
  id: 4,
  firstName: "Tom",
  lastName: "Cruise",
  age: 24,
  grade: "A",
});
console.log(students);
console.log("----------------------------------------------------------");

// b. Update student info function.
function updateInfo(studentId, updatation) {
  let indexOfId = students.findIndex((item) => item.id === studentId);
  if (indexOfId !== -1) {
    students[indexOfId] = { ...students[indexOfId], ...updatation };
    console.log("Information of students is updated successfully!");
  } else {
    console.log("Id not found");
  }
}

updateInfo(3, { grade: "C", age: 30 });
console.log(students);
console.log("----------------------------------------------------------");

// c. Delete a student info based on id
function deleteStudent(studentId) {
  let indexOfId = students.findIndex((item) => item.id === studentId);
  if (indexOfId !== -1) {
    students.splice(indexOfId, 1);
  }
  console.log(`Student info for id ${studentId} is deleted successfully!`);
}

deleteStudent(2);
console.log(students);
console.log("----------------------------------------------------------");

// d. List of all students
function displayStudentList() {
  students.forEach((item, index) => {
    console.log(
      `${index + 1} - ID: ${item.id}, First Name: ${
        item.firstName
      }, Last Name: ${item.lastName}, Age: ${item.age}, Grade: ${item.grade}`
    );
  });
}
displayStudentList();
console.log("----------------------------------------------------------");

// e. Find students by grade
function findByGrade(grade) {
  return students.filter((item) => {
    return item.grade === grade;
  });
}
console.log(findByGrade("A"));
console.log("----------------------------------------------------------");

// Average age
function averageAgeOfStudent() {
  let sum = students.reduce((acc, cvv) => {
    return (acc += cvv.age);
  }, 0);
  let avg = Number(sum / students.length).toFixed(1);
  console.log("The average age of students is:", avg);
}
averageAgeOfStudent();
