/*
  Declaring a variable within the function limits the scope to just that function:
  meaning it can't be accessed outside of the function.
*/
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 0;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
