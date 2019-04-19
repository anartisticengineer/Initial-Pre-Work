/*
  the conditional/ternary operations can also be chained together, just like
  a normal if-else statement.
*/
function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);
