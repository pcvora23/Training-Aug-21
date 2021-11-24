// Class 
var Employee = /** @class */ (function () {
    function Employee(ID, Name) {
        this.EmpId = ID;
        this.EmpName = Name;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
// Creating Object 
var emp = new Employee(1, "parag");
console.log(emp);
console.log(emp.getSalary());
// tuples
var arr6;
arr6 = ["parag", 12, true];
console.log(arr6);
// Enum
var cars;
(function (cars) {
    cars[cars["volvo"] = 12] = "volvo";
    cars[cars["BMW"] = 23] = "BMW";
    cars[cars["rolls_royce"] = 34] = "rolls_royce";
    cars[cars["hyundai"] = 45] = "hyundai";
})(cars || (cars = {}));
;
console.log(cars.hyundai);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Book); //returns 4 , it will start from zero and increment for another value
// Union 
var code;
code = 123; // OK
code = "ABC"; // OK
// code = false; // Compiler Error
function displayType(code) {
    if (typeof (code) === "number")
        return ('Code is number.');
    else if (typeof (code) === "string")
        return ('Code is string.');
}
console.log(displayType("parag")); //Output: Code is string.
console.log(displayType(23)); //Output: Code is number.
var Employee1 = /** @class */ (function () {
    function Employee1(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee1.prototype.getSalary = function (empCode) {
        if (this.empCode == empCode) {
            return 20000;
        }
        else {
            return "wrong EmpCode";
        }
    };
    return Employee1;
}());
var emp1 = new Employee1(23, "parag");
console.log(emp1);
console.log(emp1.getSalary(23)); //return 20000
console.log(emp1.getSalary(24)); //return "wrong EmpCode"
var kv1 = { key: 1, value: "Steve" }; // OK
console.log(kv1);
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key1, value) {
    console.log('updateKeyValue: key = ' + key1 + ', value = ' + value);
}
var kvp;
kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
var numArr = [12, 32, 53];
console.log(numArr[0]);
console.log(numArr[1]);
var empObj = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
};
console.log(empObj);
// Functions()
// Named Function
function display() {
    console.log("Hello TypeScript!");
}
display(); //Output: Hello TypeScript 
// Function with Parameter and Return Types
function Sum(x, y) {
    return x + y;
}
Sum(2, 3); // returns 5
// Anonymous  function
var greeting = function () {
    console.log("Hello TypeScript!");
};
greeting(); //Output: Hello TypeScript! 
// Anonymous  Function with Paramter and Return Types
var Sum1 = function (x, y) {
    return x + y;
};
Sum1(2, 3); // returns 5
