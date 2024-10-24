const Game = require('../../models/gameModel')

const listAllGames = async (req, res) => {
    try {
        const output = await Game.findAll()
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = listAllGames