const jwt = require('jsonwebtoken')
require("dotenv").config()

const createJWTToken = usuario => {
    return jwt.sign(usuario, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

module.exports = {
    createJWTToken,
}