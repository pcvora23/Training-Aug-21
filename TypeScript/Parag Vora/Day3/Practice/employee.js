"use strict";
exports.__esModule = true;
exports.Employee = exports.age = void 0;
/// <reference path="StringUtility.ts" />
exports.age = 20;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = "XYZ";
