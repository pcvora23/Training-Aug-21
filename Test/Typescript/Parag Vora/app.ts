import { Restaurant } from "./Restaurant";
import { Customer } from "./customer";
import { Table } from "./Table";
import { Menu } from "./Menu";
import { Order } from "./order";

var tablearr: Array<Table> = [];
var tab1 = new Table(tablearr.length + 1, 4, 2, "table1")
tablearr.push(tab1);
var tab2 = new Table(tablearr.length + 1, 7, 5, "table2")
tablearr.push(tab2);
var tab3 = new Table(tablearr.length + 1, 2, 3, "table3")
tablearr.push(tab3);
var tab4 = new Table(tablearr.length + 1, 6, 3, "table4")
tablearr.push(tab4);

console.log(tablearr);


var custarr:Array<Customer> =[];
var cust1 = new Customer(custarr.length+1,"parag","rajkot",22,"abc heights",4561237890);
custarr.push(cust1);
var cust2 = new Customer(custarr.length+1,"brijen","ahemdabad",19,"xyz heights",8529631420);
custarr.push(cust2);
var cust3 = new Customer(custarr.length+1,"jeel","jetpur",21,"opq heights",3212548969);
custarr.push(cust3);

console.log(custarr);

// table booking
var todate:Date = new Date();
tab1.bookForNextHour(cust1,todate);

console.log(tab1);

tab2.bookForNextMonth(cust1,todate);


var menuarr:Menu[] =[];
 
var menu1 = new Menu(menuarr.length+1,"Punjabi dish",4,"Punjabi",250);
menuarr.push(menu1);
var menu2 = new Menu(menuarr.length+1,"dhosa ",3,"south indian",192);
menuarr.push(menu2);
var menu3 = new Menu(menuarr.length+1,"gujrati dish",6,"normal",120);
menuarr.push(menu3);

console.log(menuarr);

var order = new Order();
var menuqtyarr:[Menu,number][] = [[menu1,4],[menu2,2]];
order.orederMenu(menuqtyarr,cust1,new Date());

var resarr:Array<Restaurant> = [];
var res1 = new Restaurant(resarr.length + 1 ,"HFM",'limbdi','india','ahmedabad',2);
resarr.push(res1);
var res2 = new Restaurant(resarr.length + 1 ,"william jones",'rajkot','india','rajkot',3);
resarr.push(res2);
var res3 = new Restaurant(resarr.length + 1 ,"pizza zone",'Tornto','canada','toronto',4);
resarr.push(res3);

