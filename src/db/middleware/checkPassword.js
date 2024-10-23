const bcrypt = require('bcrypt')
const { Op } = require('sequelize')
const User = require('../models/userModel')

const checkPassword = async (req, res, next) => {
    try {
        if (!req.body.email) {
            req.body.email = ""
        }
        if (!req.body.username) {
            req.body.username = ""
        }
        const userDetails = await User.findOne({
            where: { [Op.or]:[{username: req.body.username}, {email: req.body.email}] } }
        )
            if (!userDetails) {
                res.status(404).send("username/email do not match with password")
                return
            }

            plainTxtPassword = req.body.password
            hashedPassword = userDetails.password
            const output = await bcrypt.compare(plainTxtPassword, hashedPassword)
            console.log(output)
            
            if (!output) {
                res.status(404).send("username/email do not match with password")
                return
            }

        res.status(200)
        next()
    } catch (error) {
        console.log(error)
        res.status(418).json(error)
    }
}

module.exports = checkPassword