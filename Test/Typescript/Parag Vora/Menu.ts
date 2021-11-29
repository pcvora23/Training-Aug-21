import { IMenu } from "./Imenu";

export class Menu implements IMenu
{
    Id: number;
    Name: string;
    Quantity: any;
    DishType: String;
    Price: Number;

    constructor(Id:number,Name:string,Quantity:Number,DishType: String,Price: Number)
    {
        this.Id = Id;
        this.Name = Name;
        this.Quantity = Quantity;
        this.DishType = DishType;
        this.Price = Price;
    }
}