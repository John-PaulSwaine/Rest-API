const Game = require('../models/gameModel')

const addGame = async (req, res) => {
    try {
        const output = await Game.create({
            title: req.body.title,
            developer: req.body.developer,
            genre: req.body.genre,
            ageRating: req.body.ageRating
        })
        res.status(200).json({msg: `${req.body.title} has successfully been added.`})
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = addGame