var name1: string = "parag";
var age: number = 22;
var isActive: boolean = true;
console.log(name1);
console.log(age);
console.log(isActive);


var num1: number = 123; // number 
var num2: number = 0x37CF;  // hexadecimal
var num3: number = 0o377;      // octal
var num4: number = 0b111001;// binary  
console.log(num1);  // 123 
console.log(num2); // 14287
console.log(num3);  // 255
console.log(num4); // 57 


// numObj.toExponential([fractionDigits])
var myNumber: number = 123456;
console.log(myNumber.toExponential()); // returns 1.23456e+5
console.log(myNumber.toExponential(3)); //returns 1.235e+5
console.log(myNumber.toExponential(1)); //returns 1.2e+5

// numObj.toFixed([digits])
var test: number = 10.8788;
console.log(test.toFixed()); // returns 11
console.log(test.toFixed(1)); //returns 10.9
console.log(test.toFixed(2)); //returns 10.88

//numObj.toPrecision([precision])
var test1: number = 10.5679;
console.log(test1.toPrecision(1)); // returns 1e+1
console.log(test1.toPrecision(2)); // returns 11
console.log(test1.toPrecision(3)); // returns 10.6
console.log(test1.toPrecision(4)); // returns 10.57


// numObj.valueOf()
var test2 = new Number(123);
console.log(test2) //Output: a number object with value 123
console.log(test2.valueOf()) //Output: 123
console.log(typeof (test2)) //Output: object

// Void
var unusable: void = undefined;
console.log(unusable);


// Templated String
var empdep = "Dotnet";
console.log(`${name1} is working in ${empdep} department`);


// Strings Methods

// charAt(), character = str.charAt(index)
var str1:string = "Hello TypeScript";
console.log(str1.charAt(0)); // returns 'H'
console.log(str1.charAt(2)); // returns 'l'

//concat(),str.concat(string2[, string3, ..., stringN])
let st1: string = 'Hello';
let st2: string = 'TypeScript';
console.log(st1.concat(st2)); // returns 'HelloTypeScript'
console.log(st1.concat(' Mr. ', 'Bond')); // returns 'Hello Mr. Bond'

// indexOf(), str.indexOf(searchValue[, fromIndex])
var str3: string = 'TypeScript';
console.log(str3.indexOf('T')); // returns 0
console.log(str3.indexOf('e')); // returns 3
console.log(str3.indexOf('x')); // returns -1 if not present
console.log(str3.indexOf('T', 1));//returns -1
console.log(str3.indexOf('t', 1));//returns 9

//replace(), str.replace(regexp|substr, newSubstr|function)
var str4:string = "hello parag";
// str4.replace('parag', 'akshay');  not working
console.log(str4.toUpperCase()); 
console.log(str4.toLowerCase());

// Arrays
var arr1:Array<Number|string|boolean> = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
for (var i in arr1)
{
    console.log(arr1[i]);
}
console.log(arr1.sort());
console.log(arr1.indexOf('Apple'));//returns 2
console.log(arr1.indexOf('apple'));// returns -1 beacuse of case sensitive
arr1.pop();
console.log(arr1);
arr1.push('water melon');
console.log(arr1);

