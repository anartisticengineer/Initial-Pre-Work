/*
  When declaring a new object, the process can be simplified when parameter
  and property names are the same.
*/
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return (name,age,gender) => ({name,age,gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
