const{Sequelize} = require('sequelize')
require('dotenv').config()
const connection = new Sequelize(process.env.MYSQL_URI)

    try {
        
        connection.authenticate()
        console.log('Connection successfully established to the database.')
    } catch (error) {
        console.log('Oops. An error has occured.', error)
    }


module.exports = connection