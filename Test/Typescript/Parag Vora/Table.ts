import { Customer } from "./customer";
import { ITable } from "./ITable";

export class Table implements ITable {
    Id: number;
    capacity: number;
    name: string;
    Members: number;
    isOccupied: boolean = false;
    bookedDate: Date = new Date();

    constructor(Id: number, capacity: number, Members: number, name: string) {
        this.Id = Id;
        this.capacity = capacity;
        this.Members = Members;
        this.name = name;
    }

    bookForNextHour(customer: Customer, currentDate: Date): void {
        if (this.Members > this.capacity) {
            console.log('you have to go with more than one table');
        }
        else {
            const token = Math.floor((Math.random() * 1000));
            this.bookedDate.setHours(currentDate.getHours() + 6);
            this.isOccupied = true;
            console.log(`hello ${customer.Name},your table name is${this.name}.you have successfuly booked the table for ${this.bookedDate}`);
            console.log(`your token number is :${token}`);
        }
    }
    bookForNextMonth(customer: Customer, currentDate: Date): void {
        if (this.Members > this.capacity) {
            console.log('you have to go with more than one table');
        }
        else {
            const token = Math.floor((Math.random() * 1000));
            this.bookedDate.setMonth(currentDate.getMonth() + 1);
            this.isOccupied = true;
            console.log(`hello ${customer.Name},your table name is${this.name}.you have successfuly booked the table for ${this.bookedDate}`);
            console.log(`your token number is :${token}`);
        }
    }
}