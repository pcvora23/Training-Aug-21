const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB').then(() => console.log("mongo connected...")).catch((err) => console.log(err));

const employeeSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
    Skills: [String]
})

const EmployeeModel = mongoose.model('employees', employeeSchema);

// Insert Employee

const addEmployee = async () => {
    let employeeone = new EmployeeModel({
        ID: 1,
        Name: "parag",
        Address: "Jasdan",
        Skills: ["HTML", "CSS", "JS", "NodeJs"]
    })
    let employeetwo = new EmployeeModel({
        ID: 2,
        Name: "niraj",
        Address: "keshod",
        Skills: ["HTML", "CSS", "JS", "NodeJs"]
    })
    let employeethree = new EmployeeModel({
        ID: 3,
        Name: "brijen",
        Address: "junagadh",
        Skills: ["HTML", "CSS", "JS", "NodeJs"]
    })
    // const result = await employee.save(); for inserting one document
    const result = await EmployeeModel.insertMany([employeeone,employeetwo,employeethree]); //for inserting many documents together
    console.log(result);
}
addEmployee();

// get Employee
const getEmployee = async () => {
    let employee = await EmployeeModel.find();
    console.log(employee);
}
// getEmployee();

// get employee by id

const getEmployeeById = async (id) => {
    let employee = await EmployeeModel.find({ ID: id });
    console.log(employee);
}
// getEmployeeById(1);

const updateEmployee = async (id, name, address) => {
    const result = await EmployeeModel.updateOne
        (
            { ID: id },
            {
                $set:
                {
                    Name: name,
                    Address: address
                }
            }
        )
    console.log(result);
}
// updateEmployee(1,"parag vora","rajkot");

const deleteEmployee = async (id) => {
    const result = await EmployeeModel.deleteOne(
        {
            ID: id
        }
    )
    console.log(result);
}
// deleteEmployee(1)