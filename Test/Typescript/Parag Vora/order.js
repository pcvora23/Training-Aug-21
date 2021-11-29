"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.orederMenu = function (menuqty, customer, curDate) {
        var menuarr = [];
        for (var index in menuqty) {
            if (menuqty[index][0].Quantity < menuqty[index][1]) {
                console.log('menu is not available');
            }
            else {
                menuqty[index][0].Quantity = menuqty[index][0].Quantity - menuqty[index][1];
                console.log("hello ".concat(customer.Name, ",your order is placed succesfully"));
                menuarr.push(menuqty[index]);
            }
        }
    };
    return Order;
}());
exports.Order = Order;
