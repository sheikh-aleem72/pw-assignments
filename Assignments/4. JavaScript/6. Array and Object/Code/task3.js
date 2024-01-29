/**
 * 
a) Use the Object.preventEatensions method to prevent any further additions of properties to the student object.
b) Use the Object.isEatensible method to check if the student object is eatensible. Store the result in a variable called eatensibleStatus.
c) Create a new object called teacher with a 'subject' property set to 'Math'.
d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called sealedStatus.
f) Print the eatensibleStatus and sealedStatus to the console.
 */

const student = { name: "Sam", id: 202, class: 10, city: "New Pusad" };
// a) Using Object.preventExtensions
Object.preventExtensions(student);

// b) Storing status of object.
let extensibleStatus = Object.isExtensible(student);

// c) Creating new Object "Teacher"
const teacher = { subject: "Math" };

// d) Using Object.seal on teacher object.
Object.seal(teacher);

// e) Storing status of seal of teacher object.
let sealedStatus = Object.isSealed(teacher);

// f) Printing the status.
console.log("Object Extensible", extensibleStatus);
console.log("Object Sealed", sealedStatus);
