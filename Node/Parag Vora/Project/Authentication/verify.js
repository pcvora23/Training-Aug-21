const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.use([express.json()],(req , res , next)=>{
    let token = req.headers['authorization'];
    // console.log(token);


        jwt.verify(token, global.config.secretKey,
            { algorithm: global.config.algorithm},
            (err, decoded) =>{
                if (err) {
                    return res.status(401).json({
                        Error: 'Unauthorized Access',
                        Error_Message :`${err.message}`
                    });
                    }
            req.decoded = decoded._doc;
            // console.log(decoded._doc);
            next();
            }
        ); 
        
});


module.exports = router;
