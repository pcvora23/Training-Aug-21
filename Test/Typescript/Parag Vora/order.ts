import { IOrder } from "./IOrder";
import { Menu } from "./Menu";
import { Customer } from "./customer";

export class Order implements IOrder {
    menuqty: [Menu, number][];
    customer: Customer;

    orederMenu(menuqty: [Menu, number][], customer: Customer, curDate: Date): void {
        var menuarr: [Menu, number][] = [];
        for (var index in menuqty) {
            if (menuqty[index][0].Quantity < menuqty[index][1]) {
                console.log('menu is not available');
            }
            else {
                menuqty[index][0].Quantity = menuqty[index][0].Quantity - menuqty[index][1];
                console.log(`hello ${customer.Name},your order is placed succesfully`);
                menuarr.push(menuqty[index]);
            }
        }
    }

}