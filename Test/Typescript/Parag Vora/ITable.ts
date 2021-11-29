import { Customer } from "./customer";

export interface ITableOccupy {
    (customer: Customer, curDate: Date): void;
}

export interface ITable {
    Id:number;
    capacity:number;
    Members:number;
    bookForNextHour:ITableOccupy;
    bookForNextMonth:ITableOccupy;
}