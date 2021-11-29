"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(Id, capacity, Members, name) {
        this.isOccupied = false;
        this.bookedDate = new Date();
        this.Id = Id;
        this.capacity = capacity;
        this.Members = Members;
        this.name = name;
    }
    Table.prototype.bookForNextHour = function (customer, currentDate) {
        if (this.Members > this.capacity) {
            console.log('you have to go with more than one table');
        }
        else {
            var token = Math.floor((Math.random() * 1000));
            this.bookedDate.setHours(currentDate.getHours() + 6);
            this.isOccupied = true;
            console.log("hello ".concat(customer.Name, ",your table name is").concat(this.name, ".you have successfuly booked the table for ").concat(this.bookedDate));
            console.log("your token number is :".concat(token));
        }
    };
    Table.prototype.bookForNextMonth = function (customer, currentDate) {
        if (this.Members > this.capacity) {
            console.log('you have to go with more than one table');
        }
        else {
            var token = Math.floor((Math.random() * 1000));
            this.bookedDate.setMonth(currentDate.getMonth() + 1);
            this.isOccupied = true;
            console.log("hello ".concat(customer.Name, ",your table name is").concat(this.name, ".you have successfuly booked the table for ").concat(this.bookedDate));
            console.log("your token number is :".concat(token));
        }
    };
    return Table;
}());
exports.Table = Table;
