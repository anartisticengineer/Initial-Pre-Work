/*
  Getters and setters are used in classes to control properties in a class externally,
  whether recieving or modifying.
*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(tempF){
      this._tempF = tempF;
    }
    get temperature(){
      return 5/9 * (this._tempF - 32);
    }
    set temperature(tempC){
      return 9/5 * tempC + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
