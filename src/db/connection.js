const{Sequelize} = require('sequelize')

const connection = () => {
    try {
        const connection = new Sequelize(process.env.MYSQL_URI)
        connection.authenticate()
        console.log('Connection successfully established to the database.')
    } catch (error) {
        console.log('Oops. An error has occured.', error)
    }
}

module.exports = connection