// Class 
class Employee {
    EmpId: Number;
    EmpName: String;
    constructor(ID: Number, Name: string) {
        this.EmpId = ID;
        this.EmpName = Name;
    }
    getSalary(): Number {
        return 10000;
    }
}

// Creating Object 
let emp = new Employee(1, "parag");
console.log(emp);
console.log(emp.getSalary());

// tuples
var arr6: [string, Number, boolean];
arr6 = ["parag", 12, true];
console.log(arr6);

// Enum
enum cars {
    volvo = 12,
    BMW = 23,
    rolls_royce = 34,
    hyundai = 45
};
console.log(cars.hyundai);

enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}

console.log(PrintMedia.Book); //returns 4 , it will start from zero and increment for another value

// Union 
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
// code = false; // Compiler Error

function displayType(code: (string | number)): any {
    if (typeof (code) === "number")
        return ('Code is number.');
    else if (typeof (code) === "string")
        return ('Code is string.');
}

console.log(displayType("parag"));//Output: Code is string.
console.log(displayType(23));//Output: Code is number.

// Interface
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number | string;
}
class Employee1 implements IEmployee {
    empCode: number;
    empName: string;
    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }
    getSalary(empCode: number) {
        if (this.empCode == empCode) {
            return 20000;
        }
        else {
            return "wrong EmpCode";
        }
    }
}
var emp1 = new Employee1(23, "parag");
console.log(emp1);
console.log(emp1.getSalary(23));//return 20000
console.log(emp1.getSalary(24));//return "wrong EmpCode"

//  Interface as Type
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" }; // OK
console.log(kv1);
// let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
// let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 

// Interface as Function Type
interface KeyValueProcessor {
    (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key1: number, value: string): void {
    console.log('updateKeyValue: key = ' + key1 + ', value = ' + value)
}

let kvp: KeyValueProcessor;
kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 

// Interface for Array Type
interface NumList {
    [index: number]: number
}
var numArr: NumList = [12, 32, 53];
console.log(numArr[0]);
console.log(numArr[1]);

// extending interfaces
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee1 extends IPerson {
    empCode: number;
}

var empObj: IEmployee1 = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
}
console.log(empObj);

// Functions()

// Named Function
function display() {
    console.log("Hello TypeScript!");
}
display(); //Output: Hello TypeScript 

// Function with Parameter and Return Types
function Sum(x: number, y: number): number {
    return x + y;
}
console.log(Sum(2, 3)); // returns 5

// Anonymous  function
let greeting = function () {
    console.log("Hello TypeScript!");
};
greeting(); //Output: Hello TypeScript! 

// Anonymous  Function with Paramter and Return Types
var Sum1 = function (x: number, y: number): number {
    return x + y;
}

console.log(Sum1(2, 3)); // returns 5