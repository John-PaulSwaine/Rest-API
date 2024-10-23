const bcrypt = require('bcrypt')
require('dotenv').config()

const hashPassword = async (req, res, next) => {
    try {
        console.log(req.body)
        const plainTxtPassword = req.body.password
        const saltRounds = parseInt(process.env.SALT_ROUNDS)
        const hashedPassword = await bcrypt.hash(plainTxtPassword, saltRounds)
        req.body.password = hashedPassword
        next()
    } catch (error) {
        console.log(error)
        res.status(418).json(error)   
    }
}


module.exports = hashPassword