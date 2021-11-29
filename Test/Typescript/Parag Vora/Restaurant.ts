import { IRestaurant } from "./IRestaurant";

export class Restaurant implements IRestaurant
{
    ResId:number;
    ResName:string;
    ResAddress:string;
    Rescountry:string;
    Rescity:string;
    Resrating:number;

    constructor (ResId:number,ResName:string,ResAddress:string,Rescountry:string,Rescity:string,Resrating:number)
    {
        this.ResId = ResId;
        this.ResName = ResName;
        this.ResAddress = ResAddress;
        this.Rescountry = Rescountry;
        this.Rescity = Rescity;
        this.Resrating = Resrating;
    }
    addresData(): void {
        var res = new Restaurant(this.ResId, this.ResName, this.ResAddress, this.Rescountry, this.Rescity,this.Resrating);
        ResMap.set(this.ResId, res);
        ResArray.push(res);
    }

    static getResById(ID: number): void {
        if(ResMap.has(ID))
        {
            console.log(ResMap.get(ID))
        }
        else
        {
            console.log('Restaurant not found');
        }
    }
}
var ResMap = new Map();
var ResArray: Array<Restaurant> = [];
ResMap.clear();