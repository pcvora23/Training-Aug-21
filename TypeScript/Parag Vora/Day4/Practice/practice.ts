let test = new Map();  
  
test.set('1', 'abhishek');     
test.set(1, 'rahul');       
test.set(true, 'bool1');   
test.set('2', 'ajay');  
console.log("----map examples----");
console.log( "Value1= " +test.get(1)   );   
console.log("Value2= " + test.get('1') );   
console.log( "Key is Present= " +test.has(3) );   
console.log( "Size= " +test.size );   
console.log( "Delete value= " +test.delete(1) );   
console.log( "New Size= " +test.size );  
test.clear();
console.log( "New Size= " +test.size );  


let ageMapping = new Map();  
   
ageMapping.set("Rakesh", 40);  
ageMapping.set("Abhishek", 25);  
ageMapping.set("Amit", 30);  

//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  

//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  

console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  

console.log("----set examples----");
let studentEntries = new Set();  
//Add Values  
studentEntries.add("John");  
studentEntries.add("Peter");  
studentEntries.add("Gayle");  
studentEntries.add("Kohli");   
studentEntries.add("Dhawan");   
studentEntries.add(1);   
studentEntries.add(true);   

//Returns Set data  
console.log(studentEntries);  

//Check value is present or not  
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));   

//It returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));      
console.log(studentEntries.size);  

//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries); 
   
//Chaining of add() method is allowed in TypeScript  
studentEntries.add("parag").add("jeel").add("brijen").add("rahul");  
  
//Returns Set data  
console.log("The List of Set values:");  
console.log(studentEntries);  

let diceEntries = new Set();  
  
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);  
   
//Iterate over set entries  
console.log("Dice Entries are:");   
for (let diceNumber of diceEntries) {  
    console.log(diceNumber);   
}  
   
// Iterate set entries with forEach  
console.log("Dice Entries with forEach are:");   
diceEntries.forEach(function(value) {  
  console.log(value);     
});  

console.log("----Date examples----");
let date: Date = new Date();  
console.log("Date = " + date);  

// It creates a new date object as zero time plus milliseconds.
let date1: Date = new Date(500000000000);  
console.log("Date = " + date1);  

let date2: Date = new Date(2018, 5, 5, 17, 23, 42, 11);  
console.log("Date = " + date2);

let date3: Date = new Date(2017, 4, 4, 17, 23, 42, 11);  
date3.setDate(13);  
date3.setMonth(13);  
date3.setFullYear(2013);  
date3.setHours(13);  
date3.setMinutes(13);  
date3.setSeconds(13);  
console.log("Year = " + date3.getFullYear());  
console.log("Date = " + date3.getDate());  
console.log("Month = " + date3.getMonth());  
console.log("Day = " + date3.getDay());  
console.log("Hours = " + date3.getHours());  
console.log("Minutes = " + date3.getMinutes());  
console.log("Seconds = " + date3.getSeconds()); 
console.log("Time = " + date3.getTime()); 
console.log("to string = " + date3.toString()); 
console.log("milliseconds = " + date3.getMilliseconds()); 
console.log("to time  string = " + date3.toTimeString()); 