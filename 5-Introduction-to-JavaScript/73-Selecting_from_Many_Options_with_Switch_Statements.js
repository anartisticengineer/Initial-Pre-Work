/*
  A switch statement can be used as an alternate to having numerous
  if/else if statements, comparing with strict equality.
*/
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
