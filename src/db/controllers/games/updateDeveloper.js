const Game = require('../../models/gameModel')

const updateDeveloper = async (req, res) => {
    try {
        const outcome = await Game.update(
            {developer: req.body.developer},            
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

module.exports = updateDeveloper