// generic function

import { age, Employee } from "./employee";

function Display<T>(arg: T): T {
    return arg;
}
console.log(Display<string>("parag"));
console.log(Display(123));
console.log(Display(typeof (true)));

// Generic class
class KeyValuePair1<T, U>
{
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void {
        this.key = key;
        this.val = val;
    }

    display(): void {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair1<number, string>();
kvp1.setKeyValue(1, "parag");
kvp1.display(); //Output: Key = 1, Val = parag 

let kvp3 = new KeyValuePair1<string, number>();
kvp3.setKeyValue("smith", 23);
kvp3.display(); //Output: Key =smith , Val = 23 

var kvp2 = new KeyValuePair1<string, string>();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill

// Generic interface as function type
interface StudentInfo<T, U> {
    (id: T, value: U): void;
}

function StudentInfo(id: Number, value: String): void {
    console.log(`ID :${id},Name:${value}`);
}

StudentInfo(11,"parag");

// Modules 
import * as empe from "./employee";
var x = new empe.Employee ("parag",23);
x.displayEmployee();
// empe.age =25;
console.log(empe.age);
