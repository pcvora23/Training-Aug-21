var express = require('express');
var router = express.Router();
const verifyToken = require('./verify');


/* GET customers listing without protection. */
router.get('/data', function (req, res, next) {
    let customerdata = [
        {
            customerid: 1,
            customername: 'Mahfuz Bappy'
        },
        {
            customerid: 2,
            customername: 'Shamim Uddin'
        },
        {
            customerid: 3,
            customername: 'Ishani Isha'
        }
    ];

    res.json(customerdata);
});;

module.exports = router;
