var employees: Array<any> = [
  {
    ID: 1,
    FirstName: "parag",
    LastName: "Vora",
    Address: "3034,rachit aparatment,rajkot,Gujrat",
    Salary: 10000,
  },
  {
    ID: 2,
    FirstName: "Brijen",
    LastName: "Sadariya",
    Address: "102,xyz aparatment,kheda,Gujrat",
    Salary: 12000,
  },
  {
    ID: 3,
    FirstName: "jeel",
    LastName: "ghodasara",
    Address: "103,erv aparatment,ahemdabad,Gujrat",
    Salary: 15000,
  },
  {
    ID: 4,
    FirstName: "tapan",
    LastName: "italiya",
    Address: "104,rtb aparatment,mahesana,Gujrat",
    Salary: 17000,
  },
  {
    ID: 5,
    FirstName: "krunal",
    LastName: "sharma",
    Address: "108,fgh aparatment,jetpur,Gujrat",
    Salary: 19000,
  },
];
// Inserting data  of employee

var emp1 = {
  ID: 6,
  FirstName: "umang",
  LastName: "sorathiya",
  Address: "109,thu aparatment,rajkot,Gujrat",
  Salary: 21000,
};

employees.push(emp1);
// console.log(employees);

// Deleting data of employee
employees.pop();
// console.log(employees);

// Searching Data Of Employee
var newarray = employees.filter((val, index, array) => {
  return val.ID == 3;
});
// console.log(newarray);

// Adding New Array Of Employee

var emp2: Array<any> = [
  {
    ID: 51,
    FirstName: "abraham",
    LastName: "linken",
    Address: "232,rty aparatment,mosco,Russia",
    Salary: 25000,
  },
  {
    ID: 52,
    FirstName: "barak",
    LastName: "obama",
    Address: "178,klm aparatment,washington,Usa",
    Salary: 30000,
  },
  {
    ID: 53,
    FirstName: "chetan",
    LastName: "bhagat",
    Address: "5942,lpa aparatment,lucknow,haryana",
    Salary: 52000,
  },
];

var joinedarray: Array<any> = employees.concat(emp2);
console.log(joinedarray);

for (var employee of joinedarray) {
  var pf: number = (employee.Salary)*(12/100);
  console.log("-----Employee Deatils-----");
  console.log("Employee Full Name: " + employee.FirstName + " " + employee.LastName);
  var arr: Array<any> = employee.Address.split(",");
  console.log("Flat Number: "+arr[0]);
  console.log("Apartment: "+arr[1]);
  console.log("City: "+arr[2]);
  console.log("State: "+arr[3]);
  console.log("Salary: "+employee.Salary);
  console.log("Professional Tax: "+pf);
  console.log("--------------------------");
}
