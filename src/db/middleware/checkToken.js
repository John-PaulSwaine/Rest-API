const jwt = require('jsonwebtoken')
require('dotenv')
const User = require('../models/userModel')

const checkToken = async (req, res, next) => {
    try {
        const secretKey = process.env.JWT_SECRET_KEY
        const token = req.header('Authorization').replace('Bearer ', '')
        const decodedToken = jwt.verify(token, secretKey)
        console.log(decodedToken)
        const username = decodedToken.username
        const findResponse = await User.findOne({where: {
            username: username
        }})
        if (!findResponse) {
            throw new Error("user no longer in database access denied")
        } else {
            req.body.username = username;
            req.body.email = decodedToken.email;
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(418).json(error)
    }
}

module.exports = checkToken