const Game = require('../../models/gameModel')

const updateGenre = async (req, res) => {
    try {
        const outcome = await Game.update(
            {genre: req.body.genre},            
            {where: {
                title : req.body.title
            }}
        ) 
        res.status(200).json(outcome)
        console.log(outcome)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = updateGenre