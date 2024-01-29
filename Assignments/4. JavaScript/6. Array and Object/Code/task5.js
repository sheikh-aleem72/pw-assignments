function displayStudentInfo(obj) {
  for (key in obj) {
    console.log(`Property: ${key}, Value: ${obj[key]}`);
  }
}
const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};

displayStudentInfo(student);
