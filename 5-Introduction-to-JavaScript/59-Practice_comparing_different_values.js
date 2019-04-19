/*
  This example again shows how the strict equality operator returns false
  since the arguments are of two different types (number and string)
*/
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
