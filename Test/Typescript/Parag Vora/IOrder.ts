import { Menu } from "./Menu";
import { Customer } from "./customer";

interface IOrdermaker
{
    (menuqty:[Menu,number][],customer:Customer, date:Date):void;
}
export interface IOrder
{
    menuqty:[Menu,number][];
    customer:Customer;

    orederMenu:IOrdermaker;
}