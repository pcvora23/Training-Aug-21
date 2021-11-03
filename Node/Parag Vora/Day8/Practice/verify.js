const jwt = require('jsonwebtoken');
const config = require('./config');


function verifyToken(req, res, next) {
    var token = req.headers["x-axcess-token"];
    // console.log(token);
    // console.log("hello");
    jwt.verify(token, config.secretKey, {
        algorithm: config.algorithm,
    }, function (err, decoded) {
        if (err) {
            let errdata =
            {
                message: err.message,
                expiredAt: err.expiredAt,
            }
            console.log(errdata);
            return res.status(401).json(
                {
                    message: 'unauthorised access',
                }
            )
        }
        req.decoded = decoded;
        console.log(decoded);
        next();
    })
}

module.exports = verifyToken;