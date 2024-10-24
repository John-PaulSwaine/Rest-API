const connection = require('../connection')
const {DataTypes} = require('sequelize')

const Anime = connection.define('Anime', {
    AnimeID: {type:DataTypes.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    genre: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    studio: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specidied'}
})

module.exports = Anime