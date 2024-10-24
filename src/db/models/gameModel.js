const connection = require('../connection')
const {DataTypes} = require('sequelize')

const Game = connection.define('Game', {
    gameID: {type:DataTypes.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    developer: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    genre: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    ageRating: {type:DataTypes.INTEGER, unique: false, defaultValue: 'not specified'}
})

module.exports = Game