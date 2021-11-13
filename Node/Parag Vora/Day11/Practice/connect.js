const mongoose = require('mongoose');
const { result } = require('../Assignment/config/connection');
mongoose.connect('mongodb://localhost/day11db')
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.log(err);
    })

const feeSchema = mongoose.Schema(
    {
        ID: Number,
        Name: String,
        Address: String,
        Fees: Object
    }
)
const fees = mongoose.model('fee', feeSchema);


const getFees = async () => {

    // less then
    const result = await fees.find({ "ID": 1, "Fees.Amount": { $lt: 11000 } })//.select('Fees.Amount');

    // greater then
    // const test = await fees.find({"Fees.Amount":{$gt:11000}}).select("ID");

    // not equal to
    const test = await fees.find({ "Fees.Amount": { $ne: 11000 } }).select("ID");

    // another way to write 
    // const result = await fees.find({Fees:{ $elemMatch:{Amount:{$gt : 11000}}}});

    // greter then equal to
    // const test = await fees.find({"Fees.Amount":{$gte:11000}}).select("ID");

    // less then
    // const test = await fees.find({"Fees.Amount":{$lt:11000}}).select("ID");

    // lessthen eqaual to
    // const test = await fees.find({"Fees.Amount":{$lte:11000}}).select("ID");

    console.log(result);
    console.log(test);
}

const getAddress = async () => {
    // IN:match with values specified in the array
    // const result = await fees.find({"Address":{$in:["Surat","kheda"]}});

    // NIN: will return the value which does not match with the elements of the array
    const result = await fees.find({ "Address": { $nin: ["Surat", "kheda"] } });

    console.log(result);
}


const getData = async () => {
    const result = await fees.find({
        $and: [
            { "Fees.Amount": { $lt: 11000 } },
            { "Fees.Status": "true" }
        ]

        // $or: [
        //     { "Fees.Amount":{$lt:11000} },
        //     { "Fees.Status":"true" }
        //  ]

        // $nor: [
        //     { "Fees.Amount": 11000 },
        //     { "Fees.PaymentDate": "29/29/2029" }
        // ]

        // "Fees.Amount":{$not:{$eq:10000}}
    })
    console.log(result);
}


const getRegex = async () => {
    const result = await fees.find(
        // { Name: { $regex: /na$/i } }
        { Name: { $regex: /^r/i } }
        // { Name: { $regex: /^p/i,$options: 'm' } }// mutiple matching
    )
    console.log(result);
}


const getCountandSort = async () => {
    const result = await fees.find(
        {"Fees.Amount":{$gt:9000}}
    ).sort({Name:-1})
    //estimatedDocumentCount();
    console.log(result);
}



module.exports = { fees, getFees, getAddress, getData,getRegex,getCountandSort };