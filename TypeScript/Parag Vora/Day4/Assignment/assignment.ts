interface IEmpDetails {
    ID: number;
    Name: string;
    City: string;
    DOJ: Date;
}

class EmployeeData {
    ID: number;
    Name: string;
    City: string;
    DOJ: Date;

    constructor(id: number, name: string, city: string, doj: Date) {
        this.ID = id;
        this.Name = name;
        this.City = city;
        this.DOJ = doj;
    }

    addEmpData(): void {
        var emp = new EmployeeData(this.ID, this.Name, this.City, this.DOJ);
        EmpMap.set(this.ID, emp);
        empArray.push(emp);
    }

    static getEmpById(ID: number): void {
        if(EmpMap.has(ID))
        {
            console.log(EmpMap.get(ID))
        }
        else
        {
            console.log('employee not found');
        }
    }

    static getEmpByDojYear(year:number):void
    {
        var arr = empArray.filter((empArray,i,arr1)=>
        {
            return empArray.DOJ.getFullYear()>=year;
        })
        console.log(arr);
    }

    static getEmpByDojYearAndCity(year:number,city:string):void
    {
        var arr = empArray.filter((empArray,i,arr1)=>
        {
            return empArray.DOJ.getFullYear()>=year && empArray.City == city;
        })
        console.log(arr);
    }
}

var EmpMap = new Map();
var empArray: Array<EmployeeData> = [];
EmpMap.clear();

// Store 5 Employee Data(ID,Name,City,DOJ) in one Array
var emp1 = new EmployeeData(1, 'parag', 'Jasdan', new Date("2021-08-15"));
var emp2 = new EmployeeData(2, 'brijen', 'Mumbai', new Date("2020-01-01"));
var emp3 = new EmployeeData(3, 'krunal', 'New Delhi', new Date("2019-05-15"));
var emp4 = new EmployeeData(4, 'meet', 'Jaipur', new Date("2017-02-26"));
var emp5 = new EmployeeData(5, 'umang', 'Benglore', new Date("2020-06-12"));
emp1.addEmpData();
emp2.addEmpData();
emp3.addEmpData();
emp4.addEmpData();
emp5.addEmpData();
console.log(empArray);

// Search the employee with ID.
EmployeeData.getEmpById(4);
EmployeeData.getEmpById(7);//employee not found

// Search the employees who has joined after year 2020
EmployeeData.getEmpByDojYear(2020);

// Search the employees who has joined after year 2020 and city is Mumbai
EmployeeData.getEmpByDojYearAndCity(2020,'Mumbai');