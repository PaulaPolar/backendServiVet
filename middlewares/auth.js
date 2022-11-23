const jwt = require('jsonwebtoken');
require("dotenv").config()

const authenticate = (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(' ')[1]
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        //console.log("VERIFIED: " + verified);
        //req.verifiedUser = verified // despues puedo acceder a este usuario verificado y sus campos usando el req.verifiedUser
        next()
    } catch (error) {
        res.send(error)
    }

}

module.exports = {
    authenticate
}