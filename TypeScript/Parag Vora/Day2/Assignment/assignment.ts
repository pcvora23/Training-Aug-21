// There is a retail shop which need to manage the inventory, whenever some purchase is being made product quantity should be reduced, if quanity is less than 5 reorder request should be raised.Design an interface and classes for the same.

// Enum
enum Quantity {
    minQty = 5
}

// Interface as function type
interface OrderGenerator {
    (qtyToBuy: number) : void;
}

// Interface
interface IProduct {
    readonly ProductID: number;   // readonly
    readonly name: string;    // readonly
    qty: number;
    price: number;
    buyProduct: OrderGenerator;
    addProduct(): void;
}

// Class implement interface
class Product implements IProduct {
    ProductID: number;
    name: string;
    qty: number;
    price: number;

    // Constructor
    constructor(id: number, name: string, qty: number, price: number) {
        this.ProductID = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    // Get information of product
    getProduct(): void {
        console.log(`Available: ProductID = ${this.ProductID}, Name = ${this.name}, Quantity = ${this.qty}, Price = ${this.price}`);
    }

    // Buy a product
    buyProduct(qtyToBuy: number): void{
        if (qtyToBuy > this.qty) {
            console.log("not enough stock");
            this.getProduct();
        }
        else {
            this.qty -= qtyToBuy;
            console.log("order placed successfully");
            this.getProduct();

            if (this.qty < Quantity.minQty) {
                this.reOrder(25);
            }
        }
    }

    // Add new product
    addProduct(): void {
        var product: IProduct = new Product(this.ProductID, this.name, this.qty, this.price);
        prodArray.push(product);
    }

    // Reorder product
    private reOrder(reOrderQty: number): void {
        this.qty += reOrderQty;
        console.log(`Re-Order for ${reOrderQty} pieces of ${this.name} is successfully placed`);
        console.log(`After Delivery: Name: ${this.name}, Total Quantity Available: ${this.qty}`);
    }
}

let prod1: IProduct = new Product(1, "milk", 60, 30);
let prod2: IProduct = new Product(2, "butter", 60, 52);
let prod3: IProduct = new Product(3, "buttermilk", 12, 12);
let prodArray:Array<IProduct>= [];
prodArray.push(prod1);
prodArray.push(prod2);
prodArray.push(prod3);

console.log("------Products List--------")
console.log(prodArray);
console.log();

console.log("----------Product Order--------");
console.log();
prodArray[0].buyProduct(200);
console.log();
prodArray[1].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();

console.log("--------Add product--------");
let prod4: IProduct = new Product(4, "curd", 20, 45);
prod4.addProduct();

console.log("---------New List---------");
console.log(prodArray);