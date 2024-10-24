const User = require("../models/userModel");
const listUsers = async (req,res) => {
    try {
        const allUsers = await User.findAll()
        res.status(200).json(allUsers)
    } catch (error) {
        console.log(error);
        res.status(418).json(error)
    }
}
 
module.exports = listUsers