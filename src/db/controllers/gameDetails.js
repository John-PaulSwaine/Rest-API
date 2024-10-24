const Game = require('../models/gameModel')

const gameDetails = async (req, res) => {
    try {
        const output = await Game.findOne({
            where: {
            title: req.body.title
    }})
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = gameDetails