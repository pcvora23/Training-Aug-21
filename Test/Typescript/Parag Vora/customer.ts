import { ICustomer } from "./ICustomer"

export class Customer implements ICustomer
{
    Id:number;
    Name:string;
    City:String;
    Age:number;
    Address:String;
    Mobile_No:number;

    constructor(Id:number,Name:string,City:String,Age:number,Address:String,Mobile_No:number)
    {
        this.Id = Id;
        this.Name = Name;
        this.City = City;
        this.Age = Age;
        this.Address = Address;
        this.Mobile_No = Mobile_No;
    }
}