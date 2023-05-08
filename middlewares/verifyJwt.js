const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.SECRET_KEY


const verifyJwt = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }  
    
    jwt.verify(token, secret, (err, decoded) => {
        console.log(err)
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyJwt;