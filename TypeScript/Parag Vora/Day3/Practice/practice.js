"use strict";
// generic function
exports.__esModule = true;
function Display(arg) {
    return arg;
}
console.log(Display("parag"));
console.log(Display(123));
console.log(Display(typeof (true)));
// Generic class
var KeyValuePair1 = /** @class */ (function () {
    function KeyValuePair1() {
    }
    KeyValuePair1.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair1.prototype.display = function () {
        console.log("Key = ".concat(this.key, ", val = ").concat(this.val));
    };
    return KeyValuePair1;
}());
var kvp1 = new KeyValuePair1();
kvp1.setKeyValue(1, "parag");
kvp1.display(); //Output: Key = 1, Val = parag 
var kvp3 = new KeyValuePair1();
kvp3.setKeyValue("smith", 23);
kvp3.display(); //Output: Key =smith , Val = 23 
var kvp2 = new KeyValuePair1();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill
function StudentInfo(id, value) {
    console.log("ID :".concat(id, ",Name:").concat(value));
}
StudentInfo(11, "parag");
// Modules 
var empe = require("./employee");
var x = new empe.Employee("parag", 23);
x.displayEmployee();
// empe.age =25;
console.log(empe.age);
