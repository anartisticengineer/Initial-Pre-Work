/*
  The rest operator allows for any number of parameters to be accepted
  with the same function (not as an array).
*/
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
