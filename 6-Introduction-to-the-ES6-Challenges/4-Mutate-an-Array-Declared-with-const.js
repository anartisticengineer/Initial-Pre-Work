/*
  An array or object can be declared as constant, but the elements inside can still
  be changed with bracket notation.
*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();
