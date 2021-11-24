// There is a retail shop which need to manage the inventory, whenever some purchase is being made product quantity should be reduced, if quanity is less than 5 reorder request should be raised.Design an interface and classes for the same.
// Enum
var Quantity;
(function (Quantity) {
    Quantity[Quantity["minQty"] = 5] = "minQty";
})(Quantity || (Quantity = {}));
// Class implement interface
var Product = /** @class */ (function () {
    // Constructor
    function Product(id, name, qty, price) {
        this.ProductID = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    // Get information of product
    Product.prototype.getProduct = function () {
        console.log("Available: ProductID = ".concat(this.ProductID, ", Name = ").concat(this.name, ", Quantity = ").concat(this.qty, ", Price = ").concat(this.price));
    };
    // Buy a product
    Product.prototype.buyProduct = function (qtyToBuy) {
        if (qtyToBuy > this.qty) {
            console.log("not enough stock");
            this.getProduct();
        }
        else {
            this.qty -= qtyToBuy;
            console.log("order placed successfully");
            this.getProduct();
            if (this.qty < Quantity.minQty) {
                this.reOrder(50);
            }
        }
    };
    // Add new product
    Product.prototype.addProduct = function () {
        var product = new Product(this.ProductID, this.name, this.qty, this.price);
        prodArray.push(product);
    };
    // Reorder product
    Product.prototype.reOrder = function (reOrderQty) {
        this.qty += reOrderQty;
        console.log("Re-Order for ".concat(reOrderQty, " pieces of ").concat(this.name, " is successfully placed"));
        console.log("After Delivery: Name: ".concat(this.name, ", Total Quantity Available: ").concat(this.qty));
    };
    return Product;
}());
var prod1 = new Product(1, "milk", 60, 30);
var prod2 = new Product(2, "butter", 60, 52);
var prod3 = new Product(3, "buttermilk", 12, 12);
var prodArray = [];
prodArray.push(prod1);
prodArray.push(prod2);
prodArray.push(prod3);
console.log("----------------------------Products List------------------------------------");
console.log(prodArray);
console.log();
console.log("----------------------------------Product Order--------------------------------");
console.log();
prodArray[0].buyProduct(200);
console.log();
prodArray[1].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();
console.log("-----------------------------------Add product----------------------------------");
var prod4 = new Product(4, "curd", 20, 45);
prod4.addProduct();
console.log("------------------------------------New List------------------------------------");
console.log(prodArray);
