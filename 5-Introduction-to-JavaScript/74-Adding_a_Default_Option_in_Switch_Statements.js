/*
  A default statement is similar to the else statement:
  leads to a block of code to be executed in case all other conditions are false.
*/
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
