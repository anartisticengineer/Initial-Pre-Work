/*
  Concatenating strings can also be used in a function to create a fun game such
  as Mad Libs.
*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The "+myNoun+" was really "+myAdjective+" and "+myVerb+" very "+myAdverb+".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
