// Create a Restful API, which will return Customer list in JSON format.(http://localhost:3000/customers)

const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const customers =
    [
        { "id": 1, "name": "parag" },
        { "id": 2, "name": "ajay" },
        { "id": 3, "name": "vikas" },
        { "id":17, "name": "dummy" }
    ]


app.get('/', (req, res) => {
    res.send('Welcome...');
});

// Create a Restful API, which will return Customer list in JSON format.(http://localhost:3000/customers)
app.get('/customers', (req, res) => {
    res.send(customers);
});

// Create a Restful API which will search a particular record from the customer list.(http://localhost:3000/customers/1)

app.get('/customers/:id', (req, res) => {
    var record = customers.find(c => c.id === parseInt(req.params.id));
    res.status(200).send(record);
    res.end();
});

// Create a Restful API which will insert a new customer object in the customer list.(http://localhost:3000/customer)

app.post('/customers', (req, res) => {
    // console.log(req.body);
    customers.push(req.body);
    res.send(customers);
    res.end();
})


//Create a Restful API which update a name of existing customer whose customer ID is 1(http://locahost:3000/customer) 

app.put('/customers/:id',(req,res)=>
{
    // console.log(req.body);
    var record = customers.findIndex(c => c.id === parseInt(req.params.id));
    console.log(record);
    customers.splice(record,1,req.body);
    res.send(customers);
    res.end();
})
// Create a Restful API which will delete a record from the customer list.(http://localhost:3000/customer)
app.delete('/customers/:id', (req, res) => {
 
    var record = customers.find( c=> c.id === parseInt(req.params.id));
    // console.log(record);
    var index = customers.indexOf(record);
    customers.splice(index,1);
    // console.log(customers);
    res.send(customers);
    });

app.listen(3000, function () {
    console.log("application started");
})


