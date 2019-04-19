/*
  The strict equality operator is similar to the normal equality operator,
  but only returns true if the value AND type are the same.
  (i.e. a 7 and '7' would be false)
*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
