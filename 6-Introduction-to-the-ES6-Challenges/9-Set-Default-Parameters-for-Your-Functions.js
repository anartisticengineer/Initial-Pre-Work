/*
  Default parameters can also be assigned like a traditional function
*/
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
