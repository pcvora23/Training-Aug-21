const express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');

router.use(function(req,res,next)
{
    var token = req.headers['x-access-token'];
    jwt.verify(token,global.config.secretKey,
        {
            algorithm: global.config.algorithm
        },
        {
            function(err,decoded)
            {
                if(err)
                {
                    let errdata =
                    {
                        message: err.message,
                        expiredAt:err.expiredAt
                    }
                    console.log(errdata);
                    return res.status(401).json(errdata);
                }
                req.decoded = decoded;
                console.log(decoded);
                next();
            }
        })
})
module.exports = router;