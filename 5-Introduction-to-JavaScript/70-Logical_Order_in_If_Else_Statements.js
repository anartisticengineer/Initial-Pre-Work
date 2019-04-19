/*
  As the statement is read from top to bottom, the order of conditions is important
  to avoid accidentally calling the wrong condition (the code exits the statement
  at the first satisfied condition).
*/
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
